const todoItems = document.querySelectorAll('li');

for (const todoItem of todoItems) {
  const checkbox = todoItem.firstElementChild;
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      console.log('checked');
      todoItem.style.textDecoration = 'line-through';
    } else {
      console.log('not checked');
      todoItem.style.textDecoration = 'none';
    }
  });
}
