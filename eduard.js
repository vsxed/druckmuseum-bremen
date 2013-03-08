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

$('.smoothie, .for, .back').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1800);
            return false;
        }
    }
});

 // New Form Validation
        // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':

        

        // bind the validation to the form submit event
        //$('#send').click('submit');//.prop('disabled', true);
});