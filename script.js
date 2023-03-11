var tl = gsap.timeline()
gsap.from("#nav",{
    y:-50,
    opacity:0,
    duration:1
})

gsap.from("#nav h1",{
    y:-50,
    opacity:0,
    duration:1,
    ease: "bounce.out",
    delay:1
})

gsap.from("#text h1",{
    x:-50,
    opacity:0,
    duration:3,
    ease: "elastic.out(1, .3)",
   // ease: "back.out(1.7)",
    //ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
    delay:1.4
})

gsap.to("#text h1",{
    y:-80,
    duration:2,
    opacity:1,
    scrollTrigger:{
        trigger:"#text h1",
        scroller:"body",
        start:"top 20%"
    }
})

gsap.to("#text p",{
    y:-80,
    duration:2,
    opacity:1,
    delay:.3,
    scrollTrigger:{
        trigger:"#text p",
        scroller:"body",
        start:"top 20%",
    }
})


gsap.from("#text p",{
    y:70,
    opacity:0,
    duration:1,
    delay:1.8,
    ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
})

gsap.from("#text #btn ",{
    x:50,
    opacity:0,
    duration:3,
    ease: "elastic.out(1, .3)",
    delay:2
})
gsap.from("#text button",{
    x:50,
    opacity:0,
    duration:3,
    ease: "elastic.out(1, .3)",
    delay:3
})

gsap.from("#page1 #img",{
    opacity:0,
    scale:1,
    duration:2,
    delay:3.3,
    x:300,
    ease: "back.out(1.7)",
})

gsap.from("#patti1",{
    opacity:0,
    scale:0,
    duration:3,
    delay:3.7
})
gsap.from("#patti2",{
    opacity:0,
    scale:0,
    duration:3,
    delay:3.7
})
gsap.from("#patti3",{
    opacity:0,
    scale:0,
    duration:3,
    delay:3.7
})

gsap.from("#temeto",{
    y:-80,
    opacity:0,
    duration:2,
    delay:4,
    ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
})
gsap.from("#temeto1",{
    y:-80,
    opacity:0,
    duration:2,
    delay:4.5,
    ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
})

gsap.from("#page2 h1",{
    y:50,
    opacity:0,
    duration:3,
    ease: "bounce.out",
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
    }
})
gsap.from("#page2 p",{
    y:50,
    opacity:0,
    duration:3,
    delay:.5,
    ease: "bounce.out",
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
    }
})

gsap.from("#page2 #box1",{
    x:-500,
    opacity:0,
    duration:1.2,
    ease: "slow(0.7, 0.7, false)",
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        start:"top 40%"
    }
})

gsap.from("#page2 #box2",{
    x:500,
    opacity:0,
    duration:1.2,
    delay:.7,
    ease: "slow(0.7, 0.7, false)",
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
       // markers:true,
        start:"top 40%",
        end:"top 20%",
    }
})

gsap.from("#page2 #box3",{
    x:-700,
    opacity:0,
    duration:2,
    delay:1,
    ease: "slow(0.7, 0.7, false)",
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
       // markers:true,
        start:"top 40%",
        end:"top 20%",
    }
})

gsap.from("#page2 #icon1",{
    opacity:0,
    scale:0,
    duration:1.5,
    delay:1.4,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
       // markers:true,
        start:"top 30%",
        end:"top 20%",
    }
})

gsap.from("#page2 #icon2",{
    opacity:0,
    scale:0,
    duration:1.5,
    delay:1.4,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
       // markers:true,
        start:"top 30%",
        end:"top 20%",
    }
})

gsap.from("#page3>img",{
    x:-100,
    duration:2,
    opacity:0,
    ease: "back.out(1.7)",
    scrollTrigger:{
        trigger:"#page3 img",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from("#page3 #patti",{
    scale:0,
    duration:2,
    opacity:0,
    delay:.6,
    scrollTrigger:{
        trigger:"#patti",
        scroller:"body",
        start:"top 75%"
    }
})

gsap.from("#page3 #circle",{
    scale:0,
    duration:2,
    opacity:0,
    delay:.6,
    scrollTrigger:{
        trigger:"#circle",
        scroller:"body",
    }
})
gsap.from("#page3 #mirchi",{
    y:70,
    duration:1.4,
    opacity:0,
    delay:.8,
    //ease: "bounce.out",
    scrollTrigger:{
        trigger:"#mirchi",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from("#page3 h1",{
    y:-50,
    opacity:0,
    duration:1.5,
    ease: "elastic.out(1, .3)",
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
    }
})


gsap.from("#page3 #right",{
    scale:0,
    duration:1.5,
    delay:2,
    scrollTrigger:{
        trigger:"#right",
        scroller:"body",
    }
})

gsap.from("#page3 #left",{
    scale:0,
    duration:1.5,
    delay:2,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
    }
})

gsap.from("#page4 h1",{
    y:70,
    duration:1.4,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
    }
})

gsap.from("#page4 #box1",{
    y:70,
    duration:1.4,
    opacity:0,
    ease: "elastic.out(1, .3)",
    scrollTrigger:{
        trigger:"#page4 #box1",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from("#page4 #box2",{
    y:70,
    duration:1.4,
    opacity:0,
    delay:.5,
    ease: "elastic.out(1, .3)",
    scrollTrigger:{
        trigger:"#page4 #box1",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from("#page4 #box3",{
    y:70,
    duration:1.4,
    opacity:0,
    delay:1,
    ease: "elastic.out(1, .3)",
    scrollTrigger:{
        trigger:"#page4 #box1",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from("#page4 #box4",{
    y:70,
    duration:1.4,
    opacity:0,
    delay:1.3,
    ease: "elastic.out(1, .3)",
    scrollTrigger:{
        trigger:"#page4 #box1",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from("#prt2",{
    y:80,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#prt2",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from("#line",{
    left:-1500,
    duration:2.5,
    opacity:0,
    delay:1.5,
    scrollTrigger:{
        trigger:"#prt2",
        scroller:"body",
        start:"top 70%"
    }
})