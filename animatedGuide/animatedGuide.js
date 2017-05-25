/*global $*/
(function() {
    var selectedSlide = 1;
    $('.slide').css({transform:"translate(100vw,0)"});
    $('.slide[data-slidenum=\'1\'').css({translate:[0,0]})
    var resolveSlide = function(newSlide) {
            $('.slide[data-slidenum=\'' + selectedSlide + '\']').transit({translate:["-100vw",0]}, function() {
                $(this).css({transform:"translate(100vw,0)"});
            });
            $('.slide[data-slidenum=\'' + newSlide + '\']').transit({translate:[0,0]});
            selectedSlide = newSlide;
    };
    $('html').mouseup(function(e) {
            resolveSlide(selectedSlide + 1);
    });
})();