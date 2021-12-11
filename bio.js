//to get the swiping functions
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(s!==t.target)return;var e=parseInt(l(s,"data-swipe-threshold","20"),10),o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,d="",p=t.changedTouches||t.touches||[];Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");if(""!==d){var b={dir:d.replace(/swiped-/,""),touchType:(p[0]||{}).touchType||"direct",xStart:parseInt(n,10),xEnd:parseInt((p[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,s=null;function l(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);


$(document).ready(() => {
     //mobile-device menu control
     const x = window.matchMedia("(-webkit-min-device-pixel-ratio: 3)");
     const y = window.matchMedia("(-webkit-min-device-pixel-ratio: 2)");
     const z = window.matchMedia("(max-device-width: 820px)");
     const e = window.matchMedia("(max-device-width: 414px)");
     const a = window.matchMedia("(orientation: landscape)");
     // const portrait = window.matchMedia("(orientation: portrait)");
     const f = window.matchMedia("(max-device-height: 414px)");
     //ipad menu control--------------------------------in development
     const b = window.matchMedia("(max-device-width: 1366px)");
     const c = window.matchMedia("(min-device-width: 768px)");
     const d = window.matchMedia("(min-device-height: 768px)");
 
     
 
     if ((x.matches || y.matches) && e.matches) {
         //hide menu when scrolling down and show it when moving up
    let oldValue = 0;
    let newValue = 0;
    window.addEventListener('scroll', (e) => {
    newValue = window.pageYOffset;
    if ((oldValue + 50) < newValue) {
        $('.topMenu').slideUp('slow');
        $('#workmenu').animate({'margin-top': '0px'}, 200);
    } else if ((oldValue - 50) > newValue) {
        $('.topMenu').slideDown('slow');
        $('#workmenu').animate({'margin-top': '225px'}, 200);
    }
    oldValue = newValue;
    });

    } else if ((x.matches || y.matches) && z.matches && f.matches) {
          //hide menu when scrolling down and show it when moving up
    let oldValue = 0;
    let newValue = 0;
    window.addEventListener('scroll', (e) => {
    newValue = window.pageYOffset;
    if ((oldValue + 50) < newValue) {
        $('.topMenu').slideUp('slow');
        $('#workmenu').animate({'margin-top': '0px'}, 200);
    } else if ((oldValue - 50) > newValue) {
        $('.topMenu').slideDown('slow');
        $('#workmenu').animate({'margin-top': '225px'}, 200);
    }
    oldValue = newValue;
    });
    
    }
}) 
