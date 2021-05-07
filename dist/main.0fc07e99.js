// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var BobStyleStr = {
  style: "\nbody {\n  background-color: #fddb21;\n}\n\n.BobContainer,\n.eyeContainer,\n.noseContainer,\n.mouthContainer,\n.faceContainer,\n.chinContainer {\n  position: relative;\n}\n\n/* \u5934\u90E8 */\n.BobHead {\n}\n\n/* \u773C\u775B\u90E8\u5206 */\n\n.eyeContainer {\n  top: 60px;\n  left: 50%;\n}\n\n.eye {\n  width: 200px;\n  height: 200px;\n  border: 5px solid #000;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n}\n\n.eyeLeft {\n  margin-left: -200px;\n}\n\n.eye::before,\n.eye::after {\n  border-radius: 50%;\n  position: relative;\n}\n\n.eye::before {\n  width: 60px;\n  height: 60px;\n  border: 5px solid #000;\n  background-color: #09f;\n  top: 60px;\n  left: 60px;\n}\n\n.eye::after {\n  width: 20px;\n  height: 20px;\n  border: 5px solid #000;\n  background-color: #000;\n  top: 20px;\n  left: 80px;\n}\n\n/* \u776B\u6BDB */\n.eyeBrow,\n.eyeBrow::before,\n.eyeBrow::after {\n  width: 16px;\n  height: 60px;\n  background-color: #000;\n  position: absolute;\n}\n\n.eyeBrow {\n  top: -60px;\n  left: 80px;\n}\n\n.eyeBrow::before {\n  transform: rotate(-45deg);\n  top: 30px;\n  left: -80px;\n}\n\n.eyeBrow::after {\n  transform: rotate(40deg);\n  top: 18px;\n  left: 72px;\n}\n\n/* \u9F3B\u5B50\u90E8\u5206 */\n.noseContainer {\n  top: 180px;\n  left: 50%;\n  z-index: 9999;\n}\n\n.nose {\n  width: 120px;\n  height: 160px;\n  border: 5px solid transparent;\n  border-color: #000 #000 transparent #000;\n  background-color: #fddb21;\n  margin-left: -60px;\n  border-radius: 70%;\n}\n\n/* \u5634\u5DF4\u90E8\u5206 */\n\n.mouthContainer {\n  top: 90px;\n  left: 50%;\n  margin-left: -220px;\n  z-index: 9998;\n}\n\n/* \u5634\u5507 */\n\n.lip {\n  width: 440px;\n  height: 280px;\n  border: 5px solid transparent;\n  border-bottom: 5px solid #000;\n  border-radius: 100%;\n  position: absolute;\n  top: -180px;\n}\n\n.lip::before,\n.lip::after {\n  width: 30px;\n  height: 20px;\n  border: 5px solid transparent;\n  border-bottom: 5px solid #000;\n  position: absolute;\n  top: 220px;\n}\n\n.lip::before {\n  transform: rotate(-135deg);\n  right: 36px;\n}\n\n.lip::after {\n  transform: rotate(135deg);\n  left: 36px;\n}\n\n/* \u7259\u9F7F */\n\n.tooth,\n.toothLeft,\n.toothRight {\n  position: absolute;\n}\n\n.toothLeft,\n.toothRight {\n  width: 72px;\n  height: 80px;\n  background-color: #fff;\n  border: 5px solid #000;\n  top: 94px;\n}\n\n.toothLeft {\n  left: 138px;\n  transform: rotate(6deg);\n}\n\n.toothRight {\n  left: 240px;\n  transform: rotate(-10deg);\n}\n\n/* \u8138\u988A */\n.faceContainer {\n  top: 50px;\n  left: 50%;\n}\n\n.face {\n  width: 94px;\n  height: 94px;\n  border: 5px solid rgb(215 60 18);\n  background-color: #fddb21;\n  border-radius: 100%;\n  border-bottom: 5px solid transparent;\n  position: absolute;\n}\n\n.faceLeft {\n  left: -200px;\n  transform: rotate(10deg);\n}\n\n.faceRight {\n  left: 100px;\n  transform: rotate(-10deg);\n}\n\n.freckle,\n.freckle::before,\n.freckle::after {\n  width: 10px;\n  height: 10px;\n  border: 5px solid rgb(215 60 18);\n  border-radius: 100%;\n  position: absolute;\n}\n\n.freckle {\n  top: 15px;\n  left: 45%;\n}\n\n.freckle::before {\n  top: 8px;\n  left: -30px;\n}\n\n.freckle::after {\n  top: 8px;\n  left: 25px;\n}\n\n/* \u4E0B\u5DF4 */\n.chinContainer {\n  top: 280px;\n  left: 50%;\n}\n\n.chin,\n.chin::before {\n  border: 5px solid transparent;\n  border-bottom-color: rgb(215 60 18);\n  border-radius: 0 0 50% 50%;\n  position: absolute;\n}\n\n.chin {\n  width: 130px;\n  height: 100px;\n  top: -50px;\n  left: -14px;\n}\n\n.chin::before {\n  width: 100px;\n  height: 80px;\n  top: 10px;\n  left: -72px;\n}\n/* \u8EAB\u4F53 */\n.BobBody {\n  background-color: #fff;\n  position: absolute;\n}\n",
  wave: "\n.nose {\n  transform-origin: center bottom;\n  animation: wave 300ms infinite linear;\n}\n\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}",
  wink: "\n.eye {\n  animation: wink forwards infinite 6s ease-in-out;\n  \n}\n@keyframes wink {\n  0%, 2%, 60%, 62%, 100% { \n           transform: scaleX(1) scaleY(1); \n  } \n  1%, 61% { \n           transform: scaleX(1.5) scaleY(0.1); \n  } \n}\n"
};
var _default = BobStyleStr;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 30,
  ui: {
    style: document.querySelector("#style"),
    BobStyle: document.querySelector("#BobStyle")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnFast": "fast",
    "#btnNormal": "normal",
    "#btnWave": "wave"
  },
  n: 1,
  init: function init() {
    player.ui.style.innerText = _css.default.style.substr(0, player.n);
    player.ui.BobStyle.innerHTML = _css.default.style.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.style.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.style.innerText = _css.default.style.substr(0, player.n);
    player.ui.style.scrollTop = player.ui.style.scrollHeight;
    player.ui.BobStyle.innerHTML = _css.default.style.substr(0, player.n);
  },
  play: function play() {
    player.pause();
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  fast: function fast() {
    player.pause();
    player.time = 3;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 30;
    player.play();
  },
  wave: function wave() {
    if (player.ui.style.innerText.toString().includes('/* 嘴巴部分 */')) {
      document.querySelector(".nose").classList.toggle('wave');
    } else {
      window.alert('鼻子还没长出来呢！可以按【急速】按钮让鼻子快点长出来哦');
    }
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.0fc07e99.js.map