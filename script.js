/* arrays para guardar tasks to-do e done */
let arrayTask = [];
let arrayExclude = [];

/* recolhendo as sections que guardam os articles dos tasks */
let todoListsSection = document.querySelector(".todo_lists");
let doneListsSection = document.querySelector(".done_lists");


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarToDo();
})

/* função para adicionar uma task pegando o valor do input e adicionando no arrayTask, que guarda o to-do */
const adicionarToDo = () => {
    let task = document.querySelector('.main_input_task');

    if (task.value !== "") {
        arrayTask.push(task.value);
        task.value = "";
        atualizarTodo();
        atualizarDone();
    }
}

const adicionarDone = (ev, index) => {
    if (ev) {
        arrayExclude.push(ev);
        arrayTask.splice(index, 1)
        atualizarTodo()
        atualizarDone();
    }
    return;
}

const removerDone = (ev, index) => {
    if (ev) {
        arrayExclude.splice(index, 1)
        atualizarTodo()
        atualizarDone();
    }
    return;
}



/* for each que percorre o arrayTask e cria na tela todas task do array to-do. A div task_list_check contém um evento com clique
que chama uma função que transfere a task da tabela to-do para done. */
const atualizarTodo = () => {
    todoListsSection.innerHTML = "";

    arrayTask.forEach((e, index) => {
        console.log(index);
        let article = document.createElement("article");
        article.classList.add("todo_article");

        let ul = document.createElement("ul");

        let li = document.createElement("li");
        li.textContent = e;

        let div = document.createElement("div");
        div.addEventListener('click', function (event) { adicionarDone(e, index) });
        div.classList.add("task_list_check");

        let img = document.createElement("img");
        img.classList.add("task_icon");
        img.src = "/icons/image2.svg";

        div.appendChild(img);
        ul.appendChild(li);
        ul.appendChild(div);
        article.appendChild(ul);
        todoListsSection.appendChild(article);
    });
};

/* for each que percorre o arrayExclude e cria na tela todas task do array done */
const atualizarDone = () => {
    doneListsSection.innerHTML = "";

    arrayExclude.forEach((e, index) => {
        console.log(index);
        let article = document.createElement("article");
        article.classList.add("done_article");

        let ul = document.createElement("ul");

        let li = document.createElement("li");
        li.textContent = e;

        let div = document.createElement("div");
        div.addEventListener('click', function (event) { removerDone(e, index) })
        div.classList.add("task_list_check");

        let img = document.createElement("img");
        img.classList.add("task_icon");
        img.src = "/icons/image1.svg";

        div.appendChild(img);
        ul.appendChild(li);
        ul.appendChild(div);
        article.appendChild(ul);
        doneListsSection.appendChild(article);
    });

}

