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
})({"css.js":[function(require,module,exports) {
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
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    style: document.querySelector("#style"),
    BobStyle: document.querySelector("#BobStyle")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnFast": "fast",
    "#btnNormal": "normal",
    "#btnWave": "wave",
    "#btnWink": "wink"
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
    player.time = 10;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  wave: function wave() {},
  wink: function wink() {}
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/xcl82/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63472" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/xcl82/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map