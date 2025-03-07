var scope = "global";
const s = function () {
  console.log(scope); // local
  var scope = "local";

  function a() {
    console.log(scope);
  }
  a();
};
s();
