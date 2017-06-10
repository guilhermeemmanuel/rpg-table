angular.module("angular1-base").controller("PlayerModalCtrl", 
	function($scope, $state, DataStorageService, $mdDialog) {

	var self = this;

	self.player = angular.copy(DataStorageService.getObject());

	self.savePlayer = function () {
		$mdDialog.hide(self.player);
	}

});