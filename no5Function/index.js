//function 작성문법
function sayHello(/*변수명*/) {
  console.log("Hello!" /*변수명*/);
}

function sayHello(name, age) {
  console.log("hello", name, "you have", age, "years of age!");
}
//출력문구: hello yoon you have 27 years of age!

sayHello("yoon", 27);
//변수의 값을 지정 (변수name은 "yoon",변수 age는 27)
