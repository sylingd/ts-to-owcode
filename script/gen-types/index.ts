import { resolve } from 'path';
import * as fs from 'fs';
import * as ts from 'typescript';
import TSWriter from './TSWriter';

type AvaliableType = ts.UnionTypeNode | ts.KeywordTypeNode | ts.TypeReferenceNode | ts.ArrayTypeNode;

interface FunctionResult {
  name: string;
  desc: string;
  args: {
    name: string;
    desc: string;
    type: string;
  }[];
}

const funcAlias: { [x: string]: string } = {
  'any': 'oneOf',
  'all': 'allOf',
  'map': 'mapOf'
}
const enumAlias: { [x: string]: string } = {
  Map: 'Maps',
  Position: 'Pos'
}
const enumType: { [x: string]: string } = {
  Pos: 'VECTOR'
}
const knownType: { [x: string]: AvaliableType } = {
  PLAYER: ts.createTypeReferenceNode('Player', undefined),
  VECTOR: ts.createTypeReferenceNode('Vector', undefined),
  'STRING CONSTANT': ts.createTypeReferenceNode('Strings', undefined),
  ANY: ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
  VOID: ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword),
  VARIABLE: ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
  BOOLEAN: ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
  NUMBER: ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
  STRING: ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
}

// 补充国际化文本
const locales: any = require('./locales.json');
const returnType: { [x: string]: string } = require('./returnType.json');
const sourceDir = resolve(__dirname, 'data');
const resultDir = resolve(__dirname, 'result');
const result = {
  functions: [] as FunctionResult[],
  strings: [] as string[],
  constants: [] as string[],
  events: [] as string[]
}

const numToEng = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine'
}
// const langs = ["en-US", "es-MX", "fr-FR", "ja-JP", "pt-BR", "zh-CN"];
const langs = ["en-US", "ja-JP", "zh-CN"];
const ignores = ['return', '__end__', '__else__', '__elif__', '__if__', '__while__'];
const langsResult: any = {};
langs.forEach(it => langsResult[it] = {});

function read(file: string) {
  const content = fs.readFileSync(resolve(sourceDir, file + '.js'), { encoding: 'UTF8' });
  const result = [];
  // 取出JSON
  let lastIndex = 0;
  while (content.indexOf('//begin-json', lastIndex) >= 0) {
    const start = content.indexOf('//begin-json', lastIndex) + 12;
    const end = content.indexOf('//end-json', lastIndex);
    const json = content.substring(start, end).trim();
    // console.log(json);
    let data = null;
    try {
      data = eval(`(${json})`);
    } catch (e) {
      console.error(`Parse json fail at ${file}`);
    }
    result.push(data);
    lastIndex = end + 10;
  }
  return result;
}

function formatArg(arg: any) {
  return {
    name: arg.name.toLowerCase().replace(/ (\w)/g, (matches: string, s1: string) => {
      return s1.toUpperCase();
    }),
    type: arg.type.toUpperCase(),
    desc: arg.description
  };
}

function getArgs(args?: any[]) {
  if (!args || args.length === 0) {
    return [];
  }
  const result = args.map(formatArg);
  let cnt = 2;
  const keys = result.map(result => result.name);
  // 第一遍：检查有没有不符合规则的
  keys.forEach((it, idx) => {
    if (!(/^([a-zA-Z])([a-zA-Z0-9_]+)$/.test(it))) {
      let newKey = it.replace(/([^a-zA-Z0-9_]+)/g, '');
      if (!(/^([a-zA-Z])/.test(newKey))) {
        newKey = 'param' + newKey;
      }
      keys[idx] = newKey;
      result[idx].name = newKey;
    }
  });
  // 第二遍：检查是否有重复的key
  keys.forEach((key, idx) => {
    let lastIndex = idx + 1;
    while (true) {
      const next = keys.indexOf(key, lastIndex);
      if (next !== -1) {
        keys[next] = `${key}${cnt++}`;
        result[next].name = keys[next];
        lastIndex = next + 1;
      } else {
        break;
      }
    }
  });
  return result;
}

/**
 * 移除前后的特殊字符
 * @param {string} str 
 */
function removeSpecial(str: string) {
  let res = str;
  res = res.replace(/(\d)/g, (m: string, s1: string) => {
    // @ts-ignore
    return numToEng[parseInt(s1)];
  });
  while (res.length > 0 && !(/^([a-zA-Z])/.test(res))) {
    res = res.substr(1);
  }
  while (res.length > 0 && !(/([a-zA-Z0-9])$/.test(res))) {
    res = res.substr(0, res.length - 1);
  }
  return res;
}

function upperFirse(str: string) {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function formatTo(from: string, toFormat: string) {
  // 检测当前的格式，统一转换为以空格分隔的小写命名
  let formatted = removeSpecial(from);
  formatted = formatted.replace(/([\._\-])/g, ' ');
  // 本身就是全大写的，转化为小写
  if (/^([A-Z ]+)$/.test(formatted)) {
    formatted = formatted.toLowerCase();
  }
  // 本身已经是驼峰命名了
  if (/^(\w+)$/.test(formatted)) {
    formatted = formatted.replace(/([A-Z])/g, ' $1');
  }
  const formattedArr = formatted.toLowerCase().trim().split(' ');
  // 转化为目标
  if (toFormat === 'TO_FORMAT') {
    return formattedArr.join('_').toUpperCase();
  }
  if (toFormat === 'toFormat') {
    return formattedArr[0] + formattedArr.splice(1).map(it => upperFirse(it)).join('');
  }
  if (toFormat === 'ToFormat') {
    return formattedArr.map(it => upperFirse(it)).join('');
  }
  return formatted;
}

const langWarnings: any = {};
function writeLang(key: string, allLangs: any) {
  langs.forEach(lang => {
    if (typeof(langsResult[lang][key]) !== 'undefined') {
      return;
    }
    const item = (locales[key] && locales[key][lang]) || allLangs[lang] || '';
    if (!item) {
      if (typeof(langWarnings[key]) === 'undefined') {
        langWarnings[key] = [];
      }
      if (!langWarnings[key].includes(lang)) {
        langWarnings[key].push(lang);
      }
      langsResult[lang][key] = key;
    } else {
      langsResult[lang][key] = item;
    }
  });
}

function addFunc(func: FunctionResult, allLangs: any) {
  // 看看是不是在忽略清单里面
  if (ignores.includes(func.name)) {
    return;
  }
  let newName = func.name;
  newName = formatTo(newName, 'toFormat');
  if (newName === '') {
    return;
  }
  if (typeof(funcAlias[newName]) !== 'undefined') {
    newName = funcAlias[newName];
  }
  result.functions.push({ ...func, name: newName });
  // 写入语言
  const langKey = ('FUNC_' + formatTo(newName, 'TO_FORMAT')).replace(/([_]+)/g, '_');
  writeLang(langKey, allLangs);
}

// 读取actions
function readActions() {
  const actions = read('actions')[0];
  actions.forEach((it: any) => {
    addFunc({
      name: it.opy || "",
      desc: it.description,
      args: getArgs(it.args)
    }, it)
  });
}
readActions();

// 读取常量
function readConst() {
  const constants = read('constants')[0];
  Object.keys(constants).forEach(k => {
    const it = constants[k];
    let key = it.opy || formatTo(k, 'ToFormat');
    if (typeof(enumAlias[key]) !== 'undefined') {
      key = enumAlias[key];
    }
    it.values.forEach((iit: any) => {
      let name = iit.opy;
      if (name.includes('.')) {
        name = name.substr(name.indexOf('.') + 1);
      }
      name = formatTo(name, 'TO_FORMAT');
      const fullName = key + '.' + name;
      // TODO: alias
      result.constants.push(fullName);
      const langKey = ('CONST_' + formatTo(`${key}_${name}`, 'TO_FORMAT')).replace(/([_]+)/g, '_');
      writeLang(langKey, iit);
    });
  });
}
readConst();

// values比较特殊，一部分会当成函数，一部分会当成常量，取决于它有没有参数
function readValues() {
  const values = read('values')[0];
  values.forEach((it: any) => {
    if (it.args && it.args.length > 0) {
      // 当做函数处理
      addFunc({
        name: it.opy || "",
        desc: it.description,
        args: getArgs(it.args)
      }, it);
    } else {
      let name = formatTo(it.opy, 'TO_FORMAT');
      if (!name.includes('.')) {
        name = 'Game.' + name;
      }
      result.constants.push(name);
      const langKey = ('CONST_' + formatTo(name, 'TO_FORMAT')).replace(/([_]+)/g, '_');
      writeLang(langKey, it);
    }
  });
}
readValues();

// 事件
function readEvents() {
  const events = read('keywords')[1];
  events.forEach((it: any) => {
    const name = formatTo(it.opy, 'TO_FORMAT');
    result.events.push(name);
    writeLang(`EVENT_${name}`, it);
  });
}
readEvents();


// 内置字符串
function readStrings() {
  const strings = read('stringKw')[0];
  strings.forEach((it: any) => {
    const name = formatTo(it.opy, 'TO_FORMAT');
    if (name === '') {
      return;
    }
    result.strings.push(name);
    writeLang(`CONST_STR_${name}`, it);
  });
}
readStrings();


// 全局关键字
function readGlobalKeyword() {
  const keywords = read('keywords')[0];
  keywords.forEach((it: any) => {
    const name = 'G_' + formatTo(it['en-US'], 'TO_FORMAT');
    writeLang(name, it);
  });
}
readGlobalKeyword();


// 提取出warning
if (Object.keys(langWarnings).length > 0) {
  const locales: any = {};
  Object.keys(langWarnings).forEach(name => {
    locales[name] = {};
    langWarnings[name].forEach((lang: string) => locales[name][lang] = "");
  });
  fs.writeFileSync(resolve(__dirname, 'locales_2.json'), JSON.stringify(locales, null, '  '), { encoding: 'UTF8' });
}

function write() {
  const writer = new TSWriter(fs.readFileSync(resolve(__dirname, 'global.template.ts'), { encoding: 'UTF8' }));
  // 写入事件
  writer.pushSetGlobal('Events', ts.createObjectLiteral(result.events.map(event => {
    const node = ts.createPropertyAssignment(ts.createIdentifier(event), ts.createStringLiteral(event));
    return node;
  })));

  // 写常量
  const otherNs = writer.createModule('Game', [], ts.NodeFlags.Namespace, false);
  const enums: { [x: string]: { [x: string]: ts.Expression } } = {};
  result.constants.map(it => {
    const index = it.indexOf('.');
    const parentName = it.substr(0, index);
    const selfName = it.substr(index + 1);
    if (parentName === 'Game') {
      writer.insertToModule(otherNs, writer.createConst(selfName, ts.SyntaxKind.AnyKeyword));
    } else {
      if (typeof(enums[parentName]) === 'undefined') {
        enums[parentName] = {};
      }
      if (typeof(enums[parentName][selfName]) !== 'undefined') {
        return;
      }
      // 看一下有没有特别指定的类型
      if (typeof(enumType[parentName]) !== 'undefined') {
        enums[parentName][selfName] = ts.createStringLiteral(`_GKD_${enumType[parentName]}_`);
      } else {
        enums[parentName][selfName] = ts.createStringLiteral(selfName);
      }
    }
  });
  // 写事件
  enums['Events'] = {};
  result.events.forEach(it => enums['Events'][it] = ts.createStringLiteral(it));
  // 写字符串
  enums['Strings'] = {};
  result.strings.forEach(it => enums['Strings'][it] = ts.createStringLiteral(it));
  // 写入声明
  writer.pushDeclare([
    otherNs,
    ...Object.keys(enums).map(it => writer.createEnum(it, enums[it]))
  ]);

  // 写入函数声明
  const unknownTypes: string[] = [];
  const enumNames = Object.keys(enums);
  const enumAliasNames = Object.keys(enumAlias);
  const enumNamesUpper = enumNames.map(it => it.toUpperCase());
  const enumAliasNamesUpper = enumAliasNames.map(it => it.toUpperCase());
  const detectType = (text: string): AvaliableType => {
    // 如果有好几种类型
    if (text.includes('|')) {
      return ts.createUnionTypeNode(text.split('|').map(it => detectType(it.trim())));
    }
    // 可能是数组类型
    if (/\[\]$/.test(text)) {
      return ts.createArrayTypeNode(detectType(text.substr(0, text.length - 2)));
    }
    // 末尾有个?
    if (/\?$/.test(text)) {
      return ts.createUnionTypeNode([
        detectType(text.substr(0, text.length - 1)),
        ts.createKeywordTypeNode(ts.SyntaxKind.NullKeyword)
      ]);
    }
    // 从已知类型中检测
    if (typeof(knownType[text]) !== 'undefined') {
      return knownType[text];
    }
    // 从之前的enum中检测
    let typeText = text;
    let hasGot = false;
    if (enumAliasNamesUpper.includes(typeText)) {
      hasGot = true;
      typeText = enumAlias[enumAliasNames[enumAliasNamesUpper.indexOf(typeText)]];
    }
    if (enumNames.includes(typeText)) {
      hasGot = true;
    }
    const isEnum = enumNamesUpper.indexOf(typeText);
    if (isEnum !== -1) {
      hasGot = true;
      typeText = enumNames[isEnum];
    }
    if (typeof(enumType[typeText]) !== 'undefined') {
      return detectType(enumType[typeText]);
    }
    if (hasGot) {
      return ts.createTypeReferenceNode(enumNames[isEnum], undefined);
    }

    !unknownTypes.includes(text) && unknownTypes.push(text);
    return knownType['ANY'];
  }
  const unknownReturn: string[] = [];
  writer.pushDeclare(result.functions.map(it => {
    let itReturn: AvaliableType = knownType['ANY'];
    if (typeof(returnType[it.name]) === 'undefined') {
      unknownReturn.push(it.name);
    } else {
      itReturn = detectType(returnType[it.name]);
    }
    return writer.createFunction(it.name, it.args.map(arg => {
      return {
        name: arg.name,
        desc: arg.desc,
        type: detectType(arg.type)
      }
    }), itReturn, it.desc);
  }));

  // 生成返回定义
  const returns: any = {};
  unknownReturn.forEach(it => returns[it] = "");
  fs.writeFileSync(resolve(__dirname, 'returnType_2.json'), JSON.stringify(returns, null, '  '), { encoding: 'UTF8' });

  // console.log(unknownTypes);
  console.log(enumNames);

  // 生成 ts 文件
  fs.writeFileSync(resolve(resultDir, 'global.ts'), writer.getText(), {
    encoding: 'UTF8'
  });
  fs.writeFileSync(resolve(resultDir, 'functions.json'), JSON.stringify(result.functions, null, '  '), {
    encoding: 'UTF8'
  });
  fs.writeFileSync(resolve(resultDir, 'constants.json'), JSON.stringify(result.constants, null, '  '), {
    encoding: 'UTF8'
  });
  // 写入语言
  langs.forEach(it => {
    fs.writeFileSync(resolve(resultDir, 'locales', it + '.json'), JSON.stringify(langsResult[it], null, '  '), {
      encoding: 'UTF8'
    });
  });
}
write();