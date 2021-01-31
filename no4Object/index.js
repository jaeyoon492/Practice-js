//object를 만들땐 {}안에 값을 넣으면 된다.
//javariInfo는 상수지만 안에 name은 변수다.

const javariInfo = {
  name: javeri,
  age: 27,
  gender: "Male",
  isHandsome: true,

  favMovies: ["세얼간이", "빅쇼트", "300"],
  //object 안에 배열을 넣는게 가능하다.

  ProgramingLv: {
    java: 1,
    css: 1,
    html: 1,
    js: 0.5,
  },
  //object안에 object를 넣는것도 가능하다.

  favFood: [
    {
      name: 삼겹살,
      fatty: true,
    },
    {
      name: 메밀소바,
      fatty: false,
    },
  ], //favFood의 테두리
}; //javariInfo의 object테두리

console.log(javariInfo);
//javariInfo의 모든 정보를 출력

console.log(javariInfo.gender);
//원하는 정보만 출력

javariInfo.gender = "Female";
//object안쪽은 변수 형태로 수정이 가능하다.

console.log(javariInfo.gender);
//Female로 출력됨

console.log(favFood[0].fatty);
//삽결살이 살이 찌는지 알수있다 ㅋㅋ
