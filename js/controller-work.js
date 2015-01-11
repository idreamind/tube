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
                imgClass: "fluid-li img-radio-1",
                src: "img/radio/radio%20(1).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-2",
                src: "img/radio/radio%20(2).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-3",
                src: "img/radio/radio%20(3).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-4",
                src: "img/radio/radio%20(4).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-5",
                src: "img/radio/radio%20(5).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-6",
                src: "img/radio/radio%20(6).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-7",
                src: "img/radio/radio%20(7).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-8",
                src: "img/radio/radio%20(8).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-9",
                src: "img/radio/radio%20(9).jpg"
            },
            {
                type: 'receivers',
                title: 'Радиоприёмник',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-10",
                src: "img/radio/radio%20(10).jpg"
            },
            {
                type: 'tesla',
                title: 'Катушка Тесла',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-11",
                src: "img/radio/radio%20(11).jpg"
            },
            {
                type: 'devices',
                title: 'Фонограф',
                description: 'Замечательный приёмник со своей самобытной историей',
                imgClass: "fluid-li img-radio-12",
                src: "img/radio/radio%20(12).jpg"
            }
        ];

        // Set collection to view:
        vw.itemsToView = ( viewState && viewState !== 'works'  ) ? filterFilter(collection, viewState) : collection;
    }

})();