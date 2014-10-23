angular.module('SvgMapApp', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        var states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL",
            "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM",
            "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA",
            "WA", "WV", "WI", "WY"];
        $scope.createDummyData = function () {
            var dataTemp = {};
            angular.forEach(states, function (state, key) {
                dataTemp[state] = {value: Math.random()}
            });
            $scope.dummyData = dataTemp;
        };
        $scope.createDummyData();

        $scope.changeHoverRegion = function (region) {
            $scope.hoverRegion = region;
        };
    }]);