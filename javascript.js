document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const backToTopButton = document.getElementById('back-to-top');
    const cancel_hamburger = document.querySelector(".cancel-hamburger")
    const heroSection = document.querySelector(".hero");
    const navbar = document.querySelector(".navbar");


    hamburger.addEventListener('click', () => {
        navMenu.classList.add('scale-up-ver-center');
        navMenu.classList.add('active');
    });

    cancel_hamburger.addEventListener('click', () =>{
        console.log('clicked nah')
        navMenu.classList.remove('active');
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > heroSection.clientHeight - 300) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
AOS.init();
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

