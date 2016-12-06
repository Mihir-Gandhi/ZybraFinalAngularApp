(function () {
    'use strict';
    angular
        .module('ZybraBankApp')
        .service("BankService", ['$http', '$resource', '$q', BankService]);

    function BankService($http, $resource, $q) {
        this.getAllBanks = function () {
            return $http.get('https://intense-everglades-72453.herokuapp.com/api/banks', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                if (response) {
                    return response.data;
                }
            });
        };

        this.getAllCityNames = function (data) {
            var url = "https://intense-everglades-72453.herokuapp.com/api/city/" + data.bankName;
            return $http.get(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                if (response) {
                    return response.data;
                }
            });
        };

        this.getAllBranches = function (branchRequest) {
            return $http({
                method: 'POST',
                url: 'https://intense-everglades-72453.herokuapp.com/api/branches',
                data: { bank_name: branchRequest.bank_name, city : branchRequest.city },
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                if (response) {
                    return response.data;
                }
            });
        };
    }
})();
