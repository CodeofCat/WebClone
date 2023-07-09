let curs = document.getElementById("cursor");
let cursblur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", function(dets){
    curs.style.left = dets.x+30+"px";
    curs.style.top = dets.y+"px";
    cursblur.style.left = dets.x-150+"px";
    cursblur.style.top = dets.y-150+"px";
});

let mouseEffect = document.querySelectorAll("#navbar h4");

mouseEffect.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
            curs.style.border = "1px solid #fff"
            curs.style.scale = 3
            curs.style.background = "transparent"
    });
    ele.addEventListener("mouseleave", function(){
            curs.style.border = "0px solid #95c11e"
            curs.style.scale = 1
            curs.style.background = "#95c11e"
    });
});

gsap.to('#navbar', {
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:'#navbar',
        scroller:'body',
        start:"top -10%",
        end:'top -11%',
        scrub:1
    }
});

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:'top -70%',
        scrub:2
    }
});

gsap.from("#about img, #about-content", {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 70%",
        end:'top 65%',
        scrub:1
    }
});

gsap.from(".cards", {
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:'top 65%',
        scrub:1
    }
});

gsap.from("#col1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 55%",
        end:'top 45%',
        scrub:4
    }
});

gsap.from("#col2", {
    y:70, 
    x:70,
    scrollTrigger:{
        trigger:"#col2",
        scroller:"body",
        start:"top 80%",
        end:'top 80%',
        scrub:4
    }
});

gsap.from("#page4 h1", {
    y:50, 
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:'top 70%',
        scrub:2
    }
});


