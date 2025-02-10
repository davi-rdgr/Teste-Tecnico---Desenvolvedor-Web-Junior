/* Para funcionalidades relacionadas ao botão lateral: */

/* função para abrir e fechar o side button aplicando valores de estilização */
let boolean_menu = false;
let side_menu = document.querySelector(".side_menu");
let burguer = document.querySelectorAll(".burguer");
let button = document.querySelector(".button_none");
const toggleMenu = () => {
    if (!boolean_menu) {
        side_menu.style.transform = "translateX(0%)";
        button.style.backgroundColor = "rgba(32, 61, 77, 0.925)";
        burguer.forEach((element) => {
            element.style.background = "#ffffff";
        });

        boolean_menu = true;
    } else if (boolean_menu) {
        side_menu.style.transform = "translateX(-100%)";

        button.style.backgroundColor = "#ffffff";
        burguer.forEach((element) => {
            element.style.background = "#203D4D";
        });

        boolean_menu = false;
    }
};

/*  */

const see_all = () => {
    let todo_list_sec = document.querySelector(".todo_list_sec");
    let dolist_sec = document.querySelector(".dolist_sec");
    dolist_sec.style.display = "block";
    todo_list_sec.style.display = "block";
    side_menu.style.transform = "translateX(-100%)"
    boolean_menu = false;
    button.style.backgroundColor = "#ffffff";
    burguer.forEach((element) => {
        element.style.background = "#203D4D";
    });
};
const only_todo = () => {
    let todo_list_sec = document.querySelector(".todo_list_sec");
    let dolist_sec = document.querySelector(".dolist_sec");
    dolist_sec.style.display = "none";
    todo_list_sec.style.display = "block";
    side_menu.style.transform = "translateX(-100%)"
    button.style.backgroundColor = "#ffffff";
    burguer.forEach((element) => {
        element.style.background = "#203D4D";
    });
    boolean_menu = false;
};
const only_done = () => {
    let todo_list_sec = document.querySelector(".todo_list_sec");
    let dolist_sec = document.querySelector(".dolist_sec");
    dolist_sec.style.display = "block";
    todo_list_sec.style.display = "none";
    side_menu.style.transform = "translateX(-100%)"
    button.style.backgroundColor = "#ffffff";
    burguer.forEach((element) => {
        element.style.background = "#203D4D";
    });
    boolean_menu = false;
};
