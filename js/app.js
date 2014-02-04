/**
 * Created by Dimi on 3/02/14.
 */

var spaceApp = angular.module('spaceApp', ['ngRoute', 'spaceServices', 'ngCookies', 'ngAnimate', 'pascalprecht.translate'])
    .config(appRouter);

//Navigation
function appRouter($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/game.html',
            controller: 'GameController'
        })
}

//Translation
spaceApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en_US', {
        HELLO_WORLD: 'Hello World!'
    });
    $translateProvider.translations('nl_NL', {
        HELLO_WORLD: 'Hallo Wereld!'
    });
    $translateProvider.preferredLanguage('en_US');
}]);