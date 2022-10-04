const todoItems = document.querySelectorAll('li');
const checkboxes = document.querySelectorAll('.check-box');

for (const todoItem of todoItems) {
  console.log(todoItem.firstElementChild);
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('change', (e) => {
      if (checkbox.checked) {
        todoItem.style.textDecoration = 'line-through';
      } else {
        todoItem.style.textDecoration = 'none';
      }
    });
  }
}
