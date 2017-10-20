// Floating label behavior

$('.with-floating-label').keyup(function(){
  if( $(this).val().length != 0 ) {
    $(this).addClass('not-empty');
  } else {
    $(this).removeClass('not-empty');
  }
});
