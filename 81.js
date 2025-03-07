class asdf {
  rr;
  constructor() {
    this.rr = 22;
  }

  qwer() {
    return this.rr;
  }
}
const ff = new asdf();

const uu = ff.qwer;

console.log(globalThis, ff.qwer());
