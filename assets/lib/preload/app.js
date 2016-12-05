$(document).ready(function () {
    
    // Write your custom Jquery code.
    /*alert("zzz");*/
    


var controller = new ScrollMagic.Controller();
// var $animateThis = $('#animateThis');
var $firstname = $('.name-firstname');
var $firstname_span = $('.name-firstname>span');
var $surname = $(".surname-block");
var $me_saying = $('.me-saying');
var $say_noob = $(".say-noob");

var all_elements=[$firstname_span,$surname,$me_saying,$say_noob];

var tl = new TimelineMax();

/*$firstname.html($firstname.html().replace(/./g, "<span>$&</span>").replace(/\s/g, " "));*/

/* TweenLite.from($animateThis, 2, {x: '-=200px', autoAlpha: 0});
TweenLite.to($animateThis, 1.4, {left:100});*/
/*TweenLite.fromTo($animateThis, 2, {x: '-=200px'}, {x: 150});*/

/*tl.set($animateThis, {top: '0px', y: '0px'})*/

/*tl.fromTo($animateThis, 2, {x: '-=200px'}, {x: 150, ease:Power4.easeInOut});*/

/*  .to($animateThis, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut})
.to($animateThis, 0.7, {x: '0px', y: '-100%', ease:Back.easeInOut})
.to($animateThis, 0.8, {x: '200px', y: '-100%', ease:Back.easeInOut})
.to($animateThis, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone})
.to($animateThis, 2.5, {x: '0px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false)})*/

tl.set(all_elements, {autoAlpha: 0});
/*tl.set($firstname, {autoAlpha: 1});*/
tl.fromTo($surname, 3, {autoAlpha: 0}, { autoAlpha:0.8}, 1)
    .staggerFromTo($firstname.find("span"), 0.5, {autoAlpha: 0}, { autoAlpha: 1 }, 0.2)
    .fromTo($me_saying, 3.0, {autoAlpha: 0},{ autoAlpha: 1},6)
    .fromTo($say_noob, 2, {autoAlpha: 0},{ autoAlpha: 1},8)


    .to($say_noob, 2, {
        bezier: [
        {x:$say_noob.x + 10, y:$say_noob.y - 20, scaleX: 1,   scaleY: 1},
        {x:$say_noob.x + 20, y:$say_noob.y + 20, scaleX: 1.2, scaleY: .8},
        {x:$say_noob.x + 20, y:$say_noob.y + 30, scaleX: 1,   scaleY: 1}],
        orientToBezier: false,
        ease:Power3.easeOut,yoyo:true, repeat:-1, repeatDelay:0, yoyo:true
    });

/* .to($say_noob, 0.2, {css:{scaleX:0.5}, ease:Power3.easeOut})
.to($say_noob, 0.2, {css:{scaleX:1.5}, ease:Power3.easeOut})
.to($say_noob, 0.2, {css:{scaleX:1}, ease:Power3.easeOut});
*/
//var scene = new ScrollMagic.Scene({triggerElement: "#screen2"}).addIndicators({name: "1 (duration: 0)"})    .setTween(tl).addTo(controller);

window.onload = function () {
    tl.play();
}


 });


