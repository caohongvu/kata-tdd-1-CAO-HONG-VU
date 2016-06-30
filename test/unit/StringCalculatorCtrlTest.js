describe('stringCalculatorCtrl', function() {	beforeEach(module('stringCalculator'));	var $controller, $scope = {}, controller;	beforeEach(inject(function(_$controller_){		$controller = _$controller_;		controller = $controller('stringCalculatorCtrl', { $scope: $scope });			}));		describe('$scope.add', function() {		it("For an empty string it will return 0", function() {			$scope.inputString = "";			$scope.add();			expect($scope.result).toEqual(0);  		});		it("If only one number is inputted, it will return that number", function() {			$scope.inputString = "1";			$scope.add();			expect($scope.result).toEqual($scope.inputString);  		});		it("If have two number are inputted, it will return their sum", function() {			var numberOne = 1, numberTwo = 2;			$scope.inputString = numberOne+$scope.splitChar+numberTwo;			var sumOfTwoInputtedNumber = numberOne + numberTwo;			$scope.add();			expect($scope.result).toEqual(sumOfTwoInputtedNumber);  		});		it("Allow the Add method to handle an unknown amount of numbers", function() {			var sum = 0;			var amountOfNum = 10;			$scope.inputString = "";			for (num = 1; num <= amountOfNum; num++) {				sum += num;				$scope.inputString = $scope.inputString + num;				if(num < amountOfNum) {					$scope.inputString = $scope.inputString+ $scope.splitChar;				}			}			$scope.add();			expect($scope.result).toEqual(sum); 		});		it("Allow the Add method to handle new lines between numbers(instead of commas)", function() {			var sum = 0;			var amountOfNum = 10;			$scope.inputString = "";			for (num = 1; num <= amountOfNum; num++) {				sum += num;				$scope.inputString = $scope.inputString + num;				if(num < amountOfNum) {					if ( num%2 === 0 ) {						$scope.inputString = $scope.inputString+ $scope.newLineChar;					} else {						$scope.inputString = $scope.inputString+ $scope.splitChar;					}				}			} 			$scope.add();			expect($scope.result).toEqual(sum);		});	});	      });