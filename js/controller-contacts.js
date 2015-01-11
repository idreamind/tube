/**
 * Created by dreamind on 07.01.2015.
 */

(function() {

    'use strict';

    angular
        .module('tube')
        .controller( 'Contacts', Contacts );

    function Contacts() {

        var vc = this;

        vc.initialization = initialization;

        // On start:
        vc.initialization();

        function initialization() {
            var $pContacts = $('.row-contacts').eq(0),
                $pAbout = $('.row-about').eq(0);

            window.addEventListener('scroll', scrollHandler);
            // Scroll handler:
            function scrollHandler() {
                var scrolled = window.pageYOffset || document.documentElement.scrollTop,
                    sKDirect = scrolled / document.body.scrollHeight * 100,
                    sKRevers = 100 - sKDirect;

                $pContacts.css( 'background-position', "0% " + sKDirect + "%");
                $pAbout.css( 'background-position', "100% " + sKRevers + "%");
            }

            // Set qTip plugin for OUTSIDE plugins:
            $('.color-mail').qtip({
                position: {
                    my: 'left  top',
                    at: 'right center'
                },
                style: {
                    classes: 'qtip-red'
                }
            });

            $('.color-skype').qtip({
                position: {
                    my: 'left  top',
                    at: 'right center'
                },
                style: {
                    classes: 'qtip-blue'
                }
            });
        }

        // Collections:
        vc.text = [
            "Многим из нас хорошо помнятся ламповые радиоприёмники, выпускавшиеся в середине прошлого века. С тех пор немало воды утекло: приёмники состарились, поцарапались, расстроилась их электронная схема…  Хочется починить своих любимцев, а в мастерские их не берут - говорят, ламповым радио мы не занимаемся, Вы бы ещё динозавра на оживление принесли.",
            "Но есть и в наши дни такие люди, кто способен дать ламповому радио вторую жизнь, кто способен сделать ламповые радиоприёмники такими, какими они были: новыми, блестящими, пахнущими свежестью и отлично работающими! Посмотрите фотогалерею - на этих фотографиях результаты нашего труда за последние несколько лет. Фотографии говорят сами за себя - у нас не музей, у нас всё работает! И вот это всё можно купить или заказать, комплексно отремонтировать — ну за исключением того, что уже продано!",
            "На ламповом радиоприёмнике можно слушать радио, а если это радиола - то и крутить виниловые пластинки, его можно подключить к звуковой карте компьютера, или ноутбука, или просто к Вашему смартфону и слушать любимую музыку, звуковые дорожки кинофильмов…"
        ];

        vc.contacts = [
            {
                icon: "glyphicon glyphicon-user",
                data: "Валерий Васильевич:",
                link: "",
                line: "true"
            },
            {
                icon: "glyphicon glyphicon-home",
                data: "г. Минск, Республика Беларусь",
                link: "",
                line: "true"
            },
            {
                icon: "fa fa-skype fa-size",
                data: "vv_man",
                link: "skype:SkypeUser?chat",
                line: "true"
            },
            {
                icon: "fa fa-facebook-square fa-size",
                data: "Валерий Манюк",
                link: "https://www.facebook.com/profile.php?id=100001722759506",
                line: "true"
            },
            {
                icon: "glyphicon glyphicon-phone",
                data: "( +375 ) 29 565-89-05",
                link: "",
                line: "true"
            },
            {
                icon: "fa fa-at fa-size",
                data: "arcam@tut.by",
                link: "mailto:arcam@tut.by?subject=Ретро Приёмник",
                line: "false"
            }
        ]


    }

})();