$.fn._toggleInput = function () {
  $(this).click(function () {
    $(this).toggleClass('checked');
  });
};

$('label.radio, label.checkbox')._toggleInput();