function solution(input) {
  var stack = [];
  var answer = 0;
  for (var i in input) {
    if (input[i] === "(") {
      stack.push(input[i]);
    } else {
      if (input[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer++;
      }
    }
  }
  console.log(answer);
}
