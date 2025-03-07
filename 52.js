function Me(name) {
  this.name = name;
}

Me.prototype.wow = function () {
  console.log("WOW!");
};

let person = new Me("Jason");
person.wow(); // WOW!
