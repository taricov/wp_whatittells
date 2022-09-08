$(document).ready(() => {

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


})