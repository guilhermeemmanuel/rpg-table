angular.module("angular1-base").controller("ConfirmModalCtrl", 
	function($scope, $state, DataStorageService, $mdDialog) {

	var self = this;

	self.confirm = function () {
		$mdDialog.hide();
	}

});