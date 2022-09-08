$(document).ready(() => {

    var scrollToTopIcon = $(".scrollToTopIcon");

    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            scrollToTopIcon.css({
                transform: "translateY(0%)",
                opacity: 1
            });
        } else {
            scrollToTopIcon.css({
                transform: "translateY(200%)",
                opacity: 0
            });
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



    // ==================== Search Bar =======================


    function debounce(fn, threshold) {
        var timeout;
        return function debounced() {
            if (timeout) {
                clearTimeout(timeout);
            }
            function delayed() {
                fn();
                timeout = null;
            }
            timeout = setTimeout(delayed, threshold || 100);
        }
    }

    let query, filterVal;

    query = new RegExp($('.search__container_bar').val(), 'gi');
    var searchBar = $('.search__container_bar').keyup(debounce(function () {
        $('.projects__parent_container').isotope({
            filter: function () {
                $this = $(this)
                let searchResult = query ? $this.text().match(query) : true;
                console.log($this.text(), searchResult)
                let projResult = filterVal ? $this.is(filterVal) : true;
                return searchResult && projResult;
            }
        });
    }))



    $(document).on("keydown", function (e) {
        if (e.code === 'F3' || ((e.ctrlKey || e.metaKey) && e.code === 'KeyJ')) {
            if (($(".search__container").css("top") == "152.797px")) $(".search__container").css({ top: "-20%" }); else
                $(".search__container").css({ top: "20%" });
            // $(".search__container_bar").focus(); 
            $(".search__container_bar").val("");
        }

    })
    $(document).click(function (e) {
        if (($(".search__container").css("top") == "152.797px") && !e.target.closest(".search__container")) $(".search__container").css({ top: "-20%" });
        $(".search__container_bar").val("");
    })
    // $(".search__container").on('keyup', function (e) {
    //     if (e.key === "Enter" || e.keyCode === 13) {
    //         console.log("searched!")
    //     }
    // });
    $(document).on('keyup', function (e) {
        if (($(".search__container").css("top") == "152.797px") && e.key === "Escape") {
            $(".search__container").css({ top: "-20%" });
            $(".search__container_bar").val("");
        }
    });


})