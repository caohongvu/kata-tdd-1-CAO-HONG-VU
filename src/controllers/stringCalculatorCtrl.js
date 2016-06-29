/*global stringCalculator*/
'use strict';

stringCalculator.controller('stringCalculatorCtrl', function StringCalculatorCtrl($scope) {
	$scope.add = function () {
		if($scope.inputString === ""){
			$scope.result = 0;
		} else if ($scope.inputString.indexOf(",") < 0) {
			$scope.result = $scope.inputString;
		} else if ($scope.inputString.indexOf(",") > 0) {
			var inputtedNumbers = $scope.inputString.split(',');
			$scope.result = Number(inputtedNumbers[0]) + Number(inputtedNumbers[1]);
		}
	};
});