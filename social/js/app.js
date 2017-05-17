angular.module('filmeApp',[])
  .controller('FilmeCtrl', ['$scope','$http', function($scope, $http){
    $scope.postar = function(){
        var url = 'http://rest.learncode.academy/api/learncode/minicurso'
        var postagem = {
            nome: $scope.nome,
            texto: $scope.texto
        }
        $http.post(url, postagem).then(
            function(dados){
                alert("Seu post foi enviado");
                $scope.nome = "";
                $scope.texto = "";
            },
            function(erro){
                alert("Ocorreu um erro!");
            }
        )
    };

    $scope.pegarPosts = function(){

    };

  }])
