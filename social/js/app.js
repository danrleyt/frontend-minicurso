angular.module('filmeApp',[])
  .controller('FilmeCtrl', ['$scope','$http', function($scope, $http){
    $scope.teste = function(){
      //var num = Math.floor((Math.random() * 9000)+1);
      var url = 'https://api.themoviedb.org/3/search/movie?query='+$scope.busca+'&api_key=e5db9bda9b7cd341ff6374e57b2608a0';
      $http.get(url).then(
        function(dados){
          console.log(dados);
          $scope.filme = dados.data.results[0];
          $scope.img = 'https://image.tmdb.org/t/p/w500/'+$scope.filme.poster_path;
        },
        function(erro){
          console.log(erro);
        }
      );
    };
  }])
