/**
 * Created by home on 03.01.2015.
 */

(function(){

    'use strict';

    angular
        .module('tube')
        .controller( 'Play', Play );

    function Play( $cookieStore ) {

        var vm      = this,
            audio   = document.getElementById('audio'),
            cites   = "check-line-city-", // check-line
            count   = 8,
            delay   = 500,
            $check  = $('.check-line'),
            $toggle = $('#toggle'),
            positions  = getPositions(),
            randomCity = -1,
            tubeMuteState = $cookieStore.get( 'tubeMuteState' ) || 'true';

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
            var rC = randCity();
            randomCity = ( randomCity == rC ) ? randCity() : rC;

            audio.volume = 0.5;
            vm.city(randomCity);
        }

        function play() {
            audio.play();
            tubeMuteState = 'true';
            $cookieStore.put( 'tubeMuteState', tubeMuteState );
            toggleMute( tubeMuteState );
        }

        function pause() {
            audio.pause();
            tubeMuteState = 'false';
            $cookieStore.put( 'tubeMuteState', tubeMuteState );
            toggleMute( tubeMuteState );
        }

        function toggle() {
            if( audio.paused ) {
                vm.play();
            } else {
                vm.pause();
            }
        }

        function city( count ) {
            var line = cites + count;
            $check.removeClass( positions ).addClass( line );
            $toggle.removeClass('glyphicon-volume-off red').addClass('glyphicon-volume-up orange');

            audio.pause();
            setTimeout( function() {
                changeSrc( count );
            }, delay);
        }

        // Private:
        function changeSrc( count ) {
            audio.src = srcs[count] + "#0";

            if( tubeMuteState === 'true' ) {
                audio.play();
            } else {
                toggleMute( false );
            }
        }

        function getPositions() {
            var line = "";
            for( var i = 0; i < count; i++ ) {
                line += " " + cites + i;
            }
            return line;
        }

        function randCity() {
            return Math.floor(Math.random() * count);
        }

        function toggleMute( state ) {
            if( state === 'true' ) {
                $toggle.removeClass('glyphicon-volume-off red').addClass('glyphicon-volume-up orange');
            } else {
                $toggle.removeClass('glyphicon-volume-up orange').addClass('glyphicon-volume-off red');
            }
        }

        return vm;
    }

})();