/*
|-------------------------------------------------------------------------------
| CONSOLE ERRORS CURE
|-------------------------------------------------------------------------------
|
| Avoid 'console' errors in browsers that lack a console.
|
*/
(function() {
    var noop = function noop() {},
        methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'],
        length = methods.length,
        console = window.console || {};

    while(length--) {
        // Only stub undefined methods.
        console[methods[length]] = console[methods[length]] || noop;
    }
}());

/*
|-------------------------------------------------------------------------------
| DOWNLOADS
|-------------------------------------------------------------------------------
|
*/
function downloadCOLT(){
    var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
    var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
    var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

    if(isMac){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/COLT.dmg");
    }else if(isWindows){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/COLT-install.exe");
    }else if(isLinux){
        //window.location.replace("http://codeorchestra.com/files/colt_linux.tg");
        alert("Linux not support yet. Coming soon");
    }
}

function downloadIDE(){
    var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
    var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
    var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

    if(isMac){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/CO2-mac.zip");
    }else if(isWindows){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/CO2-win.exe");
    }else if(isLinux){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/CO2-linux.tar.gz");
    }
}

/*
|-------------------------------------------------------------------------------
| STICKY MENU
|-------------------------------------------------------------------------------
|
*/
$(function() {
    $(window).scroll(function(){
        var distanceTop = $(window).height();

        if  ($(window).scrollTop() > distanceTop)
            $('#sticky-menu').animate({'top':'0'},400);
        else
            $('#sticky-menu').stop(true).animate({'top':'-72px'},200);
    });
});

/*
|-------------------------------------------------------------------------------
| SWAPPING IMAGES
|-------------------------------------------------------------------------------
*/
$(function(){
    $('.img-swap').click(function() {
        if ($(this).attr('class') == 'img-swap') {
            this.src = this.src.replace('-01','-02');
        } else {
            this.src = this.src.replace('-02','-01');
        }

        $(this).toggleClass('on');
    });

    var imgSwap = [];

    $('.img-swap').each(function(){
        imgUrl = this.src.replace('-01','-02');
        imgSwap.push(imgUrl);
    });
    $(imgSwap).preload();
});

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
};

/*
|-------------------------------------------------------------------------------
| CALLING FUNCTIONS
|-------------------------------------------------------------------------------
| After the DOM is loaded
|
*/
$(document).ready(function(){

    $('#btn-download-colt').click(function(e){ e.preventDefault(); downloadCOLT(); });
    $('#btn-download-ide').click(function(e){ e.preventDefault(); downloadIDE(); });
    $('.rotator, .bubble').rotaterator({fadeSpeed:800, pauseSpeed:8000});
});

/*
|-------------------------------------------------------------------------------
| IE status bar error fix
|-------------------------------------------------------------------------------
*/
function noError() {
    return true;
}
window.onerror = noError;
