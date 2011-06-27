$(function() {
    $('#hcard-client-name .email').defuscate();
    $('input[placeholder], textarea[placeholder]').placeholder();
    $('.details:not(html)').html5accordion('.summary');
    $('#messages').messages();
});
