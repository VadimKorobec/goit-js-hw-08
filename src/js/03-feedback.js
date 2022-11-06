import throttle from 'lodash.throttle';

const feedbackForm = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

initForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {}

function onFormInput(event) {}

function initForm() {}
console.log();
