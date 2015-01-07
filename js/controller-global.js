/**
 * Created by dreamind on 07.01.2015.
 */

(function() {

    'use strict';

    angular
        .module( 'tube' )
        .controller( 'Global', Global );

    function Global( $route, $routeParams, $location ) {

        var vg = this;

        vg.$route = $route;
        vg.$location = $location;
        vg.$routeParams = $routeParams;

    }

})();