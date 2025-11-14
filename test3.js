let todos = [];

function addTodo(title) {
    const todo = {
        title: title,
        done: false
    };
    todos.push(todo);
}

function showTodos() {
    console.log("【ToDo一覧】");
    todos.forEach((t, index) => {
        console.log(`${index + 1}: ${t.title} [${t.done ? "✔" : " " }]`);
    });
}

function completeTodo(index) {
    if (todos[index]) {
        todos[index].done = true;
    }
}

function showDownTodos() {
    const doneList = todos.filter(t => t.done === true);
    console.log("【完了したTodo】");
    console.log(doneList);
}    

addTodo("買い物に行く");
addTodo("JSの勉強をする");
addTodo("料理を作る");

showTodos();

completeTodo(2);

showTodos();

showDownTodos();