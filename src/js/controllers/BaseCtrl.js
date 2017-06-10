angular.module("angular1-base").controller("BaseCtrl", 
	function($scope, $state, $mdDialog, $stateParams, BaseService, $window, ToasterService, BaseService, DataStorageService) {

	var self = this;

	self.master = $stateParams.master;

	self.players = BaseService.getPlayers();

	self.enemies = BaseService.getEnemies();

	self.player_races = BaseService.getAblePlayerRaces();

	self.openAttackModal = function () { 
		$mdDialog.show({
	      controller: 'AttackModalCtrl',
	      controllerAs: 'ctrl',
	      templateUrl: 'views/modals/attack_dialog.html',
	      parent: angular.element(document.body),
	      // targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	    })
	    .then(function() {

	    }, function() {
	      //  'You cancelled the dialog.';
	    });
	}

	self.savePlayerModal = function (player_obj) { 
		DataStorageService.storeObject(player_obj);
		$mdDialog.show({
	      controller: 'PlayerModalCtrl',
	      controllerAs: 'ctrl',
	      templateUrl: 'views/modals/player_dialog.html',
	      parent: angular.element(document.body),
	      // targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	    })
	    .then(function(player) {
	    	BaseService.savePlayer(player);
	    	self.players = BaseService.getPlayers();
	    }, function() {
	      //  'You cancelled the dialog.';
	    });
	}

	self.saveEnemyModal = function (enemy_obj) {
		DataStorageService.storeObject(enemy_obj);
		$mdDialog.show({
	      controller: 'PlayerModalCtrl',
	      controllerAs: 'ctrl',
	      templateUrl: 'views/modals/player_dialog.html',
	      parent: angular.element(document.body),
	      // targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	    })
	    .then(function(enemy) {
	    	console.log(enemy);
	    	BaseService.saveEnemy(enemy);
	    	self.enemies = BaseService.getEnemies();
	    }, function() {
	      //  'You cancelled the dialog.';
	    });
	}

	self.deletePlayer = function(player) {
		$mdDialog.show({
		  controller: 'ConfirmModalCtrl',
	      controllerAs: 'ctrl',
	      templateUrl: 'views/modals/confirm_modal.html',
	      parent: angular.element(document.body),
	      // targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	    })
	    .then(function(value) {
	    	BaseService.deletePlayer(player);
	    	self.players = BaseService.getPlayers();
	    }, function() {
	      //  'You cancelled the dialog.';
	    });
	}

	self.deleteEnemy = function(enemy) {
		$mdDialog.show({
		  controller: 'ConfirmModalCtrl',
	      controllerAs: 'ctrl',
	      templateUrl: 'views/modals/confirm_modal.html',
	      parent: angular.element(document.body),
	      // targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	    })
	    .then(function(value) {
	    	BaseService.deleteEnemy(enemy);
	    	self.enemies = BaseService.getEnemies();
	    }, function() {
	      //  'You cancelled the dialog.';
	    });
	}

	self.activatePlayer = function (player) {
		player.activated = true;
		BaseService.savePlayer(player);
	    self.players = BaseService.getPlayers();
	}

	self.deactivatePlayer = function (player) {
		player.activated = false;
		BaseService.savePlayer(player);
	    self.players = BaseService.getPlayers();
	}

	self.activateEnemy = function (enemy) {
		enemy.activated = true;
		BaseService.saveEnemy(enemy);
	    self.enemies = BaseService.getEnemies();
	}

	self.deactivateEnemy = function (enemy) {
		enemy.activated = false;
		BaseService.saveEnemy(enemy);
	    self.enemies = BaseService.getEnemies();
	}

	self.cloneEnemy = function (enemy) {
		var enemy_copy = angular.copy(enemy);
		enemy_copy.id = undefined;
		BaseService.saveEnemy(enemy_copy);
	    self.evemies = BaseService.getEnemies();

	}

});