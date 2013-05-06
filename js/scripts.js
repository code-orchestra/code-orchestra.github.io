// JavaScript Document
$(document).ready(function() {
    var enableAnimations = (navigator.appVersion.indexOf("MSIE 8") == -1 /*&& navigator.appVersion.indexOf("Windows NT 5"*) == -1*/) ? true : false;
    
    $(".dialog").dialog({
        modal: true,
        autoOpen: false,
        width: 1280,
        closeOnEscape: true,
        close: function(e, ui) {
          $(".dialog").empty();
        }
    });
    
    
    $(".ui-widget-overlay, .ui-widget-content").live("click touchstart", function() {
      $(".dialog").dialog("close");
      return false;
    });
    
    $(".dialog-link").live("click", function() {
      var hrefVal = $(this).attr("data-dialog"),
          isVideo = hrefVal.indexOf("vimeo") != -1 ? true : false,
          isImage = hrefVal.indexOf("assets/images") != -1 ? true : false;
      $(".dialog").empty();
      
      if (isVideo) {
        $(".dialog").dialog("option", "height", 430).html('<iframe src="' + hrefVal + '" width="640" height="400" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
      }
      else if (isImage) {
        $(".dialog").dialog("option", "height", 765).html('<img src="' + hrefVal + '" title="" alt="" />');
      }
      
      $(".dialog").dialog("open");
      
      if (navigator.userAgent.match(/iPad/i)) {
        $(".ui-dialog ").css("top", (parseInt($(".ui-dialog").css("top"), 10) + 50) + "px");
      }
      return false;
    });
    
    
    
    //Share buttons handlers
    $("li.social a").on("click", function() {
        var $this = $(this),
            parentElm = $(this).parent(),
            url = encodeURIComponent(window.location),
            txt = $('meta[property="og:title"]').attr("content");
        
        if (parentElm.hasClass("facebook")) {
            window.open("http://www.facebook.com/sharer.php?u=" + url + "&t=" + txt, "sharer", "toolbar=0,status=0,width=626,height=436");
        }
        else if (parentElm.hasClass("twitter")) {
            window.open("http://twitter.com/share?url=" + url + "&text=@F_i newest case study on their own iconography ");
        }
        else if (parentElm.hasClass("google-plus")) {
            window.open("https://plus.google.com/share?url=" + url, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
        }
        
        return false;
    });
    
    //Animations on images
    $(".image-animation").bind("inview", function (event, visible) {
        var $this = $(this);
        if (visible == true) {
            if ($this.hasClass("animate-consecutive")) {
                if ($this.hasClass("sony-animation")) {
                    //handle sony animation
                    setTimeout(function () {
                        if (enableAnimations) {
                            $this.find(".decoration-icon").css('visibility','visible').animate({left: "315px", opacity: 1}, 300);
                        }
                        else {
                            $this.find(".decoration-icon").css({visibility: 'visible', left: "315px"}).hide().effect("fade", {}, 300);
                        }
                    }, 300);
                }
                else if ($this.hasClass("ramayana-animation")) {
                    //handle ramayana animation
                    setTimeout(function () {
                        if (enableAnimations) {
                            $this.find(".animated").eq(0).css('visibility','visible').animate({opacity: 1}, 300);
                            $this.find(".animated").eq(1).css('visibility','visible').animate({top: "147px", left: "240px", opacity: 1}, 300);
                            $this.find(".animated").eq(2).css('visibility','visible').animate({left: "247px", opacity: 1}, 300);
                        }
                        else {
                            $this.find(".animated").eq(0).css({visibility: 'visible'}).hide().effect("fade", {}, 300);
                            $this.find(".animated").eq(1).css({visibility: 'visible', top: "147px", left: "240px"}).hide().effect("fade", {}, 300);
                            $this.find(".animated").eq(2).css({visibility: 'visible', left: "247px"}).hide().effect("fade", {}, 300);
                        }
                    }, 500);
                }
                else {
                    //handle all other animated elements
                    var iteration = 1,
                        delayInMilisec = 300;
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
            }
            
            $this.unbind("inview");
        } else {
          // element is out of viewport
        }
    });
    
    //call scroll event if the elements are already in visible part of the browser
    $(window).scroll();
});