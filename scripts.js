(function() {
    var $logo = $('nav>img');
    $logo.mouseover(function() {
        $(this).transit({scale:[2.0,2.0],translate:["1em",0]});
    });
    $logo.mouseout(function() {
        $(this).transit({scale:[1.0,1.0],translate:[0,0]});
    });
})();