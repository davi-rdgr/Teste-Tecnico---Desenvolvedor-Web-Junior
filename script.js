// arrays para guardar tasks to-do e done
let arrayTask = [];
let arrayExclude = ["ta excluído", "exemplo"];

// recolhendo as sections que guardam os articles dos tasks
let todoListsSection = document.querySelector(".todo_lists");
let doneListsSection = document.querySelector(".done_lists");


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarToDo();
})

// função para adicionar uma task pegando o valor do input e adicionando no arrayTask, que guarda o to-do
const adicionarToDo = () => {
    let task = document.querySelector('.main_input_task');

    if (task.value !== "") {
        arrayTask.push(task.value);
        task.value = "";
        atualizarTodo();
    }
}



// for each que percorre o arrayTask e cria na tela todas task do array to-do
const atualizarTodo = () => {
    todoListsSection.innerHTML = "";

    arrayTask.forEach(e => {
        let article = document.createElement("article");
        article.classList.add("todo_article");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = e;

        ul.appendChild(li);
        article.appendChild(ul);
        todoListsSection.appendChild(article);
    });
};

// for each que percorre o arrayExclude e cria na tela todas task do array done
const atualizarDone = () => {
    doneListsSection.innerHTML = "";
    arrayExclude.forEach(e => {

        let article = document.createElement("article");
        article.classList.add("done_article");
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = e;

        ul.appendChild(li);
        article.appendChild(ul);
        doneListsSection.appendChild(article);
    });

}

