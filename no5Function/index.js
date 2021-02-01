//함수의 선언방법
function sayHello(/*매개변수*/) {
  console.log("Hello!" /*매개변수*/);
}

//함수sayHello의 매개변수(name , age)에 인수(yoon , 27)을 대입하여 중괄호 내용을 출력한다.
function sayHello(name, age) {
  console.log("hello", name, "you have", age, "years of age!");
} //출력문구: hello yoon you have 27 years of age!

//함수의 호출방법
//함수안에 인수를 선언
sayHello("yoon", 27);
