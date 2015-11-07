 'use strict';

angular.module('awsctlApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-awsctlApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-awsctlApp-params')});
                }
                return response;
            }
        };
    });
