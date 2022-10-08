$(document).ready(function () {

    var salaryAmount;
    $("#pop_up").fadeIn(1000);



    $().click(() => {
        $("#pop_up").fadeOut();
    });
    $(".cue, .muted").click((e) => {
        $("#pop_up").fadeOut();
        $("#page_1")
            .delay(3000)
            .css('display', 'flex')
            .hide()
            .fadeIn(1000);

        if ($(e.target).hasClass("cue") || $(e.target).hasClass("cc")) {

            console.log("ok")
            const playAudio = (audio) => {
                return new Promise(res => {
                    audio.play()
                    audio.loop = true;
                    audio.onended = res
                })
            }

            const playIt = async () => {
                const audio = $("#joep")[0];
                return await playAudio(audio)
            }

            playIt()
        }
    });

    $('#book').click(function () {

        $('#page_1').fadeOut(2000);
        $('body').css({ 'background': 'black', 'transition': '2s 2s linear' })
            .queue(function (next) {
            });

        $('.pre_page_2').delay(4000).fadeIn(2000);
        $('.pre_page_2').delay(500).fadeOut(2000);
        // $('#page_2').delay(5000).fadeIn(2000);
        $('#page_2').css({ 'display': 'flex' });
        $('#pre_img_page_2').css({ 'display': 'flex' });
        $('#pre_img_page_2 img').css({ 'visibility': 'hidden' });

        $("#pre_img_page_2 img").eq(0).delay(10000)
            .queue(function (next) {
                $(this).css({ 'visibility': 'visible' });
            });
        $("#pre_img_page_2 img").eq(1).delay(11000)
            .queue(function (next) {
                $(this).css({ 'visibility': 'visible' });
            });
        $("#pre_img_page_2 img").eq(2).delay(12000)
            .queue(function (next) {
                $(this).css({ 'visibility': 'visible' });
            });
        $("#pre_img_page_2 img").eq(3).delay(13000)
            .queue(function (next) {
                $(this).css({ 'visibility': 'visible' });
            });

        $("#pre_img_page_2")
            .delay(14000)
            .queue(function () {
                $(this)
                    .removeAttr('style')
                    .css({ 'display': 'none' })

                setTimeout(slider(), 15000);
            });


        $('#page_2')
            .delay(19000)
            .queue(function () {
                $(this)
                    .css({ 'display': 'none' });
            });

        $('#page_2_')
            .delay(20000)
            .css("display", "flex")
            .hide()
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000);

        $('#page_5')
            .delay(23000)
            .css('display', 'flex')
            .hide()
            .fadeIn();

    });

    $('#ready').click(function () {
        $('#page_5')
            .fadeOut(200);

        $('#page_6')
            .delay(1000)
            .css('display', 'flex')
            .hide()
            .fadeIn(2000);

        $(".input").keyup(function (key) {
            salaryAmount = $(this).val() / 28.20
            // console.log(key.which)
            if (key.which == 13 && salaryAmount <= 10) {
                $("#page_6")
                    .fadeOut();
                $("#page_7")
                    .delay(1000)
                    .css('display', 'flex')
                    .hide()
                    .empty()
                    .append(`<div>Insufficient Amount <br> Your 1912's equivalent salary is  \$${salaryAmount.toFixed(2)}<br> You can not sail for under $10</div>`)
                    .fadeIn(2000)
                $("#page_7")
                    .delay(2000)
                    .fadeOut();
                $('#page_6')
                    .delay(5000)
                    .css('display', 'flex')
                    .hide()
                    .fadeIn(2000)
            }
            else if (key.which == 13 && $(this).val() > 10) {
                $("#page_6")
                    .fadeOut(1000);
                $("#page_7")
                    .delay(1000)
                    .css('display', 'flex')
                    .hide()
                    .empty()
                    .append(`<div id="once">Your input is \$${$(this).val()} <br> Your 1912's equivalent salary is \$${salaryAmount.toFixed(2)}</div>`)
                    .fadeIn(2000)
                $("#page_7")
                    .delay(2000)
                    .fadeOut(2000);
                $("#page_3")
                    .delay(8000)
                    .css('display', 'flex')
                    .hide()
                    .fadeIn(1000);
                $("#page_3")
                    .delay(4000)
                    .fadeOut(1000);
                $("#page_8")
                    .delay(15000)
                    .css('display', 'flex')
                    .hide()
                    .fadeIn(2000);
                $("#page_8")
                    .delay(3000)
                    .fadeOut(2000);
                $("#page_8_")
                    .delay(25000)
                    .css('display', 'flex')
                    .hide()
                    .fadeIn(1000);
                $("#page_8_")
                    .delay(10000)
                    .fadeOut(2000);

                $("#page_8__")
                    .delay(39000)
                    .css('display', 'flex')
                    .hide()
                    .fadeIn(1000);
                $("#page_8__")
                    .delay(6000)
                    .fadeOut(2000);

                $("#page__9")
                    .delay(49000)
                    .css('display', 'flex')
                    .hide()
                    .fadeIn(1000);
                $("#page__9")
                    .delay(5000)
                    .fadeOut(2000);

                $("#page_9")
                    .delay(58000)
                    .css('display', 'flex')
                    .hide()
                    .fadeIn(2000);
            }
        });
        $("#page_9 span").click(function () {
            $("#page_9")
                .fadeOut(2000);
            $("#page_10")
                .delay(3000)
                .css('display', 'flex')
                .hide()
                .fadeIn(1000);
            $("#page_10")
                .delay(5000)
                .fadeOut(1000);

            $("#page_10_")
                .delay(11000)
                .css('display', 'flex')
                .hide()
                .fadeIn(1000);
            $("#page_10_")
                .delay(8000)
                .fadeOut(2000);

            setTimeout(() => {
                var page_11 = $('div[id^="page_11"]')
                page_11.each((_id) => {
                    delay = _id * 5000
                    x = page_11[_id].id
                    $("#" + `${x}`)
                        .delay(delay)
                        .css('display', 'flex')
                        .hide()
                        .fadeIn(1000);
                    $("#" + `${x}`)
                        .delay(3000)
                        .fadeOut(1000);


                });
            }, 22000)


            $("#page_12")
                .delay(54000)
                .css('display', 'flex')
                .hide()
                .fadeIn(2000);
            $("#page_12")
                .delay(7000)
                .fadeOut(2000);
            $("#page_13")
                .delay(65000)
                .css('display', 'flex')
                .hide()
                .fadeIn(2000);

        });
        $(".reload").click(() => {
            $("#page_13")
                .fadeOut(2000)
                .delay(5000)

            location.reload()
        })

    });

    // ================== Calcs ====================

    var classServivalRate = { 1: .63, 2: .47, 3: .24 }
    var classMax = { 1: 300, 2: 80, 3: 69 }

    $(".dist1, .dist2, .dist3").click((e) => {
        _dist = $(e.target).data("dist")

        // salaryAmount = Math.random() * 10000
        salaryAmount = salaryAmount * .8
        // console.log(`salaryAmount : ${salaryAmount}`)

        _dist == 1 ? salaryAmount = salaryAmount - (salaryAmount * .3) : _dist == 2 ? salaryAmount = salaryAmount - (salaryAmount * .2) : salaryAmount = salaryAmount
        // console.log(`dist : ${_dist}`)

        var _class = salaryAmount > 80 ? 1 : salaryAmount > 50 ? 2 : 3
        // console.log(`class : ${_class}`)

        var salaryToMax = salaryAmount / classMax[_class];
        // console.log(`salaryToMax : ${(salaryToMax * 100).toFixed(2)}%`)

        var servivalRate;
        salaryToMax < 1 ? servivalRate = salaryToMax * classServivalRate[_class] : servivalRate = (Math.random * (.98 - .93) + .93)
        // console.log(`servivalRate : ${(servivalRate * 100).toFixed(2)}%`)

        var res = _class === 1
            ? `You got a chance! <br> You are 1st class, which has servival rate of ${classServivalRate[_class] * 100}%` : _class === 2
                ? `Not sure if you gonna make it! <br> You are 1st class, which has servival rate of ${classServivalRate[_class] * 100}%` : `Most likely, You die! <br> You are 3rd class, which has servival rate of ${classServivalRate[_class] * 100}%`
        // console.log(`res : ${res}`)

        $(".proba").html(`The result: <br><br>${res} <br> Your survival probability is ${(servivalRate * 100).toFixed(2)}%`)
    })


    // ======================== Rotate Chart 90deg for smaller screens ========================

    var innerWidth = window.matchMedia("(max-width: 550px)");
    // console.log(innerWidth)

    if (innerWidth.matches) {
        // $("#page_8_ , #page_10_")
        $("#myChart_1, #myChart_2")
            .attr("style", "transform:  rotate(90deg) scale(1.7) !important")
    }



    // =========================== Images Rolling ==================

    function slider() {
        var i = setInterval(function () {
            $('#page_2 > img:first')
                .next()
                .fadeIn(100)
                .end()
                .appendTo('#page_2');
        }, 50);

        setTimeout(function () {
            clearInterval(i);
        }, 5000);
    };

});


// $(".arrow_right").click(() => {

//     var e = $.Event("keypress");
//     $(".input").focus().trigger(e.which == 13);
// })
