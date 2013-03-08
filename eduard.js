$(document).ready(function() {
$('form').on('blur', 'input[required], input.optional', validator.checkField);
$('form').submit(function(e){
          e.preventDefault();
          var submit = true;
          // evaluate the form using generic validaing
          if( !validator.checkAll( $(this) ) ){
            submit = false;
          } else{
            setTimeout(function () {
                $('fieldset').addClass('pullup');
                $('.finish').addClass('true');
            }, 350);
            }
        });



// DA OBEN BITTE

  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).stop().animate({scrollTop: targetOffset}, 1200, function() {
            location.hash = target;
          });
        });
      }
    }
  });
  
  
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 

 // New Form Validation
        // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':

        

        // bind the validation to the form submit event
        //$('#send').click('submit');//.prop('disabled', true);
});