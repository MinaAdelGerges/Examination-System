// JavaScript source code
$(document).ready(function () {

    $(".task").slideUp();

    $(".name").click(function () {
        $(".task").slideUp();
        $(this).next().slideDown();

    })
})
