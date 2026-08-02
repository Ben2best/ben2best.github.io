const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.15
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="all .7s ease";
    observer.observe(card);
});

const skillBadges = document.querySelectorAll(".skills span");

skillBadges.forEach(skill=>{
    skill.addEventListener("mouseenter",()=>{
        skill.style.transform="scale(1.1)";
    });

    skill.addEventListener("mouseleave",()=>{
        skill.style.transform="scale(1)";
    });
});
