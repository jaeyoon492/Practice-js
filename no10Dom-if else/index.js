const title = document.getElementById("title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";
console.log(title.style.color);

//4
function handleClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
//1번
function init() {
  title.style.color = BASE_COLOR;
  console.log(title.style.color); //2
  title.addEventListener("click", handleClick); //3
}
init();
