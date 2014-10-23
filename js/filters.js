angular.module('SvgMapApp').filter('map_colour', [function () {
    return function (input) {
        var b = 255 - Math.floor(input * 255);
        var g = Math.floor(input * 255);
        return "rgba(255," + g + "," + b + ",1)";
    }
}]);