const form = document.querySelectorAll("form");
const sections = document.querySelectorAll("section");

gsap.registerPlugin(ScrollTrigger);
/********************************************Header********************************************/
gsap.from("header",{
    scrollTrigger:{
        toggleActions: "restart reset restart play"
    },
    y: -10,
    opacity: 0,
    duration: 1
});


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "header",
        start: `${document.querySelector("header").offsetHeight} top`,
        end: "+=1",
        toggleActions:"play none none reverse",
        OnEnter: () => console.log("Entered")
    }
});
tl
    .fromTo("header",{
        y: -20,
        opacity:0,
    },
    {
        position: 'sticky',
        top:0,
        y: 0,
        duration:0.5,
        opacity:1,
        backgroundColor: "#fff",
        zIndex: 5
    }
    )

/********************************************Header********************************************/
/********************************************About Us********************************************/
gsap.from("#floatingImage",{
    scrollTrigger:{
        trigger : ".about-us",
        start:"51% 60%",
        end: "51% 10%",
        toggleActions: "play reverse play reverse",
    },
    x:-100,
    opacity: 0,
    duration: 0.5
});
gsap.from("#floatingBox",{
    scrollTrigger:{
        trigger : ".about-us",
        start:"51% 60%",
        end: "51% 10%",
        toggleActions: "play reverse play reverse",
    },
    rotate:450,
    scale:0,
    opacity: 0,
    duration: 0.5,
    delay:0.1
});
/********************************************About Us********************************************/


form.forEach(item => {
    item.addEventListener("submit", e => {
        e.preventDefault();
        e.target.reset();
    })
})  

// function ScrollAnim()
// {
//     let windowHt = window.innerHeight;
//     sections.forEach(section => {
//         let section_pos = section.getBoundingClientRect().top;
//         if(section_pos < windowHt / 1.1)
//             section.classList.add("animate");
//         if(window.scrollY > section_pos/1.5)
//             section.classList.remove("animate");
//     });
// }

// function animate(ele)
// {
//     ele.classList.add('animate');
// }
// function no_animate(ele)
// {
//     ele.classList.remove('animate');
// }

// ScrollReveal().reveal('section', {
//     easing: 'linear',
//     beforeReveal: animate,
//     afterReveal: no_animate,
//     reset: true,
//     beforeReset: no_animate,
//     afterReveal: animate
// });


// document.addEventListener("DOMContentLoaded",ScrollAnim);
// window.addEventListener('scroll',ScrollAnim);


