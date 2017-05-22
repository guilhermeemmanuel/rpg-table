myApp.config(['$translateProvider', function($translateProvider) {

    $translateProvider.useSanitizeValueStrategy("sanitize");
    $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

}]);