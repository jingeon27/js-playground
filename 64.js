function infixToPostfix(infixExpression) {
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };
  function isOperator(token) {
    return "+-*/".includes(token);
  }
  function higherPrecedence(op1, op2) {
    return precedence[op1] >= precedence[op2];
  }
  let postfixExpression = "";
  const stack = [];
  for (let token of infixExpression) {
    if (token.match(/[A-Za-z0-9]/)) {
      postfixExpression += token;
    } else if (isOperator(token)) {
      while (
        stack.length > 0 &&
        isOperator(stack[stack.length - 1]) &&
        higherPrecedence(stack[stack.length - 1], token)
      ) {
        postfixExpression += stack.pop();
      }
      stack.push(token);
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        postfixExpression += stack.pop();
      }
      stack.pop();
    }
  }
  while (stack.length > 0) {
    postfixExpression += stack.pop();
  }
  return postfixExpression;
}

const infixExpression = "3+5*2/(7-2)";
const postfixExpression = infixToPostfix(infixExpression);
const infixExpression2 = "3*(5+2)-9";
const postfixExpression2 = infixToPostfix(infixExpression2);
console.log(postfixExpression);
console.log(postfixExpression2);
