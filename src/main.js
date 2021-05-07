import BobStyleStr from "./css.js";

const player = {
  id: undefined,
  time: 30,
  ui: {
    style: document.querySelector("#style"),
    BobStyle: document.querySelector("#BobStyle"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnFast": "fast",
    "#btnNormal": "normal",
    "#btnWave": "wave",
  },
  n: 1,
  init: () => {
    player.ui.style.innerText = BobStyleStr.style.substr(0, player.n);
    player.ui.BobStyle.innerHTML = BobStyleStr.style.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > BobStyleStr.style.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.style.innerText = BobStyleStr.style.substr(0, player.n);
    player.ui.style.scrollTop = player.ui.style.scrollHeight;
    player.ui.BobStyle.innerHTML = BobStyleStr.style.substr(0, player.n);
  },
  play: () => {
    player.pause();
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  fast: () => {
    player.pause();
    player.time = 3;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 30;
    player.play();
  },
  wave: () => {
    if (player.ui.style.innerText.toString().includes('/* 嘴巴部分 */')) {
      document.querySelector(".nose").classList.toggle('wave')
    } else {
      window.alert('鼻子还没长出来呢！可以按【急速】按钮让鼻子快点长出来哦')
    }
  },
};

player.init();
