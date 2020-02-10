import { v4 as uuidv4 } from 'uuid';
import { Ast } from "../ast";
import { expressionToCode } from "./actions";
import { conditionToCode } from "./conditions";
import { getEventText } from "./event";
import i18n from "./i18n";
import Result from "./result";

function uuid() {
  return uuidv4().replace(/\-/g, '');
}

interface GeneratorOption {
  uglify: boolean;
}
export default function(ast: Ast, options?: GeneratorOption) {
  const result = new Result;
  // TODO: 变量混淆
  if (options) {
    options.uglify = false;
  }
  // 变量混淆
  const uglifyGlobal: { [x: string]: string } = {};
  const uglifyPlayer: { [x: string]: string } = {};
  // 变量区域
  if (ast.variable.global.length > 0 || ast.variable.player.length > 0) {
    result.push(i18n('G_VAR'));
    result.leftBrace();
    if (ast.variable.global.length > 0) {
      result.push(i18n('G_VAR_GLOBAL') + ':', 1);
      ast.variable.global.forEach((name, index) => {
        uglifyGlobal[name] = options?.uglify ? uuid() : name;
        result.push(`${index}: ${uglifyGlobal[name]}`);
      });
      result.push('', -1);
    }
    if (ast.variable.player.length > 0) {
      result.push(i18n('G_VAR_PLAYER') + ':', 1);
      ast.variable.global.forEach((name, index) => {
        uglifyPlayer[name] = options?.uglify ? uuid() : name;
        result.push(`${index}: ${uglifyPlayer[name]}`);
      });
      result.push('', -1);
    }
    result.rightBrace();
    result.push();
  }
  // 规则区域
  ast.rules.forEach(rule => {
    const name = options?.uglify ? uuid() : rule.name;
    result.push(`${i18n('G_RULE')}("${name}")`);
    result.leftBrace();
    // 事件
    result.push(i18n('G_RULE_EVENT'));
    result.leftBrace();
    getEventText(rule.event).forEach(text => result.push(text + ';'));
    result.rightBrace();
    // 条件
    result.push(i18n('G_RULE_COND'));
    result.leftBrace();
    rule.conditions.map(conditionToCode.bind(null, uglifyGlobal, uglifyPlayer)).forEach(text => result.push(text + ';'));
    result.rightBrace();
    // 规则
    result.push(i18n('G_RULE_ACT'));
    result.leftBrace();
    rule.actions.map(expressionToCode.bind(null, uglifyGlobal, uglifyPlayer)).forEach(text => result.push(text + ';'));
    result.rightBrace();
    // 完成规则
    result.rightBrace();
    result.push();
  });

  return result.get();
}