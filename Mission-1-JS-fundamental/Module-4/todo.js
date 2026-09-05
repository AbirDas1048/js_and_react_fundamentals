let taskName = document.getElementById('task_name');
let addBtn = document.getElementById('add_task');
let tasksList = document.getElementById('task_list');

let taskCounter = 1;

document.querySelector('form').addEventListener('submit', addTask);

tasksList.addEventListener('click', updateTaskStatus);

function addTask(event) {

    event.preventDefault();

    let task = taskName.value.trim();

    if (task === '') {
        return;
    }

    // Remove "No task added"
    let emptyTask = document.getElementById('empty_task');

    if (emptyTask) {
        emptyTask.remove();
    }

    let tr = document.createElement('tr');

    tr.id = `task-${taskCounter}`;

    tr.innerHTML = `
        <td id="taskNo${taskCounter}">${taskCounter}</td>

        <td id="taskName${taskCounter}">${task}</td>

        <td id="taskStatus${taskCounter}">
            Pending
        </td>

        <td id="taskAction${taskCounter}">
            <button
                type="button"
                class="btn btn-success btn-sm"
                data-status="completed"
            >
                Completed
            </button>

            <button
                type="button"
                class="btn btn-warning btn-sm"
                data-status="rework"
            >
                Rework
            </button>

            <button
                type="button"
                class="btn btn-danger btn-sm"
                data-status="deleted"
            >
                Canceled
            </button>
        </td>
    `;

    tasksList.appendChild(tr);

    taskCounter++;

    taskName.value = '';

    taskName.focus();
}


function updateTaskStatus(event) {

    // Check if the clicked element is a status button
    if (!event.target.matches('button[data-status]')) {
        return;
    }

    let button = event.target;

    let status = button.dataset.status;

    // Find the row containing the clicked button
    let tr = button.closest('tr');

    // Find the status <td>
    let statusCell = tr.querySelector('[id^="taskStatus"]');

    if (status === 'completed') {
        statusCell.textContent = 'Completed';
    }

    if (status === 'rework') {
        statusCell.textContent = 'Pending';
    }

    if (status === 'deleted') {
        statusCell.textContent = 'Deleted';
    }
}


function emptyTaskList() {

    let tr = document.createElement('tr');

    tr.id = 'empty_task';

    tr.innerHTML = `
        <td colspan="4">No task added</td>
    `;

    tasksList.appendChild(tr);
}


emptyTaskList();