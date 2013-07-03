/*
|-------------------------------------------------------------------------------
| CALLING PLUGINS FUNCTIONS
|-------------------------------------------------------------------------------
|
*/
$(function () {
    $('#titul-slides').slides({
        preload: true,
        preloadImage: 'images/loading.gif',
        play: 5000,
        pause: 2500,
        hoverPause: true,
        animationStart: function (current) {
            $('.caption').animate({
                opacity: 0
            }, 100);
            $('#slides-header').animate({
                opacity: 0
            }, 100);
            if (window.console && console.log) {
                // example return of current slide number
                console.log('animationStart on slide: ', current);
            }
        },
        animationComplete: function (current) {
            $('.caption').animate({
                opacity: 1.0
            }, 200);
            $('#slides-header').css('background-image', 'url(images/text' + current + '.png)');
            $('#slides-header').animate({
                opacity: 1.0
            }, 200);
            if (window.console && console.log) {
                // example return of current slide number
                console.log('animationComplete on slide: ', current);
            }
        },
        slidesLoaded: function () {
            $('.caption').animate({
                opacity: 1.0
            }, 200);
        }
    });
});

$(document).ready(function () {
    $("#tabsCo2").verticaltabs({
        speed: 500,
        slideShow: false,
        activeIndex: 0
    });
});

$(document).ready(function () {
    $("a[rel^='prettyPhoto']").prettyPhoto();
});

$(window).load(function () { //$(window).load() must be used instead of $(document).ready() because of Webkit compatibility
    $("#carousel-ytube").sliderkit({
        auto: true,
        autospeed: 4000,
        shownavitems: 5,
        circular: true,
        fastchange: false,
        scrolleasing: "easeOutExpo", //"easeOutBounce, easeOutBack"
        scrollspeed: 500
    });
});

/*
|-------------------------------------------------------------------------------
| MISC
|-------------------------------------------------------------------------------
|
*/
$(document).ready(function(){
    $("#action-open").click(function(){
        $("#action-gifs").slideDown('slow');
        $("#action-open").fadeOut('fast');
    });

    $("#action-gifs .action-close").click(function(){
        $("#action-gifs").slideUp('fast');
        $("#action-open").fadeIn('fast');
    });

    $("#download-colt-trial-button").click(function(){
        download_COLT();
    });

    $("#download-co2-trial-button").click(function(){
        download_co2();
    });

    $("#rocket-div").click(function(e){
        // ok, so people want to click stuff in that div
        // we don't want to mess with its layout, so here goes the hack
        if(e.target.id != "rocket-div") {
            // ignore logo images in the div
            return;
        }
        var offset = $(e.target).offset();
        var x = e.pageX - offset.left;
        if((x < 285)||(x > 690)) {
            // find closest "appears to be a link" area in the div
            var tabs = {
                ts:{x:175,y:115},
                md:{x:815,y:125},
                nr:{x:125,y:215},
                tw:{x:810,y:210},
                st:{x:145,y:310},
                dp:{x:845,y:300}
            }
            var y = e.pageY - offset.top, d = 1e23, t;
            for (var tab in tabs) {
                var ptab = tabs[tab];
                var dtab = (x-ptab.x)*(x-ptab.x)+(y-ptab.y)*(y-ptab.y);
                if (dtab < d) { d = dtab; t = tab; }
            }
            // trigger click handler in corresponding tab
            $(".tabs-"+t+" a").trigger("click");
            // scroll down to the tabs
            // (thanks to that top menu we need to go to something above the tabs)
            location = "#download-colt-trial-button";
        }
    });
    if(location.hash == '#contest-open'){
        $('#contest-open').trigger('click');
    };
});

/*
|-------------------------------------------------------------------------------
| STICKY MENU
|-------------------------------------------------------------------------------
|
*/
$(function() {
    $(window).scroll(function(){
        /* when reaching the element with id "last" we want to show the slidebox. Let's get the distance from the top to the element */
        var distanceTop = $(window).height();

        if  ($(window).scrollTop() > distanceTop)
            $('#slidepanel').animate({'top':'0px'},400);
        else
            $('#slidepanel').stop(true).animate({'top':'-61px'},200);
    });



    /* remove the slidebox when clicking the cross */
    /*$('#slidepanel').bind('click',function(){
        $(this).parent().remove();
    });*/
});

