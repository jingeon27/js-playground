console.log("1" || "asdf");
const asdf = {};
console.log(asdf.s);
function curryingStoreString(input) {
  const stringArray = [];

  // 내부 함수를 반환하여 커링을 구현합니다.
  function curried(input) {
    if (input === undefined) {
      return stringArray;
    } else {
      stringArray.push(input);
      return curried;
    }
  }

  return curried(input);
}

// 커링 함수를 사용해 문자열을 저장합니다.
const storeStrings =
  curryingStoreString("Hello")("World")("This")("is")("a")("test")();

console.log(storeStrings); // ['Hello', 'World', 'This', 'is', 'a', 'test']
