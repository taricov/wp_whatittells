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



    //=====================================================================
    //=====================================================================
    //========================= Animated Words ============================
    //=====================================================================
    //=====================================================================


    const prefix = 'It tells ';
    const skills = ['data differently', 'in stories', 'how data feel', '..'].map(s => `${s}.`);
    const delay = 20;
    const step = 1;
    const tail = 5;
    const timeout = 20;
    const p = $('.animated__words');
    // document.body.appendChild(p);
    const colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta'];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomChar() {
        return String.fromCharCode(Math.random() * (127 - 33) + 33);
    }

    function getRandomColoredString(n) {
        const fragment = $("<span/>");

        for (let i = 0; i < n; i++) {
            const char = $("<span/>");
            // char.text(getRandomChar());
            // char.css({ background: "#1e5b4d", color: "#fff" })

            fragment.append(char);
        }

        return fragment;
    }

    const $k = {
        text: '',
        prefixP: -tail,
        skillI: 0,
        skillP: 0,
        direction: 'forward',
        delay,
        step
    };

    function render() {
        const skill = skills[$k.skillI];

        if ($k.step) {
            $k.step--;
        } else {
            $k.step = step;

            if ($k.prefixP < prefix.length) {
                if ($k.prefixP >= 0) {
                    $k.text += prefix[$k.prefixP];
                }

                $k.prefixP++;
            } else {
                if ($k.direction === 'forward') {
                    if ($k.skillP < skill.length) {
                        $k.text += skill[$k.skillP];
                        $k.skillP++;
                    } else {
                        if ($k.delay) {
                            $k.delay--;
                        } else {
                            $k.direction = 'backward';
                            $k.delay = delay;
                        }
                    }
                } else {
                    if ($k.skillP > 0) {
                        $k.text = $k.text.slice(0, -1);
                        $k.skillP--;
                    } else {
                        $k.skillI = ($k.skillI + 1) % skills.length;
                        $k.direction = 'forward';
                    }
                }
            }
        }

        p.text($k.text)
        p.append(getRandomColoredString($k.prefixP < prefix.length ? Math.min(tail, tail + $k.prefixP) : Math.min(tail, skill.length - $k.skillP)));
        setTimeout(render, timeout);
    }

    setTimeout(render, 500);


})