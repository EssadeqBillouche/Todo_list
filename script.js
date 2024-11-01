const add_button_header = document.getElementById("add_button_header");
const hidden_form = document.getElementById("task_form");
const add_task_form = document.getElementById("add_task_form");
const todo_card = document.getElementById("todo_card_body");
const task_name = document.getElementById("task_name");
const task_start = document.getElementById("task_start");
const task_end = document.getElementById("task_end");
const task_description = document.getElementById("task_description");
const task_statu = document.getElementById("task_statu");



const taskk_name = task_name.value;

add_button_header.onclick = function () { // function to show the pop-up form
    hidden_form.style.display = 'block';
}


add_task_form.addEventListener("click", (e) => {
    e.preventDefault()
    const prioritys = document.querySelectorAll('input[name="gridRadios"]:checked');
    const priority = prioritys[0].value;

    console.log(task_name.value);

    
    todo_card.innerHTML += `<div class="col-md-4 w-100"> 
                                <div class="card text-bg-primary mb-3">
                                    <div class="card-header">${task_name.value}</div>
                                    <div class="card-body">
                                        <p>${task_description.value}</p>
                                    </div>
                                    <div class="card-footer">
                                        <span class="badge bg-success">${priority}</span>
                                    </div>
                                </div>
                            </div>`
    hidden_form.style.display = 'none';

})