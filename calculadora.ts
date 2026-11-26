class Calculator {
  currentInput: string; // concateno os digitos em string e converto la na frente em parseFloat
  operator: string;
  previousInput: string;

  constructor() {
    this.currentInput = "";
    this.operator = "";
    this.previousInput = "";
  }
  appendNumber(number: string) {
    this.currentInput = this.currentInput + number;
  }
  setOperator(operator: string) {
    this.operator = operator;
    this.previousInput = this.currentInput;
    this.currentInput = "";
  }
  calculate() {
    let resultado = 0;
    let anterior = parseFloat(this.previousInput);
    let atual = parseFloat(this.currentInput);

    switch (this.operator) {
      case "+":
        resultado = anterior + atual;
        break;
      case "-":
        resultado = anterior - atual;
        break;
      case "*":
        resultado = anterior * atual;
        break;
      case "/":
        resultado = anterior / atual;
        break;
    }

    this.currentInput = resultado.toString();
    this.operator = "";
    this.previousInput = "";
    return resultado;
  }
}

let calc1 = new Calculator();
calc1.appendNumber("1");
calc1.appendNumber("5");
calc1.setOperator("+"); // vou nem comentar
calc1.appendNumber("7");
console.log("15 + 7 = " + calc1.calculate());

let calc2 = new Calculator();
calc2.appendNumber("4");
calc2.appendNumber("0");
calc2.setOperator("-"); // subtracao
calc2.appendNumber("1");
calc2.appendNumber("8");
console.log("40 - 18 = " + calc2.calculate());

let calc3 = new Calculator();
calc3.appendNumber("6");
calc3.setOperator("*"); // multiplicacao
calc3.appendNumber("9");
console.log("6 * 9 = " + calc3.calculate());

let calc4 = new Calculator();
calc4.appendNumber("8");
calc4.appendNumber("1");
calc4.setOperator("/"); // faz divisao
calc4.appendNumber("3");
console.log("81 / 3 = " + calc4.calculate());
