angular.module("angular1-base").controller("AttackModalCtrl", 
	function($scope, $state, DataStorageService, $mdDialog) {

	var self = this;

	self.firstResponse = 0;
	self.hit = 0;
	self.damage = 0;

	function randomIntFromInterval(min,max) {
    	return Math.floor(Math.random()*(max-min+1)+min);
	}

	self.calculateFirstResponse = function() {
		self.firstResponse = self.value + (self.value * (self.bonus/100.0));
	}

	self.calculateHit = function() {
		if (!self.hitDice) {
			self.hitDice = randomIntFromInterval(1,20);
		}
		if (!self.evadeDice) {
			self.evadeDice = randomIntFromInterval(1,6);
		}
		self.hit = (self.skill + self.hitDice) - (self.vel + self.evadeDice)
	}

	self.calculateDamage = function() {
		self.damage = ((self.str * 1.1) + self.weapon) - ((self.res * 0.9) + self.armor);
	}

});