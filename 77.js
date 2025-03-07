const onRadioChange =
  (...funcs) =>
  (checked) => {
    const isCheckedReturnValue = (prev) => (value) => checked ? value : prev;
    funcs.map((func) => func);
        };

der = (func='1') => console.log(func);
console.log(der.args)
onRadioChange(der('asdf'))(true)