function a() {
  //function a Execution Context(EC)
  var v = "지역 변수";

  function b() {
    //function b Execution Context
    console.log(v);
  }
  b();
}

//Global Execution Context
a();
console.log(v);
