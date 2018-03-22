var app = angular.module('mainapp', []);

app.controller('mainController',function($scope){
	$scope.itemlists = ['apple', 'mango', 'banana'];

	$scope.addme = function(){
		$scope.errTxt = "";
		if (!$scope.items) {return;}
		if ($scope.itemlists.indexOf($scope.items) == -1) {
			$scope.itemlists.push($scope.items);
			$scope.danger = false;
		}else{
			$scope.danger = true;
			$scope.errTxt = "the item already there in itemlist"
		}
	}
	$scope.danger = false;
	$scope.removeitem = function(x){
		$scope.errTxt = "";
		$scope.itemlists.splice(x, 1);
	}
});

