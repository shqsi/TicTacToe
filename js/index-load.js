
$(document).ready(function () {
    // initialize n stuff
    [$('#header-winner-x'), $('#header-winner-o'), $('.grid'), $('#about-ttt-text')].forEach(header => {
        header.hide();
    });

    $('.grid').show(1000, function () {
        $('#header-welcome').animate({ marginLeft: '100px' }, 1000);
    });

    $('#about-ttt-dropdown-text-inner').hover(
        // mouse enter
        function () {
            $('#about-ttt-text').slideDown('slow');
        },

        // mouse leave
        function () {
            $('#about-ttt-text').slideUp('slow');
        }
    )

    game();
})
