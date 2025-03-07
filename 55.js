const func = (array) => {
  array = [...array, "asdf"];
  array[0][0] = 1;
  return array;
};
const arr = [[0]];
func(arr);
console.log(arr, func(arr));
