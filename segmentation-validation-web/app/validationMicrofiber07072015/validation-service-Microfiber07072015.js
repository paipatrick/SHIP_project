 (function () {
    'use strict';

    angular.module('ngSvw.validationServiceMicrofiber07072015', [])
        .factory('validationServiceMicrofiber07072015', validationServiceMicrofiber07072015);

    validationServiceMicrofiber07072015.$inject = ['$rootScope', '$q'];

    function validationServiceMicrofiber07072015($rootScope, $q) {
        var service = {
            getMicrofiber07072015 : getMicrofiber07072015,
        };
        return service;

        function getMicrofiber07072015() {
        	var data = {
	        	size: 96,
	        	name: "Microfiber07072015",
	    		currentImage: 0,
	    		segmentations: [
{
	name: "062415_MF_4_63x_Pos006",
	path: "data/Microfiber-07072015/062415_MF_4_63x_Pos006_projections.jpeg",
	status: "good"
},
{
	name: "062415_MF_4_63x_Pos015",
	path: "data/Microfiber-07072015/062415_MF_4_63x_Pos015_projections.jpeg",
	status: "good"
},
{
	name: "062415_MF_4_63x_Pos027",
	path: "data/Microfiber-07072015/062415_MF_4_63x_Pos027_projections.jpeg",
	status: "good"
},
{
	name: "062415_MF_4_63x_Pos029",
	path: "data/Microfiber-07072015/062415_MF_4_63x_Pos029_projections.jpeg",
	status: "good"
},
{
	name: "062415_MF_4_63x_Pos044",
	path: "data/Microfiber-07072015/062415_MF_4_63x_Pos044_projections.jpeg",
	status: "good"
},
{
	name: "062415_MF_4_63x_Pos049",
	path: "data/Microfiber-07072015/062415_MF_4_63x_Pos049_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos001",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos001_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos004",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos004_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos012",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos012_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos014",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos014_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos024",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos024_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos025",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos025_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos026",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos026_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos031",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos031_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos033",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos033_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos034",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos034_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos035",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos035_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos037",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos037_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos039",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos039_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos041",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos041_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos045",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos045_projections.jpeg",
	status: "good"
},
{
	name: "062515_MF_4_63x_Pos050",
	path: "data/Microfiber-07072015/062515_MF_4_63x_Pos050_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos001",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos001_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos002",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos002_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos004",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos004_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos005",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos005_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos006",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos006_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos007",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos007_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos009",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos009_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos011",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos011_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos012",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos012_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos013",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos013_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos014",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos014_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos015",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos015_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos017",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos017_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos019",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos019_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos020",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos020_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos021",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos021_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos025",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos025_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos027",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos027_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos028",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos028_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos029",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos029_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos031",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos031_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos033",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos033_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos036",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos036_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos039",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos039_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos040",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos040_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos041",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos041_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos042",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos042_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos043",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos043_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos044",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos044_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos045",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos045_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos046",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos046_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos048",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos048_projections.jpeg",
	status: "good"
},
{
	name: "062715_MF_5_63x_Pos050",
	path: "data/Microfiber-07072015/062715_MF_5_63x_Pos050_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos001",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos001_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos002",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos002_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos003",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos003_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos005",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos005_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos007",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos007_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos008",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos008_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos010",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos010_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos011",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos011_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos013",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos013_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos014",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos014_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos016",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos016_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos017",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos017_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos018",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos018_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos019",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos019_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos020",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos020_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos021",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos021_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos024",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos024_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos025",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos025_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos026",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos026_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos027",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos027_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos028",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos028_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos029",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos029_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos031",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos031_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos033",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos033_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos034",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos034_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos035",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos035_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos036",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos036_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos038",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos038_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos040",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos040_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos041",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos041_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos042",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos042_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos043",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos043_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos044",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos044_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos045",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos045_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos046",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos046_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos047",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos047_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos048",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos048_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos050",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos050_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos052",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos052_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos054",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos054_projections.jpeg",
	status: "good"
},
{
	name: "063015_MF_6_63x_Pos055",
	path: "data/Microfiber-07072015/063015_MF_6_63x_Pos055_projections.jpeg",
	status: "good"
}]        	}
        	return data;
        }
    }

}());
