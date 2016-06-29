/*global stringCalculator*/
'use strict';

stringCalculator.controller('stringCalculatorCtrl', function StringCalculatorCtrl($scope) {
	$scope.add = function () {
		if($scope.inputString === ""){
			$scope.result = 0;
		}
	};
});