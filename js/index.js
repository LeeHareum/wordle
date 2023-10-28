const 정답 = "APPLE";

let attempts = 0;
let index = 0;
let timer = 0;

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = " GAME OVER 👏🏻";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:30vw; background-color:rgb(234, 239, 227);opacity: 0.9; width:270px; height:100px;font-size:35px;font-weight:bold; padding: 5px 50px 5px 50px;border-radius: 60px; border-width:5px;border-style:solid;border-color:rgb(79, 93, 59);";
    document.body.appendChild(div);
  };
  const nextLine = () => {
    if (attempts === 6) return GAMEOVER();
    attempts++;
    index = 0;
  };
  const GAMEOVER = () => {
    window.removeEventListener("keydown", handlekeydown);
    displayGameover();
    clearInterval(timer);
  };

  const handleEnterkey = () => {
    let 맞은_갯수 = 0;
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${attempts}${i}']`
      );
      const 입력한_알파벳 = block.innerText;
      const 정답_알파벳 = 정답[i];
      if (입력한_알파벳 === 정답_알파벳) {
        맞은_갯수++;
        block.style.background = "#6AAA64";
      } else if (정답.includes(입력한_알파벳))
        block.style.background = "#C9B458";
      else block.style.background = "#787C7E";
      block.style.color = "white";
    }
    if (맞은_갯수 === 5) GAMEOVER();
    else nextLine();
  };
  const handlBackspace = () => {
    if (index > 0) {
      const preBlock = document.querySelector(
        `.board-block[data-index='${attempts}${index - 1}']`
      );
      preBlock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };

  const handlekeydown = (event) => {
    const key = event.key.toUpperCase(); //toUpperCase 대문자로변환
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );

    //console.log(event.keyCode, event.key); 콘솔창에서 키 코드와번호 찾을때
    if (event.key === "Backspace") handlBackspace(thisBlock);
    else if (index === 5) {
      if (event.key === "Enter") handleEnterkey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      //아래index++;랑 같은 결과_ index += 1; , index = index + 1;
      index++;
    }
  };

  const Timer = () => {
    const 시작_시간 = new Date();

    function setTime() {
      const 현재_시간 = new Date();
      const 흐른_시간 = new Date(현재_시간 - 시작_시간);
      const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
      const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
      const timerDiv = document.querySelector("#time");
      timerDiv.innerText = `${분}:${초}`;
    }
    timer = setInterval(setTime, 1000);
  };
  Timer();
  window.addEventListener("keydown", handlekeydown);
}

appStart();
