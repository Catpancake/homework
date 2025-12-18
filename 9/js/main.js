"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const form = document.querySelector(".form")
const input = document.querySelector(".input")
const todosTask = document.querySelector(".todos")

const createTodoElement = (text) => {
  const li = document.createElement("li")
  li.className = "todo"

  const todoText = document.createElement("div")
  todoText.className = "todo-text"
  todoText.textContent = text

  const todoActions = document.createElement("div")
  todoActions.className = "todo-actions"

  const buttonComplete = document.createElement("button")
  buttonComplete.className = "button-complete button"
  buttonComplete.innerHTML = "&#10004;"

  const buttonDelete = document.createElement("button")
  buttonDelete.className = "button-delete button"
  buttonDelete.innerHTML = "&#10006;"

  todoActions.appendChild(buttonComplete)
  todoActions.appendChild(buttonDelete)

  li.appendChild(todoText)
  li.appendChild(todoActions)

  return li
}

const handleCreateTodo = (todos, text) => {
  const newTodo = createTodo(todos, text)
  const todoElement = createTodoElement(text)
  todosTask.appendChild(todoElement)
  return { todo: newTodo, element: todoElement }
}