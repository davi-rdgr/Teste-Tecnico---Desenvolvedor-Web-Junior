/* const cores = {
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
    let task_icon = document.querySelector(".task_icon");
    let task_icon2 = document.querySelector(".task_icon2");


    if (!boolean_color) {
        body.style.backgroundColor = cores.azulEscuro;
        h1.style.color = cores.branco;
        h2.forEach(e => {
            e.style.color = cores.branco;
        });
        li.forEach(e => {
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

        boolean_color = false;
    }
};
 */