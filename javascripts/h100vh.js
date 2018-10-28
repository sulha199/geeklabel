(function ($) {
    // Use jQuery with the shortcut:
    function h100vh_init() {
        $(".h-100vh > .inner-container, .h-100vh > .view-container").append('<div class="scroller col-sm-12"><a href="#"><span class="glyphicon glyphicon-menu-down"></span></a></div>');
        $("div.scroller").scrollTop(300);
        // add action scroll to next block action
        $("div.scroller a").click(function (event) {
            event.preventDefault();
            var blockParent = $(this).parents('.block');
            var nextBlockFound = false;
            $('.block').each(function(i, block){
                if (nextBlockFound && 
                        $(block).attr('class').indexOf("block-system") === -1){
                    $('html, body').animate({scrollTop: $(block).offset().top}, 500);
                    nextBlockFound = false;
                    return;
                }
                if ($(block).attr('id') === $(blockParent).attr('id') && $(block).css('display') !== 'none')
                    nextBlockFound = true;
            });           
        });
        h100vh_resize();
    }

    function h100vh_resize() {
        $(".h-100vh").each(function () {
            $(this).removeClass('h-100vh-relative');
            var blockOuterHeight =  $(this).find('.view-content').first().outerHeight() + 2 * $(this).find('.scroller').first().outerHeight();
            
            if ( blockOuterHeight > $(window).height())
                $(this).addClass('h-100vh-relative');
            
        });
    }

    $(document).ready(function ($) {
        h100vh_init();
    });
    $(window).resize(function () {
        h100vh_resize();
    });    
}(jQuery));