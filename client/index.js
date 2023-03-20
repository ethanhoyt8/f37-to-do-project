const newTaskForm = document.querySelector("form")

let task1 = {name: 'Sweep the floor', priority: 'Low', status: false}

let task2 = {name: 'Get groceries', priority: 'Medium', status: false}

let task3 = {name: 'Make dinner', priority: 'High', status: true}

let tasks = [task1, task2, task3]

console.log(tasks)

const buildTasks = (tasks) => {
    let tasksDisplay = document.getElementById('task-display')
    tasksDisplay.innerHTML = ''

    tasks.forEach((task) => {
        let newTask = document.createElement('div')
        newTask.classList.add('task')

        newTask.innerHTML = `<p class="task-name">${task.name}</p>
        <p class="task-priority">${task.priority}</p>
        <img
          class="'trash-can"
          src='https://www.freeiconspng.com/thumbs/trash-can-icon/trash-can-icon-26.png'
          alt="trash"
        
        
        />`
    })
}

const addTask = (event) => {
    event.preventDefault()

    const name = document.querySelector("#new-task-name")
    const priority = document.querySelector("#new-task-priority")

    const newTask = {name: name.value, priority: priority.value, status: false}

    tasks.push(newTask)
    buildTasks(tasks)
}

newTaskForm.addEventListener("submit", addTask)

buildTasks(tasks)
