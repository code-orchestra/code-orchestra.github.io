angular.module("colt.io.directives", [])

.directive('help', function() {

  return {
    restrict: 'E',
    scope: {
      htmlDoc: "@",
      x: "@",
      y: "@"
    },
    replace:true,
    link: function(scope, element) {
      if(scope.htmlDoc){
        var a = $(element).find("img");
        var title = $(scope.htmlDoc).find("h3").text();
        var content = $(scope.htmlDoc).find("div").html();
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
    template: function() {
      return '<div style="z-index=1000;display:inline;width:10px;height:10px;'+
      'position:absolute;left:{{x}}px;top:{{y}}px">'+
      '<img src="images/help-icon.png"></div>'
    }
    
  };
})