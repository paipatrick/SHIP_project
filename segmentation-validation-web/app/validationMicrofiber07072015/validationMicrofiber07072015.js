(function () {
	'use strict';
	
	angular.module('ngSvw.validationMicrofiber07072015', ['ngRoute', 'ui.bootstrap'])
	
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/validationMicrofiber07072015', {
	    templateUrl: 'validationMicrofiber07072015/validationMicrofiber07072015.html',
	    controller: 'ValidationMicrofiber07072015Ctrl'
	  });
	}])
	
	.controller('ValidationMicrofiber07072015Ctrl', ValidationMicrofiber07072015Ctrl);
	
	ValidationMicrofiber07072015Ctrl.$inject = ['$stateParams', 'validationServiceMicrofiber07072015', '$scope'];

    function ValidationMicrofiber07072015Ctrl($stateParams, validationServiceMicrofiber07072015, $scope) {
        
    	var vm = this;
        vm.validation = null;
        
        $scope.displayJson = false;
        
        $scope.validationForm = {
        		data: {}
        };
        
        $scope.Microfiber07072015 = validationServiceMicrofiber07072015.getMicrofiber07072015();
        
        $scope.displayCsv = true;
        
        $scope.currentViewMicrofiber07072015 = {
        		index: 0,
        		path:$scope.Microfiber07072015.segmentations[0].path,
        		name:$scope.Microfiber07072015.segmentations[0].name
        };
        
        $scope.next = function () {
        	if($scope.currentViewMicrofiber07072015.index < ($scope.Microfiber07072015.size-1))
        	{
        		$scope.currentViewMicrofiber07072015.index = $scope.currentViewMicrofiber07072015.index + 1;
        		$scope.Microfiber07072015.segmentations.currentImage = $scope.currentViewMicrofiber07072015.index;
        		$scope.currentViewMicrofiber07072015.path = $scope.Microfiber07072015.segmentations[$scope.currentViewMicrofiber07072015.index].path;
        		$scope.currentViewMicrofiber07072015.name = $scope.Microfiber07072015.segmentations[$scope.currentViewMicrofiber07072015.index].name;
        	}
        	console.log($scope.currentViewMicrofiber07072015);
        }
        
        $scope.previous = function () {
        	if($scope.currentViewMicrofiber07072015.index > 0)
        	{
        		$scope.currentViewMicrofiber07072015.index = $scope.currentViewMicrofiber07072015.index - 1;
        		$scope.Microfiber07072015.segmentations.currentImage = $scope.currentViewMicrofiber07072015.index;
        		$scope.currentViewMicrofiber07072015.path = $scope.Microfiber07072015.segmentations[$scope.currentViewMicrofiber07072015.index].path;
        		$scope.currentViewMicrofiber07072015.name = $scope.Microfiber07072015.segmentations[$scope.currentViewMicrofiber07072015.index].name;
        	}
        }
        
        $scope.pressGood = function () {
        	$scope.Microfiber07072015.segmentations[$scope.currentViewMicrofiber07072015.index].status="good";
        }
        
        $scope.pressCorrect = function () {
        	$scope.Microfiber07072015.segmentations[$scope.currentViewMicrofiber07072015.index].status="correct";
        }
        
        $scope.pressInaccurate = function () {
        	$scope.Microfiber07072015.segmentations[$scope.currentViewMicrofiber07072015.index].status="inaccurate";
        }
        
        $scope.pressMissed = function () {
        	$scope.Microfiber07072015.segmentations[$scope.currentViewMicrofiber07072015.index].status="missed";
        }
        
        $scope.pressDownloadCsv = function () {
            
            var csvContent = "data:text/csv;charset=utf-8,";
            $scope.Microfiber07072015.segmentations.forEach(function(infoArray, index){

               var dataString = infoArray.name + "," + infoArray.status;
               csvContent += index < $scope.Microfiber07072015.segmentations.length ? dataString+ "\n" : dataString;

            }); 
            
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Microfiber07072015.csv");
            document.body.appendChild(link);
            
            if (link.download !== undefined) {
				link.setAttribute("download", "Microfiber07072015.csv");
			} else {
				link.setAttribute("target", "_blank");
			}
			link.setAttribute("style", "visibility:hidden");

            link.click(); // This will download the data file named "Microfiber07072015.csv".
        }
        
        
        
    }
}());