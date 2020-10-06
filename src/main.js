import BobStyleStr from "./css.js";

const style = document.querySelector(".style");

const BobStyle = document.querySelector(".BobStyle");

let n = 0;
setInterval(() => {
  n += 1;
  style.innerText = BobStyleStr.style.substr(0, n);
  style.scrollTop = style.scrollHeight;
  BobStyle.innerHTML = BobStyleStr.style.substr(0, n);
}, 10);
