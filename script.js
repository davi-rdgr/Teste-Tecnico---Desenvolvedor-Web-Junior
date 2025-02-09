document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    //array
    let arrayTask = [];
    let arrayExclude = ["ta excluído"];
    const adicionarTaskSubmit = (e) => {
        e.preventDefault();
        adicionarTask();
    }
    // função para adicionar uma task
    const adicionarTask = () => {
        let task = document.querySelector('.main_input_task');
        arrayTask.value.push(task.value);
        task.value = "";
    }

})