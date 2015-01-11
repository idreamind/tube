/**
 * Created by dreamind on 07.01.2015.
 */

(function() {

    'use strict';

    angular
        .module( 'tube' )
        .controller( 'Global', Global );

    function Global() {

        var vg   = this,
            body = $("html, body"),
            jimgView = $('#img-view');
        console.log( jimgView );

        vg.toTop = toTop;
        vg.setBigImg = setBigImg;
        vg.removeBigImg = removeBigImg;

        vg.srcBigImg = "img/radio/radio%20(1).jpg";

        function toTop() {
            body.animate(  {scrollTop: 0 }, '500', 'swing' );
        }

        function resetToggle() {
            $('.dropdown').hover( function() {
                $(this).toggleClass('open');
            }).click( function( event ){
                event.stopPropagation();
                window.location = "#/works";
            });
        }
        resetToggle();

        function setBigImg( src ) {
            if( !jimgView.hasClass('expand') ) {
                jimgView.addClass('expand');
                setTimeout( function() {
                    if( windowState() ) {
                        jimgView.addClass('expand-img-h');
                    } else {
                        jimgView.addClass('expand-img-w');
                    }
                }, 200 );

                if( vg.srcBigImg != src ) {
                    vg.srcBigImg = src;
                }
            }
        }

        function removeBigImg() {
            if( jimgView.hasClass('expand') ) {
                jimgView.removeClass('expand-img-h expand-img-w');
                setTimeout( function() {
                    jimgView.removeClass('expand');
                }, 200 );
            }
        }

        function windowState() {
            return ( window.innerWidth / window.innerHeight ) >= 1;
        }

        // Collections:
        vg.links = [
            {
                ref: "skype:SkypeUser?chat",
                icon: "fa fa-skype",
                style: "icon-brand color-skype"
            },
            {
                ref: "https://www.facebook.com/profile.php?id=100001722759506",
                icon: "fa fa-facebook-square",
                style: "icon-brand color-facebook"
            },
            {
                ref: "mailto:arcam@tut.by?subject=Ретро Приёмник",
                icon: "fa fa-at",
                style: "icon-brand color-mail"
            }
        ];

        vg.slogan = [
            "Ламповые приёмники",
            "Профессиональная реставрация"
        ];

        vg.title = [
            "retro",
            "priemnik"
        ];
    }

})();