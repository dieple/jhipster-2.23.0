'use strict';

angular.module('awsctlApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


