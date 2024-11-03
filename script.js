const add_button_header = document.getElementById("add_button_header");
const hidden_form = document.getElementById("task_form");
const add_task_form = document.getElementById("add_task_form");
let todo_card = document.getElementById("todo_card_body");
const task_name = document.getElementById("task_name");
const task_end = document.getElementById("task_end");
const task_description = document.getElementById("task_description");
const todo_static = document.getElementById("todo_static");
const doing_static = document.getElementById("doing_static");
const done_static = document.getElementById("done_static");
const total_static = document.getElementById("tota_static");



var index = 0;
let task_array = [];

function tasks_static() {
    const todoTasks = task_array.filter(task => task.statut === 'TODO').length;
    const doingTasks = task_array.filter(task => task.statut === 'DOING').length;
    const doneTasks = task_array.filter(task => task.statut === 'DONE').length;
    const totalTasks = task_array.length;
    todo_static.innerHTML = ` TODO: ${todoTasks} `;
    doing_static.innerHTML = ` DOING: ${doingTasks} `;
    done_static.innerHTML = ` DONE: ${doneTasks} `;
    total_static.innerHTML = ` TOTAL: ${totalTasks}`;
}

add_button_header.onclick = function() {
    hidden_form.style.display = 'block';
}


function delete_task(taskId) {
    
    document.getElementById(taskId).remove();

    task_array = task_array.filter(task => task.id !== taskId);
    index--;
    tasks_static();
}
function add_notification (){
    const add_alert = document.getElementById("add_id_alert");
    add_alert.style.display = 'block';

    setTimeout(() => {
        add_alert.style.display = 'none';
    }, 4000);
}

function delete_notification (){
    const delet_alert = document.getElementById("delete_id_alert");
    delet_alert.style.display = 'block';

    setTimeout(() => {
        delete_alert.style.display = 'none';
    }, 4000);
}

// function edit_notification (){
//     const edit_alert = document.getElementById("edit_id_alert");
//     edit_alert.style.display = 'block';

//     setTimeout(() => {
//         edit_alert.style.display = 'none';
//     }, 4000);
// }

function edit_task(taskId) {

    const task = task_array.find(task => task.id === taskId);
    task_name.value = task.name;
    task_description.value = task.description;
    task_end.value = task.dateEnd;
    document.querySelector(`input[name="gridRadios"][value="${task.Priority_for_array}"]`).checked = true;
    document.querySelector(`input[name="TASK_STATU_Redio"][value="${task.statut}"]`).checked = true;

    delete_task(taskId);

    hidden_form.style.display = 'block';
    
    tasks_static()
}

add_task_form.addEventListener("click", (e) => {
    e.preventDefault();
    var prioritys = document.querySelectorAll('input[name="gridRadios"]:checked');
    var priority = prioritys[0].value;
    var status = document.querySelectorAll('input[name="TASK_STATU_Redio"]:checked');
    var task_statut = status[0].value;
    
    const task_id = Date.now();
    const task_objec = {
        id: task_id,
        name: task_name.value,
        description: task_description.value,
        dateEnd: task_end.value,
        Priority_for_array: priority,
        statut: task_statut,
    }
    task_array.push(task_objec);
    
    if (task_statut === 'TODO') {
        add_task_function("todo_card_body", priority);
    } else if (task_statut === 'DOING') {
        add_task_function("inprogress_card_body", priority);
    } else {
        add_task_function("DONE_card_body", priority);
    }
    
    hidden_form.style.display = 'none';
    tasks_static(); 
    add_notification ()
})

function add_task_function(html_card_id, priority) {
    todo_card = document.getElementById(html_card_id);
    const p1 = '<span class="badge bg-danger"> P1 </span>';
    const p2 = '<span class="badge bg-warning text-dark"> P2 </span>';
    const p3 = '<span class="badge bg-success"> P3 </span>';
    let test;
    
    if (priority == 'P1') {
        test = p1;
    } else if (priority == 'P2') {
        test = p2;
    } else {
        test = p3;
    }
    
    todo_card.innerHTML += `
        <div class="col-md-4 w-100" id="${task_array[index].id}">
            <div class="card text-bg-primary mb-3">
                <div class="card-header">${task_name.value}
                    <div>
                        <span class="badge rounded-pill bg-info text-dark">${task_end.value}</span>
                        ${test}
                    </div>
                </div>
                <div class="card-body">
                    <p>${task_description.value}</p>
                </div>
                <div class="col card-footer">
                    <div>
                        <button type="button" class="btn btn-success btn-sm" onclick="edit_task(${task_array[index].id})">EDIT</button>
                        <button type="button" class="btn btn-danger btn-sm" onclick="delete_task(${task_array[index].id})">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    index++;
}
tasks_static(); 