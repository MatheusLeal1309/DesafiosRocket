angular.module('app')
  .controller('AppController', ['$scope', 'UsuarioService', function ($scope, UsuarioService) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    $scope.usuarios = UsuarioService.listar();
    $scope.carregando = false;
    $scope.mostrarModal = false;

    $scope.abrirModal = function () {
      $scope.mostrarModal = true;
      $scope.novo = {};
      $scope.mensagemErro = "";
      $scope.mensagemSucesso = "";
    };

    $scope.fecharModal = function () {
      $scope.mostrarModal = false;
    };

    $scope.remover = function (index) {
      if (confirm("Você tem certeza que deseja excluir este usuário?")) {
        UsuarioService.remover(index);
        $scope.usuarios = UsuarioService.listar();
        $scope.mensagemRemocao = "Usuário removido com sucesso!";

        setTimeout(function () {
          $scope.$apply(function () {
            $scope.mensagemRemocao = "";
          });
        }, 5000);
      }
    };

    $scope.adicionar = function (novo) {
      if ($scope.formUsuario.$invalid) return;

      $scope.carregando = true;
      $scope.mensagemErro = "";
      $scope.mensagemSucesso = "";

      UsuarioService.salvar(novo)
        .then(function () {
          $scope.usuarios = UsuarioService.listar();
          $scope.mensagemSucesso = "Usuário adicionado com sucesso!";
          $scope.novo = {};
          $scope.formUsuario.$setPristine();
          $scope.formUsuario.$setUntouched();
        })
        .catch(function (error) {
          $scope.mensagemErro = error;
        })
        .finally(function () {
          $scope.carregando = false;
          setTimeout(function () {
            $scope.$apply(function () {
              $scope.mensagemSucesso = "";
              $scope.mensagemErro = "";
            });
          }, 10000);
        });
    };

  }]);
