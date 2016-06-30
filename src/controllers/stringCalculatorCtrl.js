stringCalculator.controller('stringCalculatorCtrl', function StringCalculatorCtrl($scope, stringCalculatorService) {
	
	$scope.add = function () {
		$scope.splitChar = ',';
		$scope.newLineChar = '\n';
		$scope.result = stringCalculatorService.add($scope);
	};
});