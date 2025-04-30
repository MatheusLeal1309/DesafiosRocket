angular.module('app', [])
  .service('UsuarioService', function () {
    var usuarios = [
      { nome: 'Leandro Oliveira', tipo: 'Aluno', dataCadastro: new Date() },
      { nome: 'Matheus Leal', tipo: 'Professor', dataCadastro: new Date() },
      { nome: 'Henrique Souza', tipo: 'Aluno', dataCadastro: new Date() },
      { nome: 'Thais Campos', tipo: 'Professor', dataCadastro: new Date() },
      { nome: 'Fernanda Lenovo', tipo: 'Aluno', dataCadastro: new Date() }
    ];

    this.listar = function () {
      return usuarios;
    };

    this.adicionar = function (usuario) {
      usuario.dataCadastro = new Date();
      usuarios.push(usuario);
    };

    this.remover = function (index) {
      usuarios.splice(index, 1);
    };
  });
