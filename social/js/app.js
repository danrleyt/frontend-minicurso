angular.module('filmeApp',[])
  .controller('FilmeCtrl', ['$scope','$http','$timeout', function($scope, $http, $timeout){
    $scope.postar = function(){
        var url = 'http://rest.learncode.academy/api/learncode/minicurso'
        var postagem = {
            nome: $scope.nome,
            texto: $scope.texto
        }
        if(($scope.nome !== "" && $scope.nome !== undefined) && ($scope.texto !== "" && $scope.texto !== undefined)){
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
        }else{
            alert("Algum dos campos estäo vazios.");
        }
    };

    $scope.pegarPosts = function(){
        var url = 'http://rest.learncode.academy/api/learncode/minicurso'
        $http.get(url).then(
            function(dados){
                $scope.posts = dados.data;
            },
            function(erro){
                alert("ocorreu um erro no GET");
            }
        );
        $timeout($scope.pegarPosts, 3000)
    };
  }])
