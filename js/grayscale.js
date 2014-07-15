'use strict';

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

!function(){function k(){l(null),m(null)}function l(a){var b;return b=a?'blur('+a+'px)':null,j.style['-webkit-filter']=b,j.style['-o-filter']=b,j.style['-ms-filter']=b,j.style.filter=b,!1}function m(a){var b;return b=a?'rotate('+a+'deg)':null,j.style['-webkit-transform']=b,j.style['-moz-transform']=b,j.style['-o-transform']=b,j.style['-ms-transform']=b,j.style.transform=b,!1}function n(){a&&(i===d?f=1:i==e&&(f=-1),h===b?g=1:h===c&&(g=-1),i+=1*f,h+=.5*g,l(i),m(h))}function o(){a=!0}function p(){a=!1,k()}var a=!1,b=-2,c=2,d=1,e=8,f=1,g=1,h=0,i=5,j=document.getElementsByTagName('body')[0];setInterval(n,500),window.onkeydown=function(b){b=b||window.event,27==b.keyCode&&a&&p()},window.getSober=p,window.getDrunk=o}();
