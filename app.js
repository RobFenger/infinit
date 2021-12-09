$(document).ready(() => {

    //hover over the works
    $('.flexImage').on('mouseenter', event => {
        $(event.currentTarget).children(".text").fadeIn();
    })
    $('.flexImage').on('mouseleave', event => {
        $(event.currentTarget).children(".text").fadeOut();
    })

    //invert colors when hovering over class="invert" works
    $('.invert').on('mouseenter', () => {
        $('body').css({
            backgroundColor: 'black',
            color: 'white'
        });
        $('.topMenu').css({borderBottom: '1px solid white'});
        $('.menuu').children().css({color: 'white'});
        $('.simulations').children().css({color: 'white'});
        $('.transcriptions').children().css({color: 'white'});
        $('.collaborations').children().css({color: 'white'});
    })
    $('.invert').on('mouseleave', () => {
        $('body').css({
            backgroundColor: 'white',
            color: 'black'
        });
        $('.topMenu').css({borderBottom: '1px solid black'});
        $('.menuu').children().css({color: 'black'});
        $('.simulations').children().css({color: 'black'});
        $('.transcriptions').children().css({color: 'black'});
        $('.collaborations').children().css({color: 'black'});

        //to get the hover effect back
        const hoverEffect = () => {

        $('.menuu').children().not('.no-hover').on('mouseenter', event => {
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.menuu').children().on('mouseleave', event => {
            $(event.currentTarget).css('color', 'black');
        })
        $('.simulations').children().on('mouseenter', event => {
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.simulations').children().on('mouseleave', event => {
            $(event.currentTarget).css('color', 'black');
        })
        $('.transcriptions').children().on('mouseenter', event => {
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.transcriptions').children().on('mouseleave', event => {
            $(event.currentTarget).css('color', 'black');
        })
        $('.collaborations').children().on('mouseenter', event => {
            $(event.currentTarget).css('color', 'lightgrey');
        })
        $('.collaborations').children().on('mouseleave', event => {
            $(event.currentTarget).css('color', 'black');
        })
        }
        hoverEffect();
    })

    //hover over the menu
    $('.menu-Contra').on('mouseenter', () => {
        $('.Contra').fadeIn();
    })
    $('.menu-Contra').on('mouseleave', () => {
        $('.Contra').fadeOut();
    })
    $('.menu-time1').on('mouseenter', () => {
        $('.time1').fadeIn();
    })
    $('.menu-time1').on('mouseleave', () => {
        $('.time1').fadeOut();
    })
    $('.menu-time2').on('mouseenter', () => {
        $('.time2').fadeIn();
    })
    $('.menu-time2').on('mouseleave', () => {
        $('.time2').fadeOut();
    })
    $('.menu-resonance').on('mouseenter', () => {
        $('.resonance').fadeIn();

        //to invert colors
        $('body').css({
            backgroundColor: '#000000',
            color: '#FFFFFF'
        }, 1000);
        $('.topMenu').css({borderBottom: '1px solid #FFFFFF'}, 400);
        $('.menuu').children().css({color: '#FFFFFF'}, 400);
        $('.simulations').children().css({color: '#FFFFFF'}, 400);
        $('.transcriptions').children().css({color: '#FFFFFF'}, 400);
    })
    $('.menu-resonance').on('mouseleave', () => {
        $('.resonance').fadeOut();

        //to invert colors back
        $('body').css({
            backgroundColor: 'white',
            color: 'black'
        });
        $('.topMenu').css({borderBottom: '1px solid black'});
        $('.menuu').children().css({color: 'black'});
        $('.simulations').children().css({color: 'black'});
        $('.transcriptions').children().css({color: 'black'});

        //to get the hover effect back
        hoverEffect();
    })
    $('.menu-castle').on('mouseenter', () => {
        $('.castle').fadeIn();

        //to invert colors
        $('body').css({
            backgroundColor: 'black',
            color: 'white'
        });
        $('.topMenu').css({borderBottom: '1px solid white'});
        $('.menuu').children().css({color: 'white'});
        $('.simulations').children().css({color: 'white'});
        $('.transcriptions').children().css({color: 'white'});
    })
    $('.menu-castle').on('mouseleave', () => {
        $('.castle').fadeOut();

        //to invert colors
        $('body').css({
            backgroundColor: 'white',
            color: 'black'
        });
        $('.topMenu').css({borderBottom: '1px solid black'});
        $('.menuu').children().css({color: 'black'});
        $('.simulations').children().css({color: 'black'});
        $('.transcriptions').children().css({color: 'black'});

        //to get the hover effect back
        hoverEffect();
    })
    $('.menu-governors').on('mouseenter', () => {
        $('.governors').fadeIn();

         //to invert colors
         $('body').css({
            backgroundColor: 'black',
            color: 'white'
        });
        $('.topMenu').css({borderBottom: '1px solid white'});
        $('.menuu').children().css({color: 'white'});
        $('.simulations').children().css({color: 'white'});
        $('.transcriptions').children().css({color: 'white'});
    })
    $('.menu-governors').on('mouseleave', () => {
        $('.governors').fadeOut();

        //to invert colors
        $('body').css({
            backgroundColor: 'white',
            color: 'black'
        });
        $('.topMenu').css({borderBottom: '1px solid black'});
        $('.menuu').children().css({color: 'black'});
        $('.simulations').children().css({color: 'black'});
        $('.transcriptions').children().css({color: 'black'});

        //to get the hover effect back
        hoverEffect();
    })
    $('.menu-membrane').on('mouseenter', () => {
        $('.membrane').fadeIn();
    })
    $('.menu-membrane').on('mouseleave', () => {
        $('.membrane').fadeOut();
    })
    $('.menu-noema').on('mouseenter', () => {
        $('.noema').fadeIn();
    })
    $('.menu-noema').on('mouseleave', () => {
        $('.noema').fadeOut();
    })
    $('.menu-panoptic').on('mouseenter', () => {
        $('.panoptic').fadeIn();
    })
    $('.menu-panoptic').on('mouseleave', () => {
        $('.panoptic').fadeOut();
    })
    $('.menu-open').on('mouseenter', () => {
        $('.open').fadeIn();
    })
    $('.menu-open').on('mouseleave', () => {
        $('.open').fadeOut();
    })
    $('.menu-cube').on('mouseenter', () => {
        $('.cube').fadeIn();
    })
    $('.menu-cube').on('mouseleave', () => {
        $('.cube').fadeOut();
    })
    $('.menu-glimpulse').on('mouseenter', () => {
        $('.glimpulse').fadeIn();
    })
    $('.menu-glimpulse').on('mouseleave', () => {
        $('.glimpulse').fadeOut();
    })
    $('.menu-impossible').on('mouseenter', () => {
        $('.impossible').fadeIn();
    })
    $('.menu-impossible').on('mouseleave', () => {
        $('.impossible').fadeOut();
    })
    $('.menu-passage').on('mouseenter', () => {
        $('.passage').fadeIn();
    })
    $('.menu-passage').on('mouseleave', () => {
        $('.passage').fadeOut();
    })
    $('.menu-fragile').on('mouseenter', () => {
        $('.fragile').fadeIn();
    })
    $('.menu-fragile').on('mouseleave', () => {
        $('.fragile').fadeOut();
    })
    $('.menu-jaunu').on('mouseenter', () => {
        $('.jaunu').fadeIn();
    })
    $('.menu-jaunu').on('mouseleave', () => {
        $('.jaunu').fadeOut();
    })
    $('.menu-sensory').on('mouseenter', () => {
        $('.sensory').fadeIn();
    })
    $('.menu-sensory').on('mouseleave', () => {
        $('.sensory').fadeOut();
    })
    $('.menu-disruptive').on('mouseenter', () => {
        $('.disruptive').fadeIn();
    })
    $('.menu-disruptive').on('mouseleave', () => {
        $('.disruptive').fadeOut();
    })
    $('.menu-interference').on('mouseenter', () => {
        $('.interference').fadeIn();
    })
    $('.menu-interference').on('mouseleave', () => {
        $('.interference').fadeOut();
    })

    //to open up the work that is clicked
    $(".flexImage").on('click', event => {
        window.location = $(event.currentTarget).find("a").attr("href");
    })

    //start with open simulations
    $('.simulations').slideDown('slow');
    $('.transcriptions').slideDown('slow');
    $('.open-simulations').find('.icon').addClass('rotate');
    $('.open-transcriptions').find('.icon').addClass('rotate');

    //make cursor pointer to note that you can open the menu
    $('.open-simulations').css('cursor', 'pointer');
    $('.open-collaborations').css('cursor', 'pointer');

    //open the menu on left-side and scroll down to the section
    $('.open-simulations').on('click', () => {
        $('html, body').animate({
            scrollTop: '0px'
        },1000);
        $('.simulations').slideDown('slow');
        $('.collaborations').slideUp('slow');
        $('.open-simulations').find('.icon').addClass('rotate');
        $('.open-collaborations').find('.icon').removeClass('rotate');
    })
    $('.open-collaborations').on('click', () => {
        $('html, body').animate({
            scrollTop: ($('.entry-two').offset().top)
        },1000);
        $('.collaborations').slideDown('slow');
        $('.simulations').slideUp('slow');
        $('.open-collaborations').find('.icon').addClass('rotate');
        $('.open-simulations').find('.icon').removeClass('rotate');
    })
    // $('.open-transcriptions').on('click', () => {
    //     $('.transcriptions').slideToggle('slow');
    //     $('.simulations').slideUp('slow');
    //     $('.collaborations').slideUp('slow');
    //     $('.open-transcriptions').find('.icon').toggleClass('rotate');
    //     $('.open-simulations').find('.icon').removeClass('rotate');
    //     $('.open-collaborations').find('.icon').removeClass('rotate');
    // })

    //open the corresponding menu when scrolling down or up
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.collaborations').slideDown('slow');
                $('.simulations').slideUp('slow');
                $('.open-collaborations').find('.icon').addClass('rotate');
                $('.open-simulations').find('.icon').removeClass('rotate');
            }
        })
    })

    observer.observe($('.entry-two')[0]);

    const observerOne = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.simulations').slideDown('slow');
                $('.collaborations').slideUp('slow');
                $('.open-simulations').find('.icon').addClass('rotate');
                $('.open-collaborations').find('.icon').removeClass('rotate');
            }
        })
    })

    observerOne.observe($('.entry-one')[0]);

    //mobile-device menu control
    const x = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)");
    const y = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)");
    const z = window.matchMedia("(max-device-width: 812px)");
    const f = window.matchMedia("(max-device-height: 767px)");
    const a = window.matchMedia("(orientation: landscape)");

    const b = window.matchMedia("(max-device-width: 1366px)");
    const c = window.matchMedia("(min-device-width: 768px)");
    const d = window.matchMedia("(min-device-height: 768px)");

    if ((x.matches || y.matches) && z.matches && a.matches && f.matches) {
        $('.transcriptions').hide();

        $('.open-transcriptions').on('click', () => {
        $('.transcriptions').slideToggle('slow');
        $('.simulations').slideUp('slow');
        $('.collaborations').slideUp('slow');
        $('.open-transcriptions').find('.icon').toggleClass('rotate');
        $('.open-simulations').find('.icon').removeClass('rotate');
        $('.open-collaborations').find('.icon').removeClass('rotate');
    })
    $('.open-simulations').on('click', () => {
        $('.transcriptions').slideUp('slow');
        $('.open-transcriptions').find('.icon').removeClass('rotate');
    })
    } else if ((x.matches || y.matches) && b.matches && c.matches && d.matches) {
        //ipad menu control

        $('#workmenu').slideDown('slow');
        
        $('.simulations').slideDown('slow');
        $('.transcriptions').slideDown('slow');
        $('.collaborations').slideDown('slow');
 
 
        $('.open-simulations').on('click', () => {
            $('.simulations').slideToggle('slow');
            $('.open-simulations').find('.icon').toggleClass('rotate');
        })
        $('.open-transcriptions').on('click', () => {
            $('.transcriptions').slideToggle('slow');
            $('.open-transcriptions').find('.icon').toggleClass('rotate');
        })
        $('.open-collaborations').on('click', () => {
            $('.collaborations').slideToggle('slow');
            $('.open-collaborations').find('.icon').toggleClass('rotate');
        })
    }

    

})



