define(function () {
    return {
        activate: function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (width < 767) { $('html, body').animate({ scrollTop: 500 }, 500); }
        }
    };
});