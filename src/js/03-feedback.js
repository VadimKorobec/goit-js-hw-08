import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const feedbackForm = 'feedback-form-state';

initForm();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(event) {}

function onTextareaInput(event) {
  const massege = event.currentTarget.value;
  localStorage.setItem(feedbackForm);
  console.log(massege);
}

function initForm() {}

// import throttle from 'lodash.throttle';

// const feedbackForm = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');

// initForm();

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500));

// function onFormSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   formData.forEach((value, name) => console.log(value, name));
//   e.currentTarget.reset();
//   localStorage.removeItem(feedbackForm);
// }

// function onFormInput(e) {
//   let persistedFilters = localStorage.getItem(feedbackForm);
//   persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
//   persistedFilters[e.target.name] = e.target.value;
//   localStorage.setItem(feedbackForm, JSON.stringify(persistedFilters));
// }

// function initForm() {
//   let persistedFilters = localStorage.getItem(feedbackForm);
//   if (persistedFilters) {
//     persistedFilters = JSON.parse(persistedFilters);
//     Object.entries(persistedFilters).forEach(([name, value]) => {
//       form.elements[name].value = value;
//     });
//   }
// }
