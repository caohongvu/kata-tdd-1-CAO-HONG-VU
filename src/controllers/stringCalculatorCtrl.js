/*global stringCalculator*/
'use strict';

stringCalculator.controller('stringCalculatorCtrl', function StringCalculatorCtrl($scope) {
	$scope.add = function () {
		if($scope.inputString === ""){
			$scope.result = 0;
		} else if($scope.inputString.indexOf(",") < 0) {
			$scope.result = $scope.inputString;
		}
	};
});