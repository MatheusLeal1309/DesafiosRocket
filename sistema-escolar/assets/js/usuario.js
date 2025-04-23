class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    showProfile() {
        return `Nome: ${this.name}<br>Email: ${this.email}`;
    }
}

class Student extends User {
    constructor(name, email, password, turma) {
        super(name, email, password);
        this.turma = turma;
    }

    showProfile() {
        return super.showProfile() + `<br>Turma: ${this.turma}`;
    }
}

class Teacher extends User {
    constructor(name, email, password, subjects) {
        super(name, email, password);
        this.subjects = subjects;
    }

    showProfile() {
        return super.showProfile() + `<br>Matérias: ${this.subjects.join(", ")}`;
    }
}

const usuarios = [
    new Student("Matheus", "matheus@alpar.com", "123", "3A"),
    new Student("Juliana", "juliana@alpar.com", "123", "2B"),
    new Student("Carlos", "carlos@alpar.com", "123", "1C"),
    new Student("Bianca", "bianca@alpar.com", "123", "3B"),

    new Teacher("Rodrigo", "rodrigo@gov.com", "456", ["Matemática", "Física"]),
    new Teacher("Renata", "renata@gov.com", "456", ["Português", "Literatura"]),
    new Teacher("Marcos", "marcos@gov.com", "456", ["História", "Geografia"]),
    new Teacher("Camila", "camila@gov.com", "456", ["Biologia", "Química"]),
];

document.getElementById("loginBtn").addEventListener("click", function () {
    const tipoSelecionado = document.getElementById("selectTipo").value;
    const email = document.getElementById("floatingInput").value.trim();
    const password = document.getElementById("floatingPassword").value.trim();

    if (!tipoSelecionado) {
        alert("Por favor, selecione o tipo de usuário (Professor ou Aluno).");
        return;
    }

    const usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!usuario) {
        alert("Usuário ou senha incorretos.");
        return;
    }

    if (
        (tipoSelecionado === "1" && !(usuario instanceof Teacher)) ||
        (tipoSelecionado === "2" && !(usuario instanceof Student))
    ) {
        alert("Tipo de usuário incorreto. Verifique se selecionou Professor ou Aluno corretamente.");
        return;
    }

    alert("Login realizado com sucesso!");
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    window.location.href = "perfil.html";
});
