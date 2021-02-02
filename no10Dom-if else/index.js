const title = document.getElementById("title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";
console.log(title.style.color);
// 머리부터
function handleClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  // title.style.color = BASE_COLOR;
  console.log(title.style);
  title.addEventListener("click", handleClick);
}
init();
// 발끝가지
