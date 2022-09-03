$(document).ready(() => {




    var scrollToTopIcon = $(".scrollToTopIcon");
    console.log(scrollToTopIcon)
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            scrollToTopIcon.css("opacity", "1");
        } else {
            scrollToTopIcon.css("opacity", "0");
        }
    });

    scrollToTopIcon.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });






    $("label").click(function () {

        var filterVal = $(this).attr('data-filter');

        $('.projects__parent_container').isotope({
            filter: filterVal
        });
    });

})