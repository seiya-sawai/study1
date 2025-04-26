let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  const expression = display.value;
  try {
    const result = evaluateExpression(expression);
    display.value = result;
  } catch (error) {
    display.value = "エラー";
  }
}

function evaluateExpression(expr) {
  const tokens = tokenize(expr);
  const rpn = infixToPostfix(tokens);
  return evaluateRPN(rpn);
}

// 1. 入力文字列を数値と演算子に分解
function tokenize(expr) {
  const tokens = [];
  let numberBuffer = "";

  for (let char of expr) {
    if (/\d|\./.test(char)) {
      numberBuffer += char;
    } else if ("+-*/".includes(char)) {
      if (numberBuffer !== "") {
        tokens.push(numberBuffer);
        numberBuffer = "";
      }
      tokens.push(char);
    }
  }

  if (numberBuffer !== "") {
    tokens.push(numberBuffer);
  }

  return tokens;
}

// 2. 中置記法を後置記法（RPN）へ変換
function infixToPostfix(tokens) {
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
  const output = [];
  const operators = [];

  tokens.forEach(token => {
    if (!isNaN(token)) {
      output.push(token);
    } else if ("+-*/".includes(token)) {
      while (
        operators.length &&
        precedence[operators[operators.length - 1]] >= precedence[token]
      ) {
        output.push(operators.pop());
      }
      operators.push(token);
    }
  });

  while (operators.length) {
    output.push(operators.pop());
  }

  return output;
}

// 3. RPN を計算
function evaluateRPN(rpn) {
  const stack = [];

  rpn.forEach(token => {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      let result;
      switch (token) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : NaN; break;
        default: throw new Error("不正な演算子");
      }

      stack.push(result);
    }
  });

  return stack[0];
}
