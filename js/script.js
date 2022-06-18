// alert("Hello! I am finishing the development of the page. Some things are incomplete, sorry for the inconvenience.");

AOS.init();

const mobileBtn = document.getElementById('mobile-btn')
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit');

const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const skillsSection = document.getElementById("skills");
const portfolioSection = document.getElementById("portfolio");
const contactSection = document.getElementById("contact");

const logoBtn = document.querySelector("#logo_btn");
const homeBtn = document.querySelector("#home_btn");
const aboutBtn = document.querySelector("#about_btn");
const skillsBtn = document.querySelector("#skills_btn");
const portfolioBtn = document.querySelector("#portfolio_btn");
const contactBtn = document.querySelector("#contact_btn");

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
    nav.classList.remove("inactive");
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
    nav.classList.add("inactive");
})

logoBtn.addEventListener("click", () => {
    homeSection.scrollIntoView({block: 'start', behavior: 'smooth'});
});

homeBtn.addEventListener("click", () => {
    nav.classList.remove('menu-btn');
    nav.classList.add("inactive");
    document.querySelector(".current").classList.remove("current");
    homeBtn.parentElement.classList.add("current");
    homeSection.scrollIntoView({block: 'start', behavior: 'smooth'});
});

aboutBtn.addEventListener("click", () => {
    nav.classList.remove('menu-btn');
    nav.classList.add("inactive");
    document.querySelector(".current").classList.remove("current");
    aboutBtn.parentElement.classList.add("current");
    aboutSection.scrollIntoView({block: 'start', behavior: 'smooth'});
});

skillsBtn.addEventListener("click", () => {
    nav.classList.remove('menu-btn');
    nav.classList.add("inactive");
    document.querySelector(".current").classList.remove("current");
    skillsBtn.parentElement.classList.add("current");
    skillsSection.scrollIntoView({block: 'start', behavior: 'smooth'});
});

portfolioBtn.addEventListener("click", () => {
    nav.classList.remove('menu-btn');
    nav.classList.add("inactive");
    document.querySelector(".current").classList.remove("current");
    portfolioBtn.parentElement.classList.add("current");
    portfolioSection.scrollIntoView({block: 'start', behavior: 'smooth'});
});

contactBtn.addEventListener("click", () => {
    nav.classList.remove('menu-btn');
    nav.classList.add("inactive");
    document.querySelector(".current").classList.remove("current");
    contactBtn.parentElement.classList.add("current");
    contactSection.scrollIntoView({block: 'start', behavior: 'smooth'});
});