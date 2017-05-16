angular.module('filmeApp',[])
  .controller('FilmeCtrl', ['$scope','$http', function($scope, $http){
    $scope.teste = function(){
        alert("OLÁ PESSOAL!");
    };

    var url = 'https://api.themoviedb.org/3/movie/550?api_key=e5db9bda9b7cd341ff6374e57b2608a0';
    $http.get();
  }])
