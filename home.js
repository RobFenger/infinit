$(document).ready(() => {

let slideShowPics = [
    "installation_on.jpg",
    "P1011929.JPG",
    "MG_0964.jpg",
    "vlcsnap-2018-02-08-20h51m09s492.jpg",
    "castle.jpg",
    "distruptive_silencing_08.jpg"
]


const y = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)");
const z = window.matchMedia("(max-device-width: 667px)");
const a = window.matchMedia("(orientation: portrait)");
// const b = window.matchMedia("(orientation: landscape)");

if (y.matches && z.matches && a.matches) {
    slideShowPics = [
    "IMG_6517.jpg",
    "IMG_6518.jpg",
    "IMG_6516.jpg"
]
}


let picNumber = 0;

const slideShow = document.getElementById('slideshow');

const timer = () => {
    //fade out old picture
    let oldElement;
    if (picNumber == 0) {
        const lastPic = slideShowPics.length - 1;
        oldElement = lastPic.toString();
        $('#a' + oldElement).fadeOut(3000);
    } else {
        oldElement = (picNumber - 1).toString();
        $('#a' + oldElement).fadeOut(3000);
    }

    //to change backgroundcolor with random interval, 25% chance to change
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 26) {
        $('body').css({
            backgroundColor: 'black',
            color: 'white'
        });
        $('.topMenu').css({borderBottom: '1px solid white'});
        $('.topMenu').css({backgroundColor: 'black'});
        $('.menuu').children().css({color: 'white'});
        $('a').css('color', 'white');
        $('.menuu').children().not('.no-hover').on('mouseenter', event => {      //.not('#works') if you don't want works to hover
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.menuu').children().on('mouseleave', event => {
            $(event.currentTarget).css('color', 'white');
        })
        $('.social').find('a').on('mouseenter', event => {
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.social').find('a').on('mouseleave', event => {
            $(event.currentTarget).css('color', 'white');
        })
        
    } else if (randomNumber > 74) {
        $('body').css({
            backgroundColor: 'white',
            color: 'black'
        });
        $('.topMenu').css({borderBottom: '1px solid black'});
        $('.topMenu').css({backgroundColor: 'white'});
        $('.menuu').children().css({color: 'black'});
        $('a').css('color', 'black');
        $('.menuu').children().not('.no-hover').on('mouseenter', event => {      
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.menuu').children().on('mouseleave', event => {
            $(event.currentTarget).css('color', 'black');
        })
        $('.social').find('a').on('mouseenter', event => {
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.social').find('a').on('mouseleave', event => {
            $(event.currentTarget).css('color', 'black');
        })
    }
    
    const randomGlitch = Math.random();
    if (randomGlitch > 0.5) {
        //add glitch effect
        $('#glitch').addClass('glitch');
        $('#glitch').find('span').show();
    } else {
        //remove glitch effect
        $('#glitch').removeClass('glitch');
        $('#glitch').find('span').hide();
    }
    

    //create new picture
    let newElement = document.createElement("img");

    //append new picture into slideShow
    slideShow.appendChild(newElement);

    //give src and id attribute to new picture
    newElement.setAttribute("src", slideShowPics[picNumber]);
    const stringNumber = picNumber.toString();
    newElement.setAttribute("id", 'a'+ stringNumber);

    //give newElement position in the div
    $('#a' + stringNumber).css({
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%'
    })

    //fade in new picture
    $('#a' + stringNumber).fadeIn(3000);

    //call next picture
    if (picNumber == slideShowPics.length - 1) {
        picNumber = 0;
    } else {
        picNumber += 1;
    }

    //to create the loop
    myShow = setTimeout(timer, 6000);
}
timer();

//add ranodom glitch effects over the page
const array = [
    '.contact',
    '.social',
    '.menuu',
]

let element;

const glitcher = (elemToRemove) => {
    removeClass(elemToRemove);
    let randIndex = Math.floor(Math.random() * array.length - 1);
    element = array[randIndex];
    $(element).addClass('distort');
    newGlitcher = setTimeout(glitcher, 25000, element);
}

const removeClass = (elemToRemove) => {
    $(elemToRemove).removeClass('distort');
}

startGlitcher = setTimeout(glitcher, 25000);
    
})