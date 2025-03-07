function solution(numbers) {
  var answer = [];
  //   const isBinaryTree = (number) => {
  //     const len = number.length;
  //     if (len === 3) {
  //       return number.at(1) === "1";
  //     } else if (len < 3) {
  //       return false;
  //     } else {
  //       return number.at(len / 2) === "1"
  //         ? isBinaryTree(number.slice(0, len / 2)) &&
  //             isBinaryTree(number.slice(len / 2 + 1, len))
  //         : false;
  //     }
  //   };
  const isBinaryTree = (number) => {
    let bool = true;
    [...number].map((e, i) => {
      if (i % 2 === 1 && e !== "1") {
        bool = false;
      }
    });
    return bool;
  };
  numbers.map((e) => {
    if (e === 1) {
      answer.push(1);
    } else {
      answer.push(
        isBinaryTree(e.toString(2)) | isBinaryTree("0" + e.toString(2))
      );
    }
  });
  return answer;
}
console.log(solution([234, 123, 423]));
