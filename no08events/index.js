//JS 는 이벤트에 반응하기 위해 만들어 졌다.
//이벤트는 웹사이트에서 발생하는것들을 말한다.
//click resize submit input change load before closing printing
const title = document.querySelector("#title");

//창을 리사이징 할때 handleResize를 호출한다.
// window.addEventListener("resize", handleResize);
//(handleresize);는 내가 원할때 함수를 호출하는것
//(handleresize());는 이벤트 발생전에 펑션이 작동한다.
//함수 파라메터에 event를 작성하면 이벤트를 다룰 함수를 만들떄마다 js는 자동적으로 함수를 객체에 붙인다.

function handleResize2() {
  console.log("I have been resize");
}
window.addEventListener("resize", handleResize2);

function handleclick() {
  title.style.color = "blue";
}

window.addEventListener("click", handleclick);
