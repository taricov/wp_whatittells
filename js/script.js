$(document).ready(() => {

    $("label").click(function () {

        var filterVal = $(this).attr('data-filter');

        $('.projects__parent_container').isotope({
            filter: filterVal
        });
    });

})