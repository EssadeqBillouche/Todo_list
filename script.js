const add_button_header = document.getElementById("add_button_header");
const hidden_form = document.getElementById("task_form");
const add_task_form = document.getElementById("add_task_form");
let todo_card = document.getElementById("todo_card_body");
const task_name = document.getElementById("task_name");
const task_end = document.getElementById("task_end");
const task_description = document.getElementById("task_description");

let task_id = 0;

const taskk_name = task_name.value;

add_button_header.onclick = function () { // function to show the pop-up form
    hidden_form.style.display = 'block';
}
function add_task_function(html_card_id, priority) {
    todo_card = document.getElementById(html_card_id);
    const p1 = '<span class="badge bg-danger"> P1 </span>';
    const p2 = '<span class="badge bg-warning text-dark"> P2 </span>';
    const p3 = '<span class="badge bg-success"> P3 </span>';
    if (priority == 'P1') {
        test = p1;
    } else if(priority == 'P2'){
        test = p2;
    }else{
        test = p3;
    }
    todo_card.innerHTML += `
        <div class="col-md-4 w-100"> 
                            <div class=" card text-bg-primary mb-3">
                                <div class="card-header">${task_name.value} 
                                    <div> <span class="badge rounded-pill bg-info text-dark">${task_end.value}</span> ${test} </div>
                                </div>
                                <div class="card-body">
                                    <p>${task_description.value}</p>
                                </div>
                                <div class=" col card-footer">
                                    <div>
                                    <button type="button" class="btn btn-success" id="edit${task_id}">EDIT</button>
                                    <button type="button" class="btn btn-danger" id="delete${task_id}">DELETE</button>
                                    
                                    </div>
                                    
                                </div>
                            </div>
        </div> `
}



add_task_form.addEventListener("click", (e) => {
    e.preventDefault()
    task_id++;
    console.log(task_end.value);

    const prioritys = document.querySelectorAll('input[name="gridRadios"]:checked');
    const priority = prioritys[0].value;
    console.log(priority);

    let status = document.querySelectorAll('input[name="TASK_STATU_Redio"]:checked');
    let task_statut = status[0].value;
    console.log(task_statut);


    
    if (task_statut === 'TODO') {
        add_task_function("todo_card_body", priority);
    } else if (task_statut === 'DOING') {
        add_task_function("inprogress_card_body", priority);
    } else {
        add_task_function("DONE_card_body", priority);
    }

    hidden_form.style.display = 'none'; // hide the HTML FORM
})