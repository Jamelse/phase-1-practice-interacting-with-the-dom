const counter = document.querySelector('#counter');
const pause = document.querySelector('#pause');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const likes = document.querySelector('.likes');
const submit = document.querySelector('#submit');
const commentList = document.querySelector('#list');
function increment(){
  let sec = parseInt(counter.innerText);
  counter.innerText = sec + 1;
}
let timer = setInterval(increment, 1000);
  

pause.addEventListener('click',() => {
    if (pause.innerText === 'resume'){
    pause.innerText = 'pause';
  timer = setInterval(increment, 1000);}
    else {
      pause.innerText = 'resume';
      clearInterval(timer);
    }
  minus.disabled = !minus.disabled
  plus.disabled = !plus.disabled
  heart.disabled = !heart.disabled
  submit.disabled = !submit.disabled
  })
minus.addEventListener('click',() => {
  let sub = parseInt(counter.innerText);
  counter.innerText = sub-1;
})
plus.addEventListener('click',() => {
  let add = parseInt(counter.innerText);
  counter.innerText = add + 1;
})
let a = {};
heart.addEventListener('click', () => {
  let b = counter.innerText;
  a[b] = a[b] || 0
  a[b] += 1
  likes.innerHTML = ''
  for (let key in a){
    let li = document.createElement('li');
  li.innerText = `${key} has been liked ${a[key]} times`
  likes.appendChild(li);
  }
})
let form = document.querySelector('#comment-form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  p = document.createElement('p');
  p.innerText = e.target.commentInput.value;
  commentList.appendChild(p);
  form.reset();
  e.target.value;
})