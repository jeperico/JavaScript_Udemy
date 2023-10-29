function loadPage() {

    $('.textInput').removeClass('active');

    $('.textInput').on('focus', function () {
        $('.textInput').removeClass('active');
        $(this).addClass('active');
    })

    $('.textInput').on('blur', function () {
        $('.textInput').removeClass('active');
    });
}

loadPage();