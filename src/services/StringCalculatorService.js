stringCalculator.factory('stringCalculatorService', function() {
	var add = function ($scope) {
		if($scope.inputString && $scope.inputString.startsWith('//')){
			var array = $scope.inputString.split("\n");
			$scope.inputString = array[1];
			$scope.splitChar = array[0].replace("//","");
		}
		if($scope.inputString) {
			$scope.inputString = $scope.inputString.replace(new RegExp($scope.newLineChar, 'g'), $scope.splitChar);
		} 
		if($scope.inputString === "" || !$scope.inputString){
			return 0;
		} else if ($scope.inputString.indexOf($scope.splitChar) < 0) {
			return $scope.inputString;
		} else {
			$scope.inputtedNumbers = $scope.inputString.split($scope.splitChar);
		}
		
		var exceptionMessage = "Negatives not allowed:";
		var sum = 0;
		var negativeNumber = [];
		
		if ($scope.inputtedNumbers) {
			for(index = 0; index < $scope.inputtedNumbers.length; index ++){
				if($scope.inputtedNumbers[index] > 0) {
					sum += Number($scope.inputtedNumbers[index]);
				} else {
					negativeNumber.push($scope.inputtedNumbers[index]);
				}
			}
		}
		if(negativeNumber.length > 0){
			throw new Error(exceptionMessage + negativeNumber.toString());
		}
		return sum;
	};

	return {
		add: add
	};
});