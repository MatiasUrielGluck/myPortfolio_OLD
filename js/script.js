// alert("Hello! I am finishing the development of the page. Some things are incomplete, sorry for the inconvenience.");

AOS.init(); // Scroll Animations Initialization

// Hamb Menu
const mobileBtn = document.getElementById('mobile-btn')
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit');

// Nav Menu Buttons
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const skillsSection = document.getElementById("skills");
const portfolioSection = document.getElementById("portfolio");
const contactSection = document.getElementById("contact");

// Nav Sections
const logoBtn = document.querySelector("#logo_btn");
const homeBtn = document.querySelector("#home_btn");
const aboutBtn = document.querySelector("#about_btn");
const skillsBtn = document.querySelector("#skills_btn");
const portfolioBtn = document.querySelector("#portfolio_btn");
const contactBtn = document.querySelector("#contact_btn");

// Functions
function navActions(button, section) {
    nav.classList.remove('menu-btn');
    nav.classList.add("inactive");
    document.querySelector(".current").classList.remove("current");
    button.parentElement.classList.add("current");
    section.scrollIntoView({block: 'start', behavior: 'smooth'});
}

// Event Listeners
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

homeBtn.addEventListener("click", () => { navActions(homeBtn, homeSection) });
aboutBtn.addEventListener("click", () => { navActions(aboutBtn, aboutSection) });
skillsBtn.addEventListener("click", () => { navActions(skillsBtn, skillsSection) });
portfolioBtn.addEventListener("click", () => { navActions(portfolioBtn, portfolioSection) });
contactBtn.addEventListener("click", () => { navActions(contactBtn, contactSection) });