angular.module('escolaApp', [])
.controller('AppController', function ($scope) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";

    $scope.usuarios = [
        { nome: "Matheus Leal", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Felipe Franco", tipo: "Professor", dataCadastro: new Date() },
        { nome: "Carlos Martini", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Thaís Campos", tipo: "Professor", dataCadastro: new Date() },
        { nome: "Leandro Goes", tipo: "Aluno", dataCadastro: new Date() }
    ];
});
