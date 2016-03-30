var myApp = angular.module('myApp',[])

myApp.service('HistoryService', function ($http){
	var baseUrl = "http://localhost:8080/"

	//<!--string has the address of our server -->

	this.saveWord = function (newWord) {
		var url = baseUrl + "saveCurrent"
		
		return $http.post(url, {"word": newWord})
		
	}
})

myApp.controller('MyController', function ($scope, HistoryService) {
	$scope.newWord = 'cat'

	$scope.saveThisWord= function(){
		HistoryService.saveWord( $scope.newWord)
		.then(saveSuccess, error)
	}
	function saveSuccess (json) {
		console.log(json)
	}
	function error (err) {
		console.log(err)
	}
})

/*myapp controller controls the interface part
scope is interfacing with the html part 
scope is the html file*/




