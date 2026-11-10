function adicionarTarefa() {
    const campo = document.getElementById("novaTarefa");
    const texto = campo.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa primeiro.");
        return;
    }

    const item = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const descricao = document.createElement("span");
    descricao.innerText = texto;

    checkbox.addEventListener("change", function() {
        item.classList.toggle(
            "concluida",
            checkbox.checked
        );
    });

    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";

    botaoRemover.addEventListener("click", function() {
        item.remove();
    });

    item.append(
        checkbox,
        descricao,
        botaoRemover
    );

    document.getElementById("listaTarefas")
        .appendChild(item);

    campo.value = "";
    campo.focus();
}
