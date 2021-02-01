//if가 참이면 블럭안에 내용을 실행하고 아니면 else의 블럭을 실행한다.
//아는게 나오니까 참좋네 ㅎㅎ;
//equals 은 ===
if (10 === "10") {
  console.log("true");
} else if ("10" === "10") {
  console.log("yes");
} else {
  console.log("no");
}

//&&은 좌변과 우변의 모두 true 일때 true이다.
if (20 > 5 && "javari" === "javari") {
  console.log("yes");
} else {
  console.log("no");
}

//||은 좌변과 우변중 하나만 true여도 true이다.
if (20 < 5 || "javari" === "javari") {
  console.log("yes");
} else {
  console.log("no");
}
//prompt는 유저에게 뭘 물어볼수 있는거다.
const age = prompt("How old are you?");

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
