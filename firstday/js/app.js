angular.module('filmeApp',[])
  .controller('FilmeCtrl', ['$scope', function($scope){
    $scope.teste = function(){
        alert("OLÁ PESSOAL!");
    };
  }])
