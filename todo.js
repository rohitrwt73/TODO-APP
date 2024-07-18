let todoList = [
                ];
if(localStorage.getItem('todoList'))
    todoList=JSON.parse(localStorage.getItem('todoList'));
function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoitem = inputElement.value;
    let tododate=dateElement.value;
    console.log(todoitem);
    todoList.push({item:todoitem,dueDate:tododate});
    inputElement.value = '';
    dateElement.value = '';
    localStorage.setItem('todoList',JSON.stringify(todoList));
    displayItems();
}

function displayItems() {
    let containerEle = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item,dueDate}=todoList[i];
        newHtml += `
                <span>${item}</span>
                <span>${dueDate}</span>
                <button id="delBtn" onclick="todoList.splice(${i}, 1);
                localStorage.setItem('todoList',JSON.stringify(todoList));
                displayItems();
                ">Delete</button>
                 `;
    }
    containerEle.innerHTML = newHtml;
}

// Initial display of items
displayItems();



