stringCalculator.factory('stringCalculatorService', function() {
	var add = function ($scope) {
		if($scope.inputString === "" || !$scope.inputString){
			return 0;
		} else if ($scope.inputString.indexOf($scope.splitChar) < 0) {
			return $scope.inputString;
		} else if ($scope.inputString.indexOf($scope.splitChar) > 0) {
			var inputtedNumbers = $scope.inputString.split($scope.splitChar);
			var sum = 0;
			for(index=0; index < inputtedNumbers.length; index ++){
				sum += Number(inputtedNumbers[index]);
			} 
			return sum;
		}
	};

	return {
		add: add
	};
});