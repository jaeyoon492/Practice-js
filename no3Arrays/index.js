const something = "재바리";

const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
console.log(mon, tue, wed, thu, fri);
//이맇게 작성해도 문제는 없지만 비효율 적이다.

const daysOfWeek = ["Mon", "The", "Wed", "Thu", "Fri", true, 123, "재바리"];
//배열을 사용할땐 []안에 원하는 데이터를 넣어주면 된다.
//js의 경우엔 배열안에 다른 타입을 넣어도 작동한다.

console.log(daysOfWeek[2]);
//Wed 출력 이유는 0부터 세기 시작 하기 때문.
