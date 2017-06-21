(function () {
	'use strict';
	
	angular.module('ngSvw.validationMediumMicrofiber07102015', ['ngRoute', 'ui.bootstrap'])
	
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/validationMediumMicrofiber07102015', {
	    templateUrl: 'validationMediumMicrofiber07102015/validationMediumMicrofiber07102015.html',
	    controller: 'ValidationMediumMicrofiber07102015Ctrl'
	  });
	}])
	
	.controller('ValidationMediumMicrofiber07102015Ctrl', ValidationMediumMicrofiber07102015Ctrl);
	
	ValidationMediumMicrofiber07102015Ctrl.$inject = ['$stateParams', 'validationServiceMediumMicrofiber07102015', '$scope'];

    function ValidationMediumMicrofiber07102015Ctrl($stateParams, validationServiceMediumMicrofiber07102015, $scope) {
        
    	var vm = this;
        vm.validation = null;
        
        $scope.displayJson = false;
        
        $scope.validationForm = {
        		data: {}
        };
        
        $scope.MediumMicrofiber07102015 = validationServiceMediumMicrofiber07102015.getMediumMicrofiber07102015();
        
        $scope.displayCsv = true;
        
        $scope.currentViewMediumMicrofiber07102015 = {
        		index: 0,
        		path:$scope.MediumMicrofiber07102015.segmentations[0].path,
        		name:$scope.MediumMicrofiber07102015.segmentations[0].name
        };
        
        $scope.next = function () {
        	if($scope.currentViewMediumMicrofiber07102015.index < ($scope.MediumMicrofiber07102015.size-1))
        	{
        		$scope.currentViewMediumMicrofiber07102015.index = $scope.currentViewMediumMicrofiber07102015.index + 1;
        		$scope.MediumMicrofiber07102015.segmentations.currentImage = $scope.currentViewMediumMicrofiber07102015.index;
        		$scope.currentViewMediumMicrofiber07102015.path = $scope.MediumMicrofiber07102015.segmentations[$scope.currentViewMediumMicrofiber07102015.index].path;
        		$scope.currentViewMediumMicrofiber07102015.name = $scope.MediumMicrofiber07102015.segmentations[$scope.currentViewMediumMicrofiber07102015.index].name;
        	}
        	console.log($scope.currentViewMediumMicrofiber07102015);
        }
        
        $scope.previous = function () {
        	if($scope.currentViewMediumMicrofiber07102015.index > 0)
        	{
        		$scope.currentViewMediumMicrofiber07102015.index = $scope.currentViewMediumMicrofiber07102015.index - 1;
        		$scope.MediumMicrofiber07102015.segmentations.currentImage = $scope.currentViewMediumMicrofiber07102015.index;
        		$scope.currentViewMediumMicrofiber07102015.path = $scope.MediumMicrofiber07102015.segmentations[$scope.currentViewMediumMicrofiber07102015.index].path;
        		$scope.currentViewMediumMicrofiber07102015.name = $scope.MediumMicrofiber07102015.segmentations[$scope.currentViewMediumMicrofiber07102015.index].name;
        	}
        }
        
        $scope.pressGood = function () {
        	$scope.MediumMicrofiber07102015.segmentations[$scope.currentViewMediumMicrofiber07102015.index].status="good";
        }
        
        $scope.pressCorrect = function () {
        	$scope.MediumMicrofiber07102015.segmentations[$scope.currentViewMediumMicrofiber07102015.index].status="correct";
        }
        
        $scope.pressInaccurate = function () {
        	$scope.MediumMicrofiber07102015.segmentations[$scope.currentViewMediumMicrofiber07102015.index].status="inaccurate";
        }
        
        $scope.pressMissed = function () {
        	$scope.MediumMicrofiber07102015.segmentations[$scope.currentViewMediumMicrofiber07102015.index].status="missed";
        }
        
        $scope.pressDownloadCsv = function () {
            
            var csvContent = "data:text/csv;charset=utf-8,";
            $scope.MediumMicrofiber07102015.segmentations.forEach(function(infoArray, index){

               var dataString = infoArray.name + "," + infoArray.status;
               csvContent += index < $scope.MediumMicrofiber07102015.segmentations.length ? dataString+ "\n" : dataString;

            }); 
            
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "MediumMicrofiber07102015.csv");
            document.body.appendChild(link);
            
            if (link.download !== undefined) {
				link.setAttribute("download", "MediumMicrofiber07102015.csv");
			} else {
				link.setAttribute("target", "_blank");
			}
			link.setAttribute("style", "visibility:hidden");

            link.click(); // This will download the data file named "MediumMicrofiber07102015.csv".
        }
        
        
        
    }
}());