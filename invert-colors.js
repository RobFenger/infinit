$(document).ready(() => {
    $('.topMenu').css('border-bottom', '1px solid white');
    $('.topMenu').css('background-color', 'black');
    $('h1').css('color', 'white');
    $('body').css({backgroundColor: 'black', color: 'white'});
    $('.menuu').children().css('color', 'white');
    $('.simulations').children().css('color', 'white');
    $('.transcriptions').children().css('color', 'white');
    $('.collaborations').children().css('color', 'white');
    $('.open-simulations').css('color', 'white');
    $('.open-transcriptions').css('color', 'white');
    $('.open-collaborations').css('color', 'white');


    $('.menuu').children().not('#works').on('mouseenter', event => {      //.not('#works') if you don't want works to hover
        $(event.currentTarget).css('color', 'lightgrey');
    })
    $('.menuu').children().on('mouseleave', event => {
        $(event.currentTarget).css('color', 'white');
    })
    $('.simulations').children().not('b').on('mouseenter', event => {
        $(event.currentTarget).css('color', 'lightgrey');
    })
    $('.simulations').children().not('b').on('mouseleave', event => {
        $(event.currentTarget).css('color', 'white');
    })
    $('.transcriptions').children().on('mouseenter', event => {
        $(event.currentTarget).css('color', 'lightgrey');
    })
    $('.transcriptions').children().on('mouseleave', event => {
        $(event.currentTarget).css('color', 'white');
    })
    $('.collaborations').children().on('mouseenter', event => {
        $(event.currentTarget).css('color', 'lightgrey');
    })
    $('.collaborations').children().on('mouseleave', event => {
        $(event.currentTarget).css('color', 'white');
    })
})