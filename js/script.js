/* Para funcionalidades relacionadas às tasks, arrays e mudanças de valores entre arrays  */

/* recupera os dados salvos no local storage e adiciona nos array to_do e done */
document.addEventListener("DOMContentLoaded", (e) => {
    arrayTask = JSON.parse(localStorage.getItem("to_do")) || [];
    arrayExclude = JSON.parse(localStorage.getItem("done")) || [];
    atualizarTodo();
    atualizarDone();
})

/* função que atualiza o local storage baseado nos array to-do e done sempre que chamada. */
const salvarLocalStorage = () => {
    localStorage.setItem("to_do", JSON.stringify(arrayTask));
    localStorage.setItem("done", JSON.stringify(arrayExclude));
};

/* arrays para guardar tasks to-do e done */
let arrayTask = [];
let arrayExclude = [];

/* recolhendo as sections que guardam os articles dos tasks */
let todoListsSection = document.querySelector(".todo_lists");
let doneListsSection = document.querySelector(".done_lists");

let task = document.querySelector('.main_input_task');
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarToDo();
})

/* função para adicionar uma task pegando o valor do input e adicionando no arrayTask, que guarda o to-do */
const adicionarToDo = () => {
    if (task.value !== "") {
        arrayTask.push(task.value);
        task.value = "";
        atualizarTodo();
        atualizarDone();
        salvarLocalStorage();
        return;
    }
    alert("Tente escrever uma mensagem para sua tarefa! :)")
}

/* função que verifica se o valor é válido, se sim, adiciona o valor da tabela to-do na done e exclui a mesma da tabela to-do */
const adicionarDone = (ev, index) => {
    if (ev) {
        arrayExclude.push(ev);
        arrayTask.splice(index, 1)
        atualizarTodo()
        atualizarDone();
        salvarLocalStorage();
    }
    return;
}

/* função que verifica se o valor é válido, se sim, remove o valor da tabela done */
const removerDone = (ev, index) => {
    if (ev) {
        arrayExclude.splice(index, 1)
        atualizarTodo()
        atualizarDone();
        salvarLocalStorage();
    }
    return;
}

/* for each que percorre o arrayTask e cria na tela todas task do array to-do. A div task_list_check contém um evento com clique
que chama uma função que transfere a task da tabela to-do para done. */
const atualizarTodo = () => {
    todoListsSection.innerHTML = "";

    arrayTask.forEach((e, index) => {
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
        img.src = "icons/image2.svg";

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
        img.src = "icons/image1.svg";

        div.appendChild(img);
        ul.appendChild(li);
        ul.appendChild(div);
        article.appendChild(ul);
        doneListsSection.appendChild(article);
    });

}