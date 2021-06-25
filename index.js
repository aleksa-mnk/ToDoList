let inputText = document.getElementById('input-text');
  let todoList = document.getElementById('todoList');
  let todoArray = [];
  let id = 0;

  document.getElementById('addToDo')
    .addEventListener('click', () => {
      let todoText = inputText.value;

      if (todoText.trim() !== '') {
        todoArray.push({
          id,
          todoText,
          check: false,
        });

        let newTodo = document.getElementById('todo-template').content.cloneNode(true);

        newTodo.querySelector('li').setAttribute('id', String(id));
        newTodo.querySelector('.todo-text').textContent = todoText;

        newTodo.querySelector('.delete-todo-button').onclick = (event) => {
          let li = event.target.parentNode;
          let delId = li.getAttribute('id');
          let delIndex = todoArray.findIndex(todo => todo.id === Number(delId));

          if (delIndex >= 0) {
            todoList.removeChild(li);
            todoArray.splice(delIndex, 1);
          }
        };

        newTodo.querySelector('input').onchange = function() {
          let li = this.parentNode;
          let isChecked = this.checked;
          let checkId = li.getAttribute('id');
          let checkIndex = todoArray.findIndex(todo => todo.id === Number(checkId));

          if (checkIndex >= 0) {
            todoArray[checkIndex].check = isChecked;
          }
        };

        todoList.appendChild(newTodo);
        inputText.value = '';
        id++;
      } else {
        alert('Напишите ваше дело!');
      }
    });