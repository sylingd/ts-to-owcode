export default class Result {
  private result: string = '';
  private retract = 0;

  private getRetract() {
    let res = '';
    for (let i = 0; i < this.retract; i++) res += "\t";
    return res;
  }

  get() {
    return this.result;
  }

  push(str?: string, doWithRetract = 0) {
    if (str && str.length > 0) {
      this.result += this.getRetract();
      this.result += str;
    }
    this.result += "\n";
    if (doWithRetract) {
      this.retract += doWithRetract;
    }
  }

  leftBrace() {
    this.push('{', 1);
  }
  rightBrace() {
    this.retract--;
    this.push('}');
  }
}