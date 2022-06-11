const ts = gsap.timeline({ defaults: { ease: "power1.out" } });

ts.to(".hide span", { y: "0%", duration: 1.5, stagger: 0.25});
ts.to(".slide", {y: "-100%", duration: 2, delay: .5})
ts.to(".back", {y: "-100%", duration: 2},"-=1.67")
ts.fromTo("section", {opacity:0}, {opacity: 1, duration: 1.5})
ts.fromTo(".heading-centered", {opacity:0}, {opacity: 1, duration: 1.5}, "-=1")