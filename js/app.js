/**
 * Created by Dimi on 3/02/14.
 */

var spaceApp = angular.module('spaceApp', ['ngRoute', 'spaceServices', 'ngCookies', 'ngAnimate', 'pascalprecht.translate'])
    .config(appRouter);

//Navigation
function appRouter($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .when('/game', {
            templateUrl: 'partials/game.html',
            controller: 'GameController'
        })
}

//Translation
spaceApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en_US', {
        HELLO_WORLD: 'Hello World!',
        LOGIN: 'Login',
        USERNAME: "Username",
        PASSWORD: "Password",
        REGISTER:"Register"
    });
    $translateProvider.translations('nl_NL', {
        HELLO_WORLD: 'Hallo Wereld!',
        LOGIN: 'Aanmelden',
        USERNAME: "Gebruikersnaam",
        PASSWORD: "Wachtwoord",
        REGISTER: "Registreer"
    });
    $translateProvider.preferredLanguage('en_US');
}]);

spaceApp.controller("MainController", function ($scope, $cookies, $location, $timeout, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.uses(key);
    };

});