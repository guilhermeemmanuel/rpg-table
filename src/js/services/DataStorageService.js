angular.module("angular1-base").service("DataStorageService", function($http, $state) {

    var self = this;

    var storage;

    self.storeObject = function (storage) {
        this.storage = storage;
    }

    self.getObject = function () {
        return this.storage;
    }


});