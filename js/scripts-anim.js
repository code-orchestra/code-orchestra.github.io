// JavaScript Document
$(document).ready(function() {
    var enableAnimations = (navigator.appVersion.indexOf("MSIE 8") == -1 /*&& navigator.appVersion.indexOf("Windows NT 5"*) == -1*/) ? true : false;






    //Animations on images
    $(".image-animation").bind("inview", function (event, visible) {
        var $this = $(this);
        if (visible == true) {
            if ($this.hasClass("animate-consecutive")) {
                //else {
                    //handle all other animated elements
                    var iteration = 1,
                        delayInMilisec = 400;
                        totalAnimatedElements = $this.find(".animated").length;
                    $this.find(".animated").each(function() {
                        var elm = $(this);

                        if (totalAnimatedElements > 2 && iteration > 2 && delayInMilisec >= 30) {
                            delayInMilisec -= 30;
                        }

                        setTimeout(function () {
                            elm.css('visibility','visible').hide().effect("fade", {}, 300);
                        }, iteration*delayInMilisec);
                        iteration++;
                    });
                }
            //}

            $this.unbind("inview");
        } else {
          // element is out of viewport
        }
    });

    //call scroll event if the elements are already in visible part of the browser
    $(window).scroll();
});
