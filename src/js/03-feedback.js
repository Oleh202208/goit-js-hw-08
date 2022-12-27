import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onClickButton);

const KEY_LOCAL = 'feedback-form-state';
const userData = {};
saveInput();

function onInput(evt) {
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY_LOCAL, JSON.stringify(userData));
}

function saveInput () {
  const saveData = JSON.parse(localStorage.getItem(KEY_LOCAL));
  if(saveData) {
Object.entries(saveData).forEach(([key, value]) => {
  formEl[key].value = value;
  userData[key] = value;
});
  }
}

function onClickButton(evt) {
evt.preventDefault();
evt.target.reset();

console.log(JSON.parse(localStorage.getItem(KEY_LOCAL)));
localStorage.removeItem(KEY_LOCAL);

}
