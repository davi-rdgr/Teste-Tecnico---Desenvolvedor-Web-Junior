const cores = {
    cinza: "#cccccc",
    branco: "#ffffff",
    vermelho: "#ff0000",
    verde: "#008000",
    amarelo: "#caca04",
    azul: "#1B4AC5",
    azulEscuro: "#203D4D",
    preto: "#000000"
};

let boolean_color = false;

const toggleColor = () => {

    let body = document.body;
    let h1 = document.querySelector('.header_sec_h1');
    let h2 = document.querySelectorAll(".list_h2");
    let li = document.querySelectorAll(".li");
    let menu = document.querySelectorAll(".nav_menu_desk");
    let button_none = document.querySelector('.button_none');
    let todoarticle = document.querySelector('.todo_article');


    if (!boolean_color) {
        body.style.backgroundColor = cores.azulEscuro;
        h1.style.color = cores.branco;
        h2.forEach(e => {
            e.style.color = cores.branco;
        });
        li.forEach(e => {
            e.style.color = cores.branco;
        });
        menu.forEach(e => {
            e.style.backgroundColor = cores.azulEscuro;
            e.style.color = cores.branco;
        });

        boolean_color = true;
    } else if (boolean_color) {
        body.style.backgroundColor = "initial"
        h1.style.color = cores.azulEscuro;
        h2.forEach(e => {
            e.style.color = "initial";
        });
        li.forEach(e => {
            e.style.color = "initial";
        });

        menu.forEach(e => {
            e.style.backgroundColor = cores.branco;
            e.style.color = cores.azulEscuro;
        });

        boolean_color = false;
    }
};


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
        atualizarDarkMode();
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
        atualizarDarkMode();
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
        atualizarDarkMode();
        salvarLocalStorage();
    }
    return;
}

/* teste para aplicar a estilização dark mode nos componentes criados novos enquanto dark mode está ativo.
por padrão, os elementos vinham com a estilização do css. */
const atualizarDarkMode = () => {
    let li_class = document.querySelectorAll(".li");
    if (!boolean_color) {
        li_class.forEach(e => {
            e.style.color = cores.preto;
            console.log("entrou 1")
        });
    } else {
        li_class.forEach(e => {
            e.style.color = cores.branco;
            console.log("entrou 2")
        });
    }
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
        li.classList.add("li");
        li.textContent = e;

        let div = document.createElement("div");
        div.addEventListener('click', function (event) { adicionarDone(e, index) });
        div.classList.add("task_list_check");

        let img = document.createElement("img");
        img.classList.add("task_icon");
        img.src = "icons/darkmode_image2.svg";

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
        li.classList.add("li");
        li.textContent = e;

        let div = document.createElement("div");
        div.addEventListener('click', function (ev) { removerDone(e, index) })
        div.classList.add("task_list_check");

        let img = document.createElement("img");
        img.classList.add("task_icon2");
        img.src = "icons/darkmode_image1.svg";

        div.appendChild(img);
        ul.appendChild(li);
        ul.appendChild(div);
        article.appendChild(ul);
        doneListsSection.appendChild(article);
    });

}
