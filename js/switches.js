$.fn._toggleInput = function () {
  $(this).click(function () {
    $(this).toggleClass('checked');
    $(this).siblings('label.radio').removeClass('checked');
  });
};

$('label.radio, label.checkbox')._toggleInput();
