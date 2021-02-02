//메서드 .className은 해당엘리먼트에 클래스이름을 추가하는것

/*아래 if문의 뜻은 if(title의 클래스 이름이 clicked가 아니면)
{title에 클래스 이름을 clicked로 바꾼다.}*/

/*그렇게 한바퀴돌고 또 클릭하여  handleClick펑션을 실행하면 
title의 클래스 이름이 clicked 이므로 else문이 적용되 title의 이름이 clicked2로 변경됨.*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
const CLICKED_CLASS2 = "clicked2";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = CLICKED_CLASS2;
  }
}

function init() {
  title.addEventListener("click", handleClick); //title이 클릭되면 handleClick펑션을 호출하라
}
init();
