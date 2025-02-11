/* Para funcionalidades relacionadas ao dark mode: */

const colors = {
    white: "#ffffff",
    darkBlue: "#203D4D",
    darkBlue2: "#12232c",
    black: "#000000"
};
/* inicia o boleano que responde ao dark mode como falso */
let boolean_color = false;

/* função que captura os elementos que receberão o dark mode, faz um teste lógico e aplica dependendo do estado atual do boolean_color */
const toggleColor = () => {

    let h1 = document.querySelector('.header_sec_h1');
    let h2 = document.querySelectorAll(".list_h2");
    let li = document.querySelectorAll(".li");
    let menu = document.querySelectorAll(".nav_menu_desk");
    let button_none = document.querySelector('.button_none');
    let burguer = document.querySelectorAll(".burguer");
    let header = document.querySelector('.header_content');
    let main = document.querySelector('.main_content');
    let menu_darkmode = document.querySelectorAll(".nav_menu_color_mode");


    if (!boolean_color) {
        header.style.backgroundColor = colors.darkBlue2;
        main.style.backgroundColor = colors.darkBlue2;
        h1.style.color = colors.white;
        h2.forEach(e => {
            e.style.color = colors.white;
        });
        li.forEach(e => {
            e.style.color = colors.white;
        });
        menu.forEach(e => {
            e.style.backgroundColor = colors.darkBlue2;
            e.style.color = colors.white;
        });

        button_none.style.backgroundColor = colors.darkBlue2;
        burguer.forEach(e => {
            e.style.backgroundColor = colors.white;
        });

        menu_darkmode.forEach(e => {
            e.textContent = "White mode"
        });

        /* termina o loop declarando o boolean_color como true, para caso seja clicado novamente, ative o white mode */
        boolean_color = true;
    } else if (boolean_color) {
        header.style.backgroundColor = "initial";
        main.style.backgroundColor = "initial";
        h1.style.color = colors.darkBlue;
        h2.forEach(e => {
            e.style.color = "initial";
        });
        li.forEach(e => {
            e.style.color = "initial";
        });

        menu.forEach(e => {
            e.style.backgroundColor = colors.white;
            e.style.color = colors.darkBlue;
        });

        button_none.style.backgroundColor = "initial";

        burguer.forEach(e => {
            e.style.backgroundColor = colors.white;
        });

        menu_darkmode.forEach(e => {
            e.textContent = "Dark mode"
        });

        boolean_color = false;
    }
};

/* ----------------------------------------------------------------------------- */


/* Para funcionalidades relacionadas às tasks, arrays e mudanças de valores entre arrays  */

/* recupera os dados salvos no local storage e adiciona nos array to_do e done */
document.addEventListener("DOMContentLoaded", (e) => {
    arrayTask = JSON.parse(localStorage.getItem("to_do")) || [];
    arrayExclude = JSON.parse(localStorage.getItem("done")) || [];
    updateTodo();
    updateDone();
})

/* função que atualiza o local storage baseado nos array to-do e done sempre que chamada. */
const saveLocalStorage = () => {
    localStorage.setItem("to_do", JSON.stringify(arrayTask));
    localStorage.setItem("done", JSON.stringify(arrayExclude));
};

/* arrays para guardar tasks to-do e done */
let arrayTask = [];
let arrayExclude = [];

/* recolhendo as sections que guardam os articles dos tasks */
let todoListsSection = document.querySelector(".todo_lists");
let doneListsSection = document.querySelector(".done_lists");

/* uso um addEventListner no formulário, para caso submit, chama a função para adicionar a task à lista */
let task = document.querySelector('.main_input_task');
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    addTodo();
})

/* função para adicionar uma task pegando o valor do input e adicionando no arrayTask, que guarda o to-do */
const addTodo = () => {
    if (task.value !== "") {
        arrayTask.push(task.value);
        task.value = "";
        updateTodo();
        updateDone();
        updateDarkMode();
        saveLocalStorage();
        return;
    }
    alert("Tente escrever uma mensagem para sua tarefa! :)")
}

/* função que verifica se o valor é válido, se sim, adiciona o valor da tabela to-do na done e exclui a mesma da tabela to-do */
const adicionarDone = (ev, index) => {
    if (ev) {
        arrayExclude.push(ev);
        arrayTask.splice(index, 1)
        updateTodo()
        updateDone();
        updateDarkMode();
        saveLocalStorage();
    }
    return;
}

/* função que verifica se o valor é válido, se sim, remove o valor da tabela done */
const removeDone = (ev, index) => {
    if (ev) {
        arrayExclude.splice(index, 1)
        updateTodo()
        updateDone();
        updateDarkMode();
        saveLocalStorage();
    }
    return;
}

/* teste para aplicar a estilização dark mode nos componentes criados novos enquanto dark mode está ativo.
por padrão, os elementos vinham com a estilização do css. */
const updateDarkMode = () => {
    let li_class = document.querySelectorAll(".li");
    if (!boolean_color) {
        li_class.forEach(e => {
            e.style.color = colors.black;
        });
    } else {
        li_class.forEach(e => {
            e.style.color = colors.white;
        });
    }
}

/* limpo a section contendo as tasks e faço um  for each que percorre o arrayTask e cria na tela todas task do array to-do. A div task_list_check 
contém um evento com clique que chama uma função que transfere a task da tabela to-do para done. */
const updateTodo = () => {
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
const updateDone = () => {
    doneListsSection.innerHTML = "";

    arrayExclude.forEach((e, index) => {
        let article = document.createElement("article");
        article.classList.add("done_article");

        let ul = document.createElement("ul");

        let li = document.createElement("li");
        li.classList.add("li");
        li.textContent = e;

        let div = document.createElement("div");
        div.addEventListener('click', function (ev) { removeDone(e, index) })
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

/* ----------------------------------------------------------------------------- */

/* Para funcionalidades relacionadas ao botão lateral: */

/* função para abrir e fechar o side button aplicando valores de estilização */
let boolean_menu = false;
let side_menu = document.querySelector(".side_menu");
let burguer = document.querySelectorAll(".burguer");
let button = document.querySelector(".button_none");

const toggleMenu = () => {
    if (!boolean_menu) {

        side_menu.style.transform = "translateX(0%)";
        /* faço esse teste lógico para que só aplique as mudanças na estilização caso o dark mode não esteja ativo*/
        if (!boolean_color) {
            button.style.backgroundColor = "#203d4d00";
            burguer.forEach((element) => {
                element.style.background = "#ffffff";
            });
        }

        boolean_menu = true;
    } else if (boolean_menu) {
        side_menu.style.transform = "translateX(-100%)";

        if (!boolean_color) {
            button.style.backgroundColor = "#ffffff";
            burguer.forEach((element) => {
                element.style.background = "#203D4D";
            });
        }

        boolean_menu = false;
    }
};

/* capturo as sections que contém as task to-do e done */
let todo_list_sec = document.querySelector(".todo_list_sec");
let dolist_sec = document.querySelector(".dolist_sec");

/* função para alterar o modo de visualização das tasks para: ver todas */
const see_all = () => {
    dolist_sec.style.display = "block";
    todo_list_sec.style.display = "block";
    side_menu.style.transform = "translateX(-100%)"
    boolean_menu = false;
    /* faço esse teste lógico usando o boleano que condiz com o dark mode, para dependendo se true ou false, estilize o botão na saída da forma correta */
    if (!boolean_color) {
        button.style.backgroundColor = colors.white;
        burguer.forEach((element) => {
            element.style.background = colors.darkBlue2;
        });
    } else if (boolean_color) {
        button.style.backgroundColor = colors.darkBlue2;
        burguer.forEach((element) => {
            element.style.background = colors.white;
        });
    }
};
/* função para alterar o modo de visualização das tasks para: ver apenas to-do */
const only_todo = () => {
    dolist_sec.style.display = "none";
    todo_list_sec.style.display = "block";
    side_menu.style.transform = "translateX(-100%)"

    if (!boolean_color) {
        button.style.backgroundColor = colors.white;
        burguer.forEach((element) => {
            element.style.background = colors.darkBlue2;
        });
    } else if (boolean_color) {
        button.style.backgroundColor = colors.darkBlue2;
        burguer.forEach((element) => {
            element.style.background = colors.white;
        });
    }
    boolean_menu = false;
};

/* função para alterar o modo de visualização das tasks para: ver apenas done */
const only_done = () => {
    dolist_sec.style.display = "block";
    todo_list_sec.style.display = "none";
    side_menu.style.transform = "translateX(-100%)"
    if (!boolean_color) {
        button.style.backgroundColor = colors.white;
        burguer.forEach((element) => {
            element.style.background = colors.darkBlue2;
        });
    } else if (boolean_color) {
        button.style.backgroundColor = colors.darkBlue2;
        burguer.forEach((element) => {
            element.style.background = colors.white;
        });
    }
    boolean_menu = false;
};

/* ----------------------------------------------------------------------------- */