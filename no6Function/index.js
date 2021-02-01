//'' , "" 는 둘다 모양만 다르고 같다.
//하지만 ``(백틱)는 완전 다름
//변수 입력시 ${매개변수}

//함수의 매개변수를 지정하고 매개변수에 인수를 대입하여 중괄호안에 내용을 실행한다.
function sayHello(name, age) {
  console.log(`hello ${name} you are ${age} years old`);
}
//출력문구:hello 재윤 you are 27 years old

//인수 지정
sayHello("재윤", 27);

//return : 함수의 데이터를 반환하고 종료함
function sayHelloyoon(name, age) {
  return `hello ${name} you are ${age} years old`;
}

const HelloYoon = sayHelloyoon("재바리", 30);
//리턴한 함수의 데이터를 HelloYoon에 저장한다.
console.log(HelloYoon);
//저장한HelloYoon을 출력한다.
//출력문구:hello 재바리 you are 30 years old

//오브젝트 calculator안에 함수 plus:function에 파라메터(a,b)를 지정
//calculator.plus에서 인수(3,6)을 받아 함수를 호출
//a + b를 리턴하여 호출한곳에 상수변수plus에 저장
//console.log()를 통해 저장한 상수변수를 출력.
const calculator = {
  plus: function (a, b) {
    let result = 3;
    for (let i = 1; i < 6; i++) {
      result *= 3;
    }
    return result;
  },
};

const plus = calculator.plus(3, 6);
console.log(plus);
//

const cal = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multi: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  remain: function (a, b) {
    return a % b;
  },
  poewr: function (a, b) {
    return a ** b;
  },
};

const plus = cal.plus(2, 4);
const minus = cal.minus(2, 4);
const multi = cal.minus(2, 4);
const divide = cal.minus(2, 4);
const remain = cal.minus(2, 4);
const power = cal.minus(2, 4);
console.log(plus, minus, multi, divide, remain, power);
