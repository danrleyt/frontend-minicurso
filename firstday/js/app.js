angular.module('filmeApp',[])
  .controller('FilmeCtrl', ['$scope','$http', function($scope, $http){
    $scope.teste = function(){
      var num = Math.floor((Math.random() * 1000)+1);
      var url = 'https://api.themoviedb.org/3/movie/'+num+'?api_key=e5db9bda9b7cd341ff6374e57b2608a0';
      $http.get(url).then(
        function(dados){
          $scope.filme = dados.data;
          $scope.img = 'https://image.tmdb.org/t/p/w500/'+$scope.filme.poster_path;
        },
        function(erro){
          console.log(erro);
        }
      );
    };
  }])
