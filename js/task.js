const newTaskBtn = document.querySelector('.add-page .new-task-btn')
const inputBox = document.querySelector('.add-page input[type="text"]');
const taskList = document.querySelector('.home-page .task-list')
const noTaskSign = document.querySelector('.no-task-sign')

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        newTaskBtn.classList.add("active")
    } else {
        newTaskBtn.classList.remove("active")
    }
}

showTasks();

newTaskBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo")
    if (getLocalStorage == null) {
        listTask = []
    } else {
        listTask = JSON.parse(getLocalStorage)
    }
    listTask.push({ name: userData, category: "", done: false })
    localStorage.setItem("New Todo", JSON.stringify(listTask))
    showTasks();

    addPage.classList.remove("show")

    newTaskBtn.classList.remove("active")
    setTimeout(() => {
        addBtn.style.display = 'block';
    }, 200)
}


function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo")
    if (getLocalStorage == null) {
        listTask = []
    } else {
        listTask = JSON.parse(getLocalStorage)
    }

    let newTask = '';
    listTask.forEach((task, index) => {
        newTask += `<li class="task-item">
            <div onclick="completeTask(${index})" class="task-check-box">
                <span class="task-circle-thin"></span>
                <span class="task-check"><i class="ti-check"></i></span>
            </div>
            <span class="task-content">${task.name}</span>
            <span onclick="deleteTask(${index})" class="task-trash"><i class="ti-trash"></i></span>
        </li>`;

    })

    taskList.innerHTML = newTask;
    listTask.forEach((task, index) => {
        checkTask(index, task.done)
    })
    inputBox.value = ""
    
    if(listTask.length == 0) {
        noTaskSign.classList.add('show')
    } else {
        noTaskSign.classList.remove('show')
    }
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listTask = JSON.parse(getLocalStorage)
    listTask.splice(index, 1)
    localStorage.setItem("New Todo", JSON.stringify(listTask))
    showTasks()
}

function completeTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo")
    if (getLocalStorage == null) {
        listTask = []
    } else {
        listTask = JSON.parse(getLocalStorage)
    }
    listTask[index].done = !listTask[index].done;
    localStorage.setItem("New Todo", JSON.stringify(listTask))

    checkTask(index, listTask[index].done)
}

function checkTask(index, done) {
    let taskItem = taskList.querySelectorAll('.task-item')[index]
    let taskCheck = taskItem.querySelector('.task-check')
    let taskContent = taskItem.querySelector('.task-content')
    if (done) {
        taskCheck.classList.add('checked')
        taskContent.style.textDecoration = 'line-through';
    } else {
        taskCheck.classList.remove('checked')
        taskContent.style.textDecoration = '';
    }
}


