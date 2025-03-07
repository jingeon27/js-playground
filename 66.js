class GyoGua {
  constructor(pilsu) {
    this.pilsu = pilsu;
    this.answer = "YES";
  }
  suup(arr) {
    let i = 0;
    for (const e of arr) {
      if (this.pilsu.slice(i, this.pilsu.length).includes(e)) {
        if (this.pilsu[i] !== e) {
          this.answer = "NO";
          break;
        } else {
          i++;
        }
      }
    }
    if (this.pilsu.length !== i) {
      this.answer = "NO";
    }
  }
  result() {
    console.log(this.answer);
    this.answer = "YES";
  }
}

const case1 = new GyoGua(["C", "B", "A"]);
const case2 = new GyoGua(["A", "F", "C"]);

case1.suup("CBDAGE");
case1.result();
case1.suup("FGCDAB");
case1.result();
case1.suup("CTSBDEA");
case1.result();

case2.suup("ACFC");
case2.result();
