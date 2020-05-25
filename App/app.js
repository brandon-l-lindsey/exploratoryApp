var myNinjaApp = angular.module('myNinjaApp', []);



myNinjaApp.controller('NinjaController', ['$scope', function($scope){
    $scope.message = "hey";

    $scope.randomValues = [
        {
            name: "Brandon",
            emotion: "annoyed"
        }
    ];
    
    
    
    async function getData(){
        var ret = [];
        var response = await fetch('App/Lib/nasdaqsymbols.txt');
        var data = await response.text();

        var allLines = data.split('\n').slice(1);
        allLines.forEach(row => {
            var splitLine = row.split('|');
            ret.push(splitLine[0]);
            console.log(splitLine[0]);
        })
        return ret;
    };
    
    $scope.data = getData();
    console.log($scope.data);
    
    
    
}]);