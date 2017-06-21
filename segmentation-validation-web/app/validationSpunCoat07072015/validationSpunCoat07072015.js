(function () {
	'use strict';
	
	angular.module('ngSvw.validationSpunCoat07072015', ['ngRoute', 'ui.bootstrap'])
	
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/validationSpunCoat07072015', {
	    templateUrl: 'validationSpunCoat07072015/validationSpunCoat07072015.html',
	    controller: 'ValidationSpunCoat07072015Ctrl'
	  });
	}])
	
	.controller('ValidationSpunCoat07072015Ctrl', ValidationSpunCoat07072015Ctrl);
	
	ValidationSpunCoat07072015Ctrl.$inject = ['$stateParams', 'validationServiceSpunCoat07072015', '$scope'];

    function ValidationSpunCoat07072015Ctrl($stateParams, validationServiceSpunCoat07072015, $scope) {
        
    	var vm = this;
        vm.validation = null;
        
        $scope.displayJson = false;
        
        $scope.validationForm = {
        		data: {}
        };
        
        $scope.spuncoat07072015 = validationServiceSpunCoat07072015.getSpunCoat07072015();
        
        $scope.displayCsv = true;
        
        $scope.currentViewSpunCoat07072015 = {
        		index: 0,
        		path:$scope.spuncoat07072015.segmentations[0].path,
        		name:$scope.spuncoat07072015.segmentations[0].name
        };
        
        $scope.next = function () {
        	if($scope.currentViewSpunCoat07072015.index < ($scope.spuncoat07072015.size-1))
        	{
        		$scope.currentViewSpunCoat07072015.index = $scope.currentViewSpunCoat07072015.index + 1;
        		$scope.spuncoat07072015.segmentations.currentImage = $scope.currentViewSpunCoat07072015.index;
        		$scope.currentViewSpunCoat07072015.path = $scope.spuncoat07072015.segmentations[$scope.currentViewSpunCoat07072015.index].path;
        		$scope.currentViewSpunCoat07072015.name = $scope.spuncoat07072015.segmentations[$scope.currentViewSpunCoat07072015.index].name;
        	}
        	console.log($scope.currentViewSpunCoat07072015);
        }
        
        $scope.previous = function () {
        	if($scope.currentViewSpunCoat07072015.index > 0)
        	{
        		$scope.currentViewSpunCoat07072015.index = $scope.currentViewSpunCoat07072015.index - 1;
        		$scope.spuncoat07072015.segmentations.currentImage = $scope.currentViewSpunCoat07072015.index;
        		$scope.currentViewSpunCoat07072015.path = $scope.spuncoat07072015.segmentations[$scope.currentViewSpunCoat07072015.index].path;
        		$scope.currentViewSpunCoat07072015.name = $scope.spuncoat07072015.segmentations[$scope.currentViewSpunCoat07072015.index].name;
        	}
        }
        
        $scope.pressGood = function () {
        	$scope.spuncoat07072015.segmentations[$scope.currentViewSpunCoat07072015.index].status="good";
        }
        
        $scope.pressCorrect = function () {
        	$scope.spuncoat07072015.segmentations[$scope.currentViewSpunCoat07072015.index].status="correct";
        }
        
        $scope.pressInaccurate = function () {
        	$scope.spuncoat07072015.segmentations[$scope.currentViewSpunCoat07072015.index].status="inaccurate";
        }
        
        $scope.pressMissed = function () {
        	$scope.spuncoat07072015.segmentations[$scope.currentViewSpunCoat07072015.index].status="missed";
        }
        
        $scope.pressDownloadCsv = function () {
            
            var csvContent = "data:text/csv;charset=utf-8,";
            $scope.spuncoat07072015.segmentations.forEach(function(infoArray, index){

               var dataString = infoArray.name + "," + infoArray.status;
               csvContent += index < $scope.spuncoat07072015.segmentations.length ? dataString+ "\n" : dataString;

            }); 
            
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "spuncoat07072015.csv");
            document.body.appendChild(link);
            
            if (link.download !== undefined) {
				link.setAttribute("download", "spuncoat07072015.csv");
			} else {
				link.setAttribute("target", "_blank");
			}
			link.setAttribute("style", "visibility:hidden");

            link.click(); // This will download the data file named "spuncoat07072015.csv".
        }
        
        
        
    }
}());