import throttle from 'lodash.throttle';

const feedbackForm = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

initForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
}

function onFormInput(event) {
  const message = event.target.value;
  console.log(message);
  localStorage.setItem(feedbackForm, message);
}

function initForm() {
  const persistedFilters = localStorage.getItem(feedbackForm);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
