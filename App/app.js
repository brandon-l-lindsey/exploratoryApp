
var myNinjaApp = angular.module('myNinjaApp', []);




myNinjaApp.controller('NinjaController', ['$scope', function($scope){
    $scope.everything = {
        
        
        
        getData: function(){
            arr = [];
            var response = fetch('App/Lib/nasdaqsymbols.txt').then(response => {console.log(response)});

            var allLines = data.split('\n').slice(1);
            allLines.forEach(row => {
                var splitLine = row.split('|');
                var thisTicker = splitLine[0];
                arr.push(thisTicker);
            })
            console.log(arr);
            return arr;
          }
    }
    
    
    

    
    
}]);