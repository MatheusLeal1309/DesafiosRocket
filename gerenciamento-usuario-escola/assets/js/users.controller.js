angular.module('app')
  .controller('AppController', ['$scope', 'UsuarioService', function ($scope, UsuarioService) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    $scope.usuario = { nome: "Matheus Leal", tipo: "Aluno" };
    $scope.usuarios = UsuarioService.listar();

    $scope.adicionar = function (novo) {
      if (novo && novo.nome && novo.tipo) {
        UsuarioService.adicionar(novo);
        $scope.novo = {};
      }
    };

    $scope.remover = function (index) {
      UsuarioService.remover(index);
    };
  }]);
