
// A function that adds an item to our todo list.
const addTodo = function(todo) {
  todos.push(todo);
}

document.querySelector('.add-todo').addEventListener('click',() => {//
  const sBar = document.querySelector('.todo-input');//
  const todo = {}
  todo.text = sBar.value
  todo.id = todos.length
  todo.complete = false
  todo.priority = Number(document.querySelector('.priority').value)
  addTodo(todo);
  printTodo(todo);
})
