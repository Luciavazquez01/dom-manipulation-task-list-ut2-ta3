let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task

function createTaskComponent(task) {

  const taskElement = document.createElement('div');
  taskElement.className = 'task';

  const titleElement = document.createElement('h3');
  titleElement.textContent = task.title;
  taskElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = task.description;
  taskElement.appendChild(descriptionElement);

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.onclick = () => {
    taskElement.classList.toggle('completed');
  };
  taskElement.appendChild(completeButton);

  return taskElement;
}

function loadTasks(tasks) {
  const taskContainer = document.getElementById('taskContainer');
  taskContainer.innerHTML = ''; 
  tasks.forEach(task => {
    const taskElement = createTaskComponent(task);
    taskContainer.appendChild(taskElement);
  });
}
const task = [
  { title: 'Task 1', description: 'Description for task 1' }
];

loadTasks(tasks);

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form

function addTaskAlert(newTask) {}
function addTaskAlert(newTask) {
  const { title, description } = newTask;
  alert(`Title: ${title}\nDescription: ${description}`);
}
const newTask = {
  title: 'New Task',
  description: 'This is a new task description'
};

addTaskAlert(newTask);


// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario

function addTaskHandler(event) {
  event.preventDefault();
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
      
      const newTask = document.createElement('li');
      newTask.textContent = taskText;

      const taskList = document.getElementById('taskList');
      taskList.appendChild(newTask);

      taskInput.value = '';
  }
}
// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function removeTaskHandler(event) {
  if (event.target.tagName === 'LI') {   
      event.target.remove();
  }
}
// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  const ul = document.getElementById('taskList');
  if (ul.children.length === 0) {
    window.location.href = 'https://www.youtube.com';
  }
}
function removeFromList() {
  const ul = document.getElementById('taskList');
  if (ul.lastChild) {
    ul.removeChild(ul.lastChild);
  }
  redirectWhenNoTask();
}
  document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('addButton').onclick = addToList;
  document.getElementById('removeButton').onclick = removeFromList;
});

function addToList() {
  const inputText = document.getElementById('inputText').value;
  if (inputText.trim() !== '') {
    const ul = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = inputText;
    ul.appendChild(li);
    document.getElementById('inputText').value = ''; 
}
}