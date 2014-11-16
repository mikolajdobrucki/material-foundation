var addRippleEffect = function (e) {
    var target = e.target;
    if (target.className.indexOf("ink") === -1) { return false; }
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        if (target.className.indexOf("ink-color") !== -1) {
            ripple.className = 'ripple-color';
        } else {
            ripple.className = 'ripple';
        }
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
};

document.addEventListener('click', addRippleEffect, false);