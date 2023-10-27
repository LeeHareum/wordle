const 시작시간 = new Date();

function setTime() {
  const 현재시간 = new Date();
  const 흐른시간 = new Date(현재시간 - 시작시간);
  const 분 = 흐른시간.getMinutes().toString().padStart(2, "0"); //아래에 padstart는 숫자엔에러,문자열에만적용되서 이렇게 문자열로바꿔줌
  const 초 = 흐른시간.getSeconds().toString().padStart(2, "0");
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `time : ${분}:${초}`; //옵션(art)키+₩(backtick)키
}
setInterval(setTime, 1000);
