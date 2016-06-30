/*global stringCalculator*/
'use strict';

stringCalculator.controller('stringCalculatorCtrl', function StringCalculatorCtrl($scope, stringCalculatorService) {
	$scope.add = function () {
		$scope.result = stringCalculatorService.add($scope);
	};
});