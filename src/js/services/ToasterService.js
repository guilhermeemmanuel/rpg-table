angular.module("angular1-base").service("ToasterService", function($translate, $mdToast) {

    var self = this;

    self.showSimpleToast = function(message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent($translate.instant(message))
                .hideDelay(3000)
        );
    };


});