stringCalculator.factory('stringCalculatorService', function() {
	var add = function ($scope) {
		if($scope.inputString === "" || !$scope.inputString){
			return 0;
		} else if ($scope.inputString.indexOf($scope.splitChar) < 0) {
			return $scope.inputString;
		} else if ($scope.inputString.indexOf($scope.splitChar) > 0) {
			var inputtedNumbers = $scope.inputString.split($scope.splitChar);
			return (Number(inputtedNumbers[0]) + Number(inputtedNumbers[1]));
		}
	};

	return {
		add: add
	};
});