angular.module('app', [])
  .service('UsuarioService',['$q', function ($q) {
    var usuarios = [
      { nome: 'Leandro Oliveira', tipo: 'Aluno', email: 'leandro@teste.com', dataCadastro: new Date() },
      { nome: 'Matheus Leal', tipo: 'Professor', email: 'matheus@teste.com', dataCadastro: new Date() },
      { nome: 'Henrique Souza', tipo: 'Aluno', email: 'henrique@teste.com', dataCadastro: new Date() },
      { nome: 'Thais Campos', tipo: 'Professor', email: 'thais@teste.com', dataCadastro: new Date() },
      { nome: 'Fernanda Lenovo', tipo: 'Aluno', email: 'fernanda@teste.com', dataCadastro: new Date() }
    ];

    this.listar = function () {
      return usuarios;
    };

    this.adicionar = function (usuario) {
      usuarios.push({
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo,
        dataCadastro: new Date()
      });
    };

    this.remover = function (index) {
      usuarios.splice(index, 1);
    };

    this.salvar = function (usuario) {
      return $q(function (resolve, reject) {
        setTimeout(function () {
          if (usuario.email === "erro@teste.com") {
            reject("Erro ao cadastrar o usuário. Tente novamente.");
          } else {
            usuario.dataCadastro = new Date();
            usuarios.push(usuario);
            resolve();
          }
        }, 2000);
      });
    };
  }]);