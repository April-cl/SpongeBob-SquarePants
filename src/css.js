const BobStyleStr = {
  style: `
  /* 郑晓鑫是SB */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*::before,
*::after {
  display: block;
  content: "";
  box-sizing: border-box;
}

body {
  background-color: #fddb21;
}

.BobContainer,
.eyeContainer,
.noseContainer,
.mouthContainer,
.faceContainer,
.chinContainer {
  position: relative;
}

/* 头部 */
.BobHead {
}

/* 眼睛部分 */

.eyeContainer {
  top: 60px;
  left: 50%;
}

.eye {
  width: 200px;
  height: 200px;
  border: 5px solid #000;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
}

.eyeLeft {
  margin-left: -200px;
}

.eye::before,
.eye::after {
  border-radius: 50%;
  position: relative;
}

.eye::before {
  width: 60px;
  height: 60px;
  border: 5px solid #000;
  background-color: #09f;
  top: 60px;
  left: 60px;
}

.eye::after {
  width: 20px;
  height: 20px;
  border: 5px solid #000;
  background-color: #000;
  top: 20px;
  left: 80px;
}

/* 睫毛 */
.eyeBrow,
.eyeBrow::before,
.eyeBrow::after {
  width: 16px;
  height: 60px;
  background-color: #000;
  position: absolute;
}

.eyeBrow {
  top: -60px;
  left: 80px;
}

.eyeBrow::before {
  transform: rotate(-45deg);
  top: 30px;
  left: -80px;
}

.eyeBrow::after {
  transform: rotate(40deg);
  top: 18px;
  left: 72px;
}

/* 鼻子部分 */
.noseContainer {
  top: 180px;
  left: 50%;
  z-index: 9999;
}

.nose {
  width: 120px;
  height: 160px;
  border: 5px solid transparent;
  border-color: #000 #000 transparent #000;
  background-color: #fddb21;
  margin-left: -60px;
  border-radius: 70%;
}

/* 嘴巴部分 */

.mouthContainer {
  top: 90px;
  left: 50%;
  margin-left: -220px;
  z-index: 9998;
}

/* 嘴唇 */

.lip {
  width: 440px;
  height: 280px;
  border: 5px solid transparent;
  border-bottom: 5px solid #000;
  border-radius: 100%;
  position: absolute;
  top: -180px;
}

.lip::before,
.lip::after {
  width: 30px;
  height: 20px;
  border: 5px solid transparent;
  border-bottom: 5px solid #000;
  position: absolute;
  top: 220px;
}

.lip::before {
  transform: rotate(-135deg);
  right: 36px;
}

.lip::after {
  transform: rotate(135deg);
  left: 36px;
}

/* 牙齿 */

.tooth,
.toothLeft,
.toothRight {
  position: absolute;
}

.toothLeft,
.toothRight {
  width: 72px;
  height: 80px;
  background-color: #fff;
  border: 5px solid #000;
  top: 94px;
}

.toothLeft {
  left: 138px;
  transform: rotate(6deg);
}

.toothRight {
  left: 240px;
  transform: rotate(-10deg);
}

/* 脸颊 */
.faceContainer {
  top: 50px;
  left: 50%;
}

.face {
  width: 94px;
  height: 94px;
  border: 5px solid rgb(215 60 18);
  background-color: #fddb21;
  border-radius: 100%;
  border-bottom: 5px solid transparent;
  position: absolute;
}

.faceLeft {
  left: -200px;
  transform: rotate(10deg);
}

.faceRight {
  left: 100px;
  transform: rotate(-10deg);
}

.freckle,
.freckle::before,
.freckle::after {
  width: 10px;
  height: 10px;
  border: 5px solid rgb(215 60 18);
  border-radius: 100%;
  position: absolute;
}

.freckle {
  top: 15px;
  left: 45%;
}

.freckle::before {
  top: 8px;
  left: -30px;
}

.freckle::after {
  top: 8px;
  left: 25px;
}

/* 下巴 */
.chinContainer {
  top: 280px;
  left: 50%;
}

.chin,
.chin::before {
  border: 5px solid transparent;
  border-bottom-color: rgb(215 60 18);
  border-radius: 0 0 50% 50%;
  position: absolute;
}

.chin {
  width: 130px;
  height: 100px;
  top: -50px;
  left: -14px;
}

.chin::before {
  width: 100px;
  height: 80px;
  top: 10px;
  left: -72px;
}
/* 身体 */
.BobBody {
  background-color: #fff;
  position: absolute;
}
`,
  wave: `
.nose {
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}`,

  wink: `
.eye {
  animation: wink forwards infinite 6s ease-in-out;
  
}
@keyframes wink {
  0%, 2%, 60%, 62%, 100% { 
           transform: scaleX(1) scaleY(1); 
  } 
  1%, 61% { 
           transform: scaleX(1.5) scaleY(0.1); 
  } 
}
`,
};

export default BobStyleStr;
