/**
 * Created by home on 03.01.2015.
 */

(function(){

    'use strict';

    angular
        .module('tube')
        .controller( 'Play', Play );

    function Play() {

        var vm      = this,
            audio   = document.getElementById('audio'),
            cites   = "check-line-city-", // check-line
            count   = 7,
            $check  = $('.check-line'),
            $toggle = $('#toggle'),
            positions = getPositions();

        $toggle.addClass('glyphicon-volume-up orange');

        var srcs = [
            "audio/Berlin.mp3",
            "audio/Kiev.mp3",
            "audio/London.mp3",
            "audio/Minsk.mp3",
            "audio/Moscow.mp3",
            "audio/NewYork.mp3",
            "audio/Paris.mp3",
            "audio/Prague.mp3"
        ];

        // Methods:
        vm.init     = init;
        vm.play     = play;
        vm.pause    = pause;
        vm.toggle   = toggle;
        vm.city     = city;

        // Events:
        audio.addEventListener( 'ended', init, true );

        function init() {
            var randomCity = Math.floor( Math.random() * count );

            audio.volume = 0.5;
            vm.city( randomCity );
        }

        function play() {
            audio.play();
        }

        function pause() {
            audio.pause();
        }

        function toggle() {
            if( audio.paused ) {
                audio.play();
                $toggle.removeClass('glyphicon-volume-off red').addClass('glyphicon-volume-up orange');
            } else {
                audio.pause();
                $toggle.removeClass('glyphicon-volume-up orange').addClass('glyphicon-volume-off red');
            }
        }

        function city( count ) {

            var line = cites + count;
            $check.removeClass( positions ).addClass( line );
            $toggle.removeClass('glyphicon-volume-off red').addClass('glyphicon-volume-up orange');

            setTimeout( function() {
                changeSrc( count );
            }, 1000);
        }

        function changeSrc( count ) {
            audio.pause();
            audio.src = srcs[count] + "#0";
            audio.play();
        }

        function getPositions() {
            var line = "";
            for( var i = 0; i < count; i++ ) {
                line += " " + cites + i;
            }
            return line;
        }

        return vm;
    }

})();