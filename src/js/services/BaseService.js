angular.module("angular1-base").service("BaseService", function($http, $state, UrlConstants) {

    var self = this;

    self.doFunction = function () {
        return "func";
    };

});