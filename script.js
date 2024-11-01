let add_button_header = document.getElementById("add_button_header"); // button for the header add  
const hidden_form = document.getElementById("task_form");

let add_task_form = document.getElementById("add_task_form"); // button for form add
const todo_card = document.getElementById("todo_card_body"); 

add_button_header.onclick = function() { // function to show the pop-up form
    hidden_form.style.display = 'block';
}


add_task_form.addEventListener("click",(e)=>{
    e.preventDefault()
    todo_card.innerHTML = `<div class="col-md-4 w-100"> 
                                <div class="card text-bg-primary mb-3">
                                    <div class="card-header">TEST TASK</div>
                                    <div class="card-body">
                                        <p>HELLO this just a test if it will work correctly without any prob</p>
                                    </div>
                                    <div class="card-footer">
                                        <button type="button" class="btn btn-secondary" id="addmanyButton">EDIT</button>
                                        <button type="button" class="btn btn-primary" id="addmanyButton">DELETE</button>
                                    </div>
                                </div>
                            </div>`
    hidden_form.style.display = 'none';
})