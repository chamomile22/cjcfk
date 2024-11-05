const buttons = {
  btn1: document.querySelector(".btn-no-1-js"),
  btn2: document.querySelector(".btn-no-2-js"),
  btn3: document.querySelector(".btn-no-3-js"),
  btn4: document.querySelector(".btn-no-4-js"),
  btn5: document.querySelector(".btn-no-5-js"),
  btn6: document.querySelector(".btn-no-6-js"),
  btn7: document.querySelector(".btn-no-7-js"),
  btn8: document.querySelector(".btn-no-8-js"),
  btnYes: document.querySelector(".btn-yes-js"),
};

const text = document.querySelector(".text-js");
const answerText = document.querySelector(".answer");
const body = document.querySelector("body");

buttons.btn1.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn1.style.display = 'none';
  buttons.btn2.style.display = 'inline-block';
});

buttons.btn2.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn2.style.display = 'none';
  buttons.btn3.style.display = 'inline-block';
});

buttons.btn3.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn3.style.display = 'none';
  buttons.btn4.style.display = 'inline-block';
});

buttons.btn4.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn4.style.display = 'none';
  buttons.btn5.style.display = 'inline-block';
});

buttons.btn5.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn5.style.display = 'none';
  buttons.btn6.style.display = 'inline-block';
});

buttons.btn6.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn6.style.display = 'none';
  buttons.btn7.style.display = 'inline-block';
});

buttons.btn7.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn7.style.display = 'none';
  buttons.btn8.style.display = 'inline-block';
});

buttons.btn8.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn8.style.display = 'none'
  buttons.btnYes.style.animationName = 'btnJump';
});

buttons.btnYes.addEventListener('click', (e)=>{
  e.preventDefault();
  buttons.btn1.style.display = 'none';
  buttons.btn2.style.display = 'none';
  buttons.btn3.style.display = 'none';
  buttons.btn4.style.display = 'none';
  buttons.btn5.style.display = 'none';
  buttons.btn6.style.display = 'none';
  buttons.btn7.style.display = 'none';
  buttons.btn8.style.display = 'none'
  answerText.style.display = 'flex';
  text.style.display = 'none';
  body.style.backgroundColor = 'black';
  buttons.btnYes.style.display = 'none'
});