import BobStyleStr from "./css.js";

let n = 1;

style.innerText = BobStyleStr.style.substr(0, n);
BobStyle.innerHTML = BobStyleStr.style.substr(0, n);

let time = 100;

const run = () => {
  n += 1;
  console.log(n);
  if (n > BobStyleStr.style.length) {
    window.clearInterval(id);
    return;
  }
  style.innerText = BobStyleStr.style.substr(0, n);
  style.scrollTop = style.scrollHeight;
  BobStyle.innerHTML = BobStyleStr.style.substr(0, n);
};

let id = setInterval(() => {
  run();
}, time);

btnPause.onclick = () => {
  window.clearInterval(id);
};
btnPlay.onclick = () => {
  id = setInterval(() => {
    run();
  }, time);
};
btnFast.onclick = () => {
  window.clearInterval(id);
  time = 10;
  id = setInterval(() => {
    run();
  }, time);
};
btnNormal.onclick = () => {
  window.clearInterval(id);
  time = 100;
  id = setInterval(() => {
    run();
  }, time);
};
