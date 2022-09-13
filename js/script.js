
$(document).ready(() => {

    // ================== Start Helper fn() =========

    function assignVal(selectors, newVals, isTxt = true, fstIndex = 0) {
        fstIndex = fstIndex == 0 ? 0 : idx
        if (isTxt) {
            $.each($(selectors), function (idx, val) {
                $(val).text(newVals[fstIndex]);
                console.log(val, fstIndex)
            });
        } else {
            $.each($(selectors), function (idx, val) {
                $(val).val(newVals[fstIndex]);
                console.log(val, fstIndex)
            });
        }
    }

    // function animateText() {
    //     $('#container').animate({ 'opacity': 0 }, 1000, function () {
    //         $(this).text('new text');
    //     }).animate({ 'opacity': 1 }, 1000);
    // }


    // ================== End Helper fn() =========

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

    //============= Search Bar + Tabs Filters ====
    filters()
    function filters() {

        var qsRegex;
        var buttonFilter;
        var $grid = $('.projects__parent_container').isotope({
            itemSelector: '.projects__parent_container_wrapper',
            layoutMode: 'fitRows',
            filter: function () {
                var $this = $(this);
                var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
                var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
                return searchResult && buttonResult;
            }
        });

        $('.tabs').on('click', 'label', function () {
            buttonFilter = $(this).attr('data-filter');
            $grid.isotope();
        });

        // use value of search field to filter
        var $quicksearch = $('.search__container_bar').keyup(debounce(function () {
            qsRegex = new RegExp($quicksearch.val(), 'gi');
            if ($(document).scrollTop() != 923) $(document).scrollTop(930)
            $grid.isotope();
        }));


        // change is-checked class on buttons
        $('.tab').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'label', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });


        // debounce so filtering doesn't happen every millisecond
        function debounce(fn, threshold) {
            var timeout;
            threshold = threshold || 100;
            return function debounced() {
                clearTimeout(timeout);
                var args = arguments;
                var _this = this;
                function delayed() {
                    fn.apply(_this, args);
                }
                timeout = setTimeout(delayed, threshold);
            };
        }
    }
    //======== Search Bar Handling ==========
    revealConcealSearchBar()
    function revealConcealSearchBar() {

        $searchContainer = $(".search__container")
        $searchBar = $(".search__container_bar")
        $(document).on("keydown", function (e) {
            if (e.code === 'F3' || ((e.ctrlKey || e.metaKey) && e.code === 'KeyJ')) {
                if (($searchContainer.css("top") == "152.797px")) {
                    $searchContainer.css({ top: "-20%" });
                } else if ($searchBar.text().length > 0) {
                    $searchContainer.css({ top: "20%" });
                    $(".search__container_bar").focus();
                } else {
                    $searchContainer.css({ top: "20%" });
                }
            }

        })
        $(document).click(function (e) {
            if (($searchContainer.css("top") == "152.797px") && !e.target.closest(".search__container")) {
                if ($searchContainer.css("top") == "152.797px") {
                    $searchContainer.css({ top: "20%" });

                }
                $searchContainer.css({ top: "-20%" });
            }
        })

        $(document).on('keyup', function (e) {
            if (($searchContainer.css("top") == "152.797px") && e.key === "Escape") {
                $searchContainer.css({ top: "-20%" });
                $searchBar.val("");
            }
        });

    }
    searchGuide()
    function searchGuide() {
        $(".summon__search_corner").click(function () {
            $this = $(this)
            if ($this.attr("data-status") == "1") {
                $this.attr("data-status", "0")
                $this.parent().animate({
                    width: "17px",
                    height: "17px",
                    borderRadius: "50%"
                })
            } else if ($this.attr("data-status") == "0") {
                $this.attr("data-status", "1")
                $this.parent().css({
                    width: "fit-content",
                    height: "fit-content",
                    borderRadius: "8px"
                })
                console.log("cloc")

            }
        })
    }


    //========= Animated Words =======
    wordAnimation()
    function wordAnimation() {

        const prefix = 'It tells ';
        const skills = ['data differently', 'and unfolds insights ', 'data stories in context', '..'].map(s => `${s}.`);
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
    }
    //========= Send Form =======

    emailChecker()
    function emailChecker() {
        $(".form__feedback_email").change(function () {
            let $this = $(this)
            let pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (!pattern.test($this.val())) {
                alert('Please, Provide a Valid Email Address!');
                $this.focus();
                $this.css({ border: "2px solid red" })

                return false;
            } else {
                $this.css
                    ({ border: "none" })
                return true
            }
        })
    }
    function sendEmail() {
        assignVal([".form__feedback_submit"], ["Send ..."], false)
        emailjs.sendForm('suggestion_form', 'suggestion_template', ".form__feedback", "bp-M-9NPTMdXj0m9w").then(function (response) {

            assignVal([".form__feedback_submit"], ["Send"], false)
            assignVal([".form__feedback_textarea"], [""], false)
            assignVal([".form__feedback_res"], ["Sent Successfully, Thank You!"])
        }, function (error) {
            assignVal([".form__feedback_res"], ["Something Went Wrong, Try Again!"])

        });
    }
    validateForm()
    function validateForm() {
        $(".form__feedback_submit").click(e => {
            e.preventDefault();
            if (emailChecker()) {
                sendEmail()
            } else {

                $(".form__feedback_email").focus()
                assignVal([".form__feedback_res"], ["Please, Provide a Valid Email Address!"])

            }
        })
    }
})
