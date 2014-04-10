app.directive('help', function() {

  return {
    restrict: 'E',
    scope: {
      popover: "@",
      x: "@",
      y: "@"
    },
    replace:true,
    link: function(scope, element) {
      if(scope.popover){
        var a = $(element).find("img");
        var title = $(scope.popover).find("h3").text();
        var content = $(scope.popover).find("div").html();
        a.popover({
          title : '<h4>'+title+'</h4>',
          content: content,
          delay: 300,
          html: true,
          trigger: 'hover',
          placement: 'auto',
          container: '#content'
        });
      }
    },
    template: 
    '<div style="z-index=1000;display:inline;width:10px;height:10px;'+
    'position:absolute;left:{{x}}px;top:{{y}}px">'+
    '<img src="images/help-icon.png"></div>'
  };
})