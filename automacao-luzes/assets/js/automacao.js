class CentralDeLuzes {
    constructor() {
        if (CentralDeLuzes.instance) {
            return CentralDeLuzes.instance;
        }
        CentralDeLuzes.instance = this;
    }

    ligar(comodo) {
        const div = document.getElementById(comodo);
        if (div) div.classList.add('acesa');
        this.mostrarStatus(`Luz da ${comodo} ligada`);
    }

    desligar(comodo) {
        const div = document.getElementById(comodo);
        if (div) div.classList.remove('acesa');
        this.mostrarStatus(`Luz da ${comodo} desligada`);
    }

    mostrarStatus(mensagem) {
        document.getElementById("status").textContent = mensagem;
    }

    static getInstance() {
        if (!CentralDeLuzes.instance) {
            CentralDeLuzes.instance = new CentralDeLuzes();
        }
        return CentralDeLuzes.instance;
    }
}

document.querySelectorAll(".btn-ligar").forEach(btn => {
    btn.addEventListener("click", () => {
        const comodo = btn.getAttribute("data-comodo");
        CentralDeLuzes.getInstance().ligar(comodo);
    });
});

document.querySelectorAll(".btn-desligar").forEach(btn => {
    btn.addEventListener("click", () => {
        const comodo = btn.getAttribute("data-comodo");
        CentralDeLuzes.getInstance().desligar(comodo);
    });
});