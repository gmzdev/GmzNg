(function () {
  'use strict'
  angular.module('tdl.services')
    .factory('guid', [function () {
      var createGUID = function(){
        return (Math.random() * 0x1000|0)
      }
      return createGUID
    } ])
    .factory('storage', ['$window', function ($window) {
      return {
        set: function (key, value) {
          $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
          return $window.localStorage[key] || defaultValue;
        },
        setObject: function (key, value) {
          $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key) {
          return JSON.parse($window.localStorage[key]||'[]');
        }
      }
    } ])
})();