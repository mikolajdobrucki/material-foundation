// Selection Controls behavior

$.fn._toggleInput = function () {
  $(this).click(function () {
    $(this).toggleClass('checked');
    $(this).siblings('.radio + label').removeClass('checked');
  });
};

$('.radio + label, .checkbox + label')._toggleInput();
