var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this;
  },
};

console.log(person.fullName());
