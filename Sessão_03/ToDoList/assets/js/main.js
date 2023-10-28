function ToDoList() {
    const text = document.querySelector('.inputTxt');
    const main = document.querySelector('main');
    const ul = document.createElement('ul');
    main.appendChild(ul);

    function createTask(text) {
        if (!text) return;
        const txt = text;
        const li = document.createElement('li');
        li.innerHTML = txt;
        ul.appendChild(li);
        createButton(li);
        clearInput();
        saveTask();
    }

    function createButton(li) {
        const btn = document.createElement('button');
        btn.innerHTML = `Deletar tarefa`;
        btn.setAttribute('class', 'Btn');
        btn.setAttribute('tittle', 'Apagar esta tarefa');
        li.appendChild(btn);
    }


    document.addEventListener('click', function (e) {
        const ele = e.target;

        if (ele.classList.contains('inputButton')) createTask(text.value);

        if (ele.classList.contains('Btn')) {
            ele.parentElement.remove();
            saveTask();
        }
    })

    text.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            createTask();
        }
    })

    function clearInput() {
        text.value = '';
        text.focus();
    }

    function saveTask() {
        const tasks = ul.querySelectorAll('li');
        const taskList = [];

        for (i of tasks) {
            let tasktext = i.innerText;
            tasktext = tasktext.replace('Deletar tarefa', '').trim();
            taskList.push(tasktext);
        }
        const JSONTasks = JSON.stringify(taskList);
        localStorage.setItem('saveJSON', JSONTasks)
    }

    function addTasks() {
        const tasks = localStorage.getItem('saveJSON');
        const taskList = JSON.parse(tasks);

        for (let i of taskList) {
            createTask(i);
        }
    }
    addTasks();

}

ToDoList();
