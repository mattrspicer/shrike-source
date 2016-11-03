/*global angular*/

var customDirectives = angular.module('customDirectives', ['ngAnimate', 'ngMaterial']);

var shrikeApp = angular.module('shrike-app', ['customDirectives', 'ngAnimate', 'ngMaterial', 'ngSanitize', 'ui.bootstrap', 'ngRoute']);

