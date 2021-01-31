//'' , "" 는 둘다 모양만 다르고 같다.
//하지만 ``(백틱)는 완전 다름
//변수 입력시 ${변수명}
function sayHello(name, age) {
  console.log(`hello ${name} you are ${age} years old`);
}
//출력문구:hello 재윤 you are 27 years old

//인수작성
sayHello("재윤", 27);

//return : 함수의 데이터를 반환하고 종료함
function sayHelloyoon(name, age) {
  return `hello ${name} you are ${age} years old`;
}

const HelloYoon = sayHelloyoon("재바리", 30);
console.log(HelloYoon);
//출력문구:hello 재바리 you are 30 years old

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

const plus = calculator.plus(3, 6);
console.log(plus);
//9로 반환된다.

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
  div: function (a, b) {
    return a / b;
  },
  remain: function (a, b) {
    return a % b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plus = cal.plus(3, 6);
console.log(plus);

const minus = cal.minus(3, 6);
console.log(minus);

const multi = cal.multi(3, 6);
console.log(multi);

const div = cal.div(3, 6);
console.log(div);

const remain = cal.remain(3, 6);
console.log(remain);

const power = cal.power(3, 6);
console.log(power);
