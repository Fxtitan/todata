const printTodo = function(todo) {
  // Use `document.createElement` to make an <li>
  const li = document.createElement('li');
  li.innerText = todo.text;

  // Query the ul and put it in a variable.
  const ul = document.querySelector('.todo-list');

  // Append the li we made to the ul as the last child.
  ul.appendChild(li);


  // Give the name <p> a complete class if it was complete already (as in dummy data, or loaded data if we had a back end.
  if (todo.complete) {
    li.classList.add('complete')
  }

  // Give the <li> a layout class and an id so we can find it later (for instance in the ).
  li.classList.add('todo-item');
  li.id = todo.id.toString();

  // Give the name <p> an event listener to toggle its completeness.
  }

  let clicked = false;// global, I can use it anywhere
  document.querySelector(".hide-low-priority").addEventListener('click', () => {
    if(!clicked){
      clicked = true;
      document.querySelector(".hide-low-priority").innerText = "Show Low Priority";
      currentTodos = priority2Only(todos);
    }else {
      clicked = false;
      document.querySelector(".hide-low-priority").innerText = "Hide Low Priority";
      currentTodos = namesAndPriorities(todos);
    }
    refreshTodos(); //find out why 
    })

document.querySelector(".toggle-priorities").addEventListener('click', () => {
  if (document.querySelector(".toggle-priorities").innerText === 'Show Priorities') {
      document.querySelector(".toggle-priorities").innerText = 'Hide Priorities'
      //currentTodos = namesAndPriorities(currentTodos);
      } else {
      document.querySelector(".toggle-priorities").innerText = 'Show Priorities'
    }
})

const button1 = document.querySelector(".hide-complete")
button1.addEventListener("click", () => {
  if(button1.innerText === "Hide Complete") {
    currentTodos = justNotComplete(currentTodos)
    button1.innerText = "Show Complete";
  }else{
    button1.innerText = "Hide Complete";
  }
})

const button2 = document.querySelector(".high-priority-first")
button2.addEventListener("click", () => {
  if(button2.innerText === "High Priority First") {
    button2.innerText = "Original Order";
  }else{
    button2.innerText = "High Priority First";
  }
})

const button3 = document.querySelector(".complete-last")
button3.addEventListener("click", () => {
  if(button3.innerText === "Complete Last"){
    button3.innerText = "Original Order";
  }else{
    button3.innerText = "Complete Last";
  }
})





li.addEventListener("click", toggle) //old project 







