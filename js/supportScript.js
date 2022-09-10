$(document).ready(() => {

    // ========= Helper Function ===========

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

    $(".timeline__container_list_item").map((idx, eachOne) => {
        // console.log(eachOne)
        if ($(eachOne).data("status") === "needed") $(eachOne).addClass("needed_status")

    })


    $(".timeline__container_list_item").click(function (e) {
        // $this = $(this)
        $this = $(this).find($(".timeline__container_list_item_details"))

        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLButtonElement) {
            console.log("no")
        } else {
            // if($this.hasClass("present"))

            if ($this.css("display") != "none") {
                $this.removeClass("present__details")
                $this.slideUp(500)

            } else {
                $this.slideDown(500)

            }
        }

    })


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