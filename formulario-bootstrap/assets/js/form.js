const form = document.getElementById('formulario');
const alerta = document.getElementById('alerta');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity()) {
        alerta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Formulário enviado com sucesso!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
        form.reset();
        form.classList.remove('was-validated');
    } else {
        alerta.innerHTML = '';
    }
    form.classList.add('was-validated');
});