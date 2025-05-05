document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");

    const nameMsg = document.getElementById("nameMsg");
    const emailMsg = document.getElementById("emailMsg");
    const cpfMsg = document.getElementById("cpfMsg");

    const regexName = /^[A-Za-zÀ-ÿ\s]+$/;
    const regexEmail = /^\w+@\w+\.\w{2,}$/;
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    validarCampo(name, regexName, nameMsg);
    validarCampo(email, regexEmail, emailMsg);
    validarCampo(cpf, regexCPF, cpfMsg);
});

function validarCampo(campo, regex, msg) {
    if (regex.test(campo.value)) {
        campo.style.border = "2px solid green";
        msg.innerHTML = "Válido";
        msg.classList.remove("text-danger");
        msg.classList.add("text-success");
    } else {
        campo.style.border = "2px solid red";
        msg.innerHTML = "Inválido";
        msg.classList.remove("text-success");
        msg.classList.add("text-danger");
    }
}
