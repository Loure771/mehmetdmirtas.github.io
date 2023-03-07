var typed = new Typed(".multiple-text", {
    strings:["Girişimciyim","E-Ticaret Yapıyorum","__TAMADOS__"],
    typeSpeed:60,
    backSpeed:50,
    backDelay:1000,
    loop:true
})



const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

const offset = 50;

menBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

window.addEventListener("scroll", () => {
    if (pageXOffset > offset) {
        
        navbar.classList.add('navbar-active');
    } else{
        
        navbar.classList.remove('navbar-active');
    }
})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);
};