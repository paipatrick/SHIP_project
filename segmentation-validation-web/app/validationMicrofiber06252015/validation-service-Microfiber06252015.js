 (function () {
    'use strict';

    angular.module('ngSvw.validationServiceMicrofiber06252015', [])
        .factory('validationServiceMicrofiber06252015', validationServiceMicrofiber06252015);

    validationServiceMicrofiber06252015.$inject = ['$rootScope', '$q'];

    function validationServiceMicrofiber06252015($rootScope, $q) {
        var service = {
            getMicrofiber06252015 : getMicrofiber06252015,
        };
        return service;

        function getMicrofiber06252015() {
        	var data = {
	        	size: 39,
	        	name: "Microfiber06252015",
	    		currentImage: 0,
	    		segmentations: [
{
	name: "061715_MF_1_63x_Pos001",
	path: "data/Microfiber-06252015/061715_MF_1_63x_Pos001_projections.jpeg",
	status: "good"
},
{
	name: "061715_MF_1_63x_Pos006",
	path: "data/Microfiber-06252015/061715_MF_1_63x_Pos006_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos043",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos043_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos047",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos047_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos048",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos048_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos049",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos049_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos050",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos050_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos053",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos053_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos054",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos054_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos056",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos056_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos057",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos057_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos062",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos062_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos065",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos065_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos066",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos066_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos069",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos069_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos072",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos072_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos073",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos073_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos075",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos075_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos080",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos080_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos083",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos083_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos084",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos084_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos091",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos091_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos095",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos095_projections.jpeg",
	status: "good"
},
{
	name: "061915_MF_2_63x_Pos096",
	path: "data/Microfiber-06252015/061915_MF_2_63x_Pos096_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos001",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos001_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos002",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos002_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos004",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos004_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos005",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos005_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos006",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos006_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos007",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos007_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos009",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos009_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos010",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos010_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos011",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos011_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos013",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos013_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos014",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos014_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos016",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos016_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos017",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos017_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos018",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos018_projections.jpeg",
	status: "good"
},
{
	name: "062215_MF_1_63x_Pos019",
	path: "data/Microfiber-06252015/062215_MF_1_63x_Pos019_projections.jpeg",
	status: "good"
}]        	}
        	return data;
        }
    }

}());
