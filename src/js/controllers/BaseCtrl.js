angular.module("angular1-base").controller("BaseCtrl", 
	function($scope, $state, BaseService, $window, ToasterService) {

	var self = this;

	self.doBase = function () {
		console.log(BaseService.doBase());
    };

});