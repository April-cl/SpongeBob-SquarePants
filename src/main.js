import BobStyleStr from "./css.js";

const player = {
  id: undefined,
  time: 100,
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
    "#btnWink": "wink",
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
    player.time = 10;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  wave: () => {},
  wink: () => {},
};

player.init();
