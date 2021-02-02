const title = document.getElementById("title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";

//4번
function handleClick() {
  const currentColor = title.style.color;

  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
//1번
function init() {
  title.style.color = BASE_COLOR; //2번
}

title.addEventListener("click", handleClick); //3번
//클릭이벤트가 발생할수도 있으니 대기하라

//가독성을 높이기 위해 init(); 있으면 인간은 init()펑션 부터 읽으면됨
init();
