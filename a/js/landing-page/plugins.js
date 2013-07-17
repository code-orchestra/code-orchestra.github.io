/*
|-------------------------------------------------------------------------------
| DOWNLOAD
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

/*
|-------------------------------------------------------------------------------
| TESTIMONIALS ROTATOR
|-------------------------------------------------------------------------------
*/
(function($) {
    $.fn.extend({
        //plugin name - rotaterator
        rotaterator: function(options) {

            var defaults = {
                fadeSpeed: 600,
                pauseSpeed: 100,
                child: null
            };

            var options = $.extend(defaults, options);

            return this.each(function() {
                var o = options;
                var obj = $(this);
                var items = $(obj.children(), obj);
                items.each(function() {
                    $(this).hide();
                });
                if(!o.child) {
                    var next = $(obj).children(':first');
                } else {
                    var next = o.child;
                }
                $(next).fadeIn(o.fadeSpeed, function() {
                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
                        var next = $(this).next();
                        if(next.length === 0) {
                            next = $(obj).children(':first');
                        }
                        $(obj).rotaterator({
                            child: next,
                            fadeSpeed: o.fadeSpeed,
                            pauseSpeed: o.pauseSpeed
                        });
                    });
                });
            });
        }
    });
})(jQuery);
