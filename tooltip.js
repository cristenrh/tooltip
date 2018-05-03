var hidePopover = function() {
  $(this).popover("hide");
};

var decideState = function() {
  $(this).popover("toggle");
}

function initializeNIATooltips(){
    var popOverSettings = {
        html: true,
        title: "<svg class='ni-close-popup' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 600 600' width='25' height='25' enable-background='new 0 0 600 600' xml:space='preserve'><polygon points='600,-0.24 562.513,-0.24 300.104,279.038 37.695,-0.24 0.208,-0.24 281.361,299.656 0.208,599.552 37.695,599.552 300.104,320.274 562.513,599.552 600,599.552 318.848,299.656 '></polygon></svg>"
    };

    $('.ni-tooltip').popover(popOverSettings)
    .blur(hidePopover)
    .click(decideState);
}

$(document).scroll(function(){
    $(".ni-tooltip").blur();
});

