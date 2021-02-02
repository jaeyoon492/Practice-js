/*classList.toggle(): 클래스값이 있는지 체크하고 없으면 더하고 있으면 제거한다. */

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick); //title이 클릭되면 handleClick펑션을 호출하라
}
init();
