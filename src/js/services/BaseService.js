angular.module("angular1-base").service("BaseService", function($http, $state) {

    var self = this;

    var player_races = [
    {"id": "human", "name":"Humano", "able":true},
    {"id": "elf", "name":"Elfo", "able":true},
    {"id": "dwarf", "name": "Anao", "able":true},
    {"id": "hobbit", "name": "Hobbit", "able":true},
    {"id": "mage", "name": "Mago", "able":false},
    {"id": "beorning", "name": "Beorning", "able":false},
    ]

    self.players = angular.fromJson(localStorage.players) ? angular.fromJson(localStorage.players) : [];

    self.enemies = angular.fromJson(localStorage.enemies) ? angular.fromJson(localStorage.enemies) : [];

    self.getAblePlayerRaces = function () {
    	return player_races.filter(function (element) {
    		return element.able;
    	});
    }

    self.getPlayers = function() {
    	return self.players;
    }

    self.deletePlayer = function(player) {
        for (var i = 0; i < self.players.length; i ++) {
            console.log(player);
            if (self.players[i].id == player.id) {
                self.players.splice(i, 1);
            }
        }
        localStorage.players = angular.toJson(self.players);
        self.players = angular.fromJson(localStorage.players);
    }

    self.deleteEnemy = function(enemy) {
        for (var i = 0; i < self.enemies.length; i ++) {
            console.log(enemy);
            if (self.enemies[i].id == enemy.id) {
                self.enemies.splice(i, 1);
            }
        }
        localStorage.enemies = angular.toJson(self.enemies);
        self.enemies = angular.fromJson(localStorage.enemies);
    }

    self.savePlayer = function(player) {

    	if (!player) { 
    		return;
    	}
    	if(!player.id) {
    		player.id = new Date().getTime();
    		self.players.push(angular.copy(player))
    	}
    	else{
    		for (var i = 0; i < self.players.length; i ++) {
    			if (self.players[i].id == player.id) {
    				self.players[i] = player;
    			}
    		}
    	}
        localStorage.players = angular.toJson(self.players);
        self.players = angular.fromJson(localStorage.players);
    }

    self.getEnemies = function() {
    	return self.enemies;
    }

    self.saveEnemy = function(enemy) {
		if (!enemy) { 
    		return;
    	}
    	if(!enemy.id) {
    		enemy.id = new Date().getTime();
    		self.enemies.push(angular.copy(enemy))
    	}
    	else{
    		for (var i = 0; i < self.enemies.length; i ++) {
    			if (self.enemies[i].id == enemy.id) {
    				self.enemies[i] = enemy;
    			}
    		}
    	}
        localStorage.enemies = angular.toJson(self.enemies);
        self.enemies = angular.fromJson(localStorage.enemies);
    }


});