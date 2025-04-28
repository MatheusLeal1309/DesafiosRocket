angular.module('escolaApp', [])
    .controller('AppController', function ($scope) {
        $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
        $scope.usuarios = [
            { nome: "João", tipo: "Aluno" },
            { nome: "Maria", tipo: "Professor" }
        ];

    });