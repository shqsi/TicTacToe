
$(document).ready(function () {
    [$('#header-winner-x'), $('#header-winner-o'), $('.grid'), $('#about-ttt-text')].forEach(header => {
        header.hide();
    });

    $('#header-welcome').show(1000);
    $('.grid').show(1000);

    $('#about-ttt-dropdown-text-inner').hover(
        // mouse enter
        function(){
            $('#about-ttt-text').fadeIn('slow');
        },

        // mouse leave
        function(){
            $('#about-ttt-text').fadeOut('slow');
        }
    )
})
