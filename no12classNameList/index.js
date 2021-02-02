/*.classList.contains()는 해당 엘리먼트(여기선title)에 
지정한 class(여기선clicked)가 있는지 확인하는 메소드이다.*/

/*이 코드를 해석하면 title엘리먼트에 clicked가 없으면 추가하고 종료
또 클릭(이벤트)했을때는 clicked가 존재하니 clicked삭제하고 종료*/

/*!는 부정을 뜻한다 이 코드에서는 if문에 hasclass가 아닐때 즉 class에 cliked가 없으면
블럭을 실행한다 라는뜻 이다.*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick); //title이 클릭되면 handleClick펑션을 호출하라
}
init();
