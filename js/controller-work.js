/**
 * Created by dreamind on 07.01.2015.
 */

(function(){

    'use strict';

    angular
        .module( 'tube' )
        .controller( 'Work', Work );

    function Work( $location, filterFilter ) {

        var vw = this,
            viewState = $location.path().replace( "/", "" );

        // Temporary files:
        var collection = [
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-1"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-2"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-3"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-4"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-5"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-6"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-7"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-8"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-9"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-10"
            },
            {
                type: 'tesla',
                title: 'Катушка Тесла',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-11"
            },
            {
                type: 'devices',
                title: 'Фонограф',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-12"
            }
        ];

        // Set collection to view:
        vw.itemsToView = ( viewState && viewState !== 'works'  ) ? filterFilter(collection, viewState) : collection;
    }

})();