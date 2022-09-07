$(document).ready(() => {

    $(".timeline__container_list_item").map((idx, eachOne) => {
        console.log(eachOne)
        if ($(eachOne).data("status") === "needed") $(eachOne).addClass("needed_status")

    })


    $(".timeline__container_list_item").click(function () {
        // $this = $(this)
        $this = $(this).find($(".timeline__container_list_item_details"))

        if ($this.css("display") != "none") $this.slideUp(500); else $this.slideDown(500)

    })

})