
$(document).ready(function () {
    [$('#header-winner-x'), $('#header-winner-o'), $('.grid')].forEach(header => {
        header.hide();
    });

    $('#header-welcome').show(1000);
    $('.grid').show(1000);


})
