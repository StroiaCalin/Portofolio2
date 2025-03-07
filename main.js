/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".nav__menu a");

// Functie care actualizeaza linkul activ in meniu
const updateActiveLink = (activeId) => {
    menuLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(activeId)) {
            link.classList.add('active-link');
        }
    });
};

const scrollActive = () => {
    const scrollY = window.scrollY;
    let isAtBottom = window.innerHeight + scrollY >= document.body.offsetHeight;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        // Verifica daca utilizatorul este in sectiunea curenta sau la finalul paginii
        if ((scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) || (isAtBottom && current === sections[sections.length - 1])) {
            updateActiveLink(sectionId);
        }
    });
};

// Adauga event listener pentru schimbarea sectiunii active la click pe link-uri
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetSection = link.getAttribute('href').replace('#', '');
        updateActiveLink(targetSection);
    });
});

window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

function openPopup(imageId,text) {
    var popup = document.getElementById('popup');
    var popupImg = document.getElementById('popup-img');
    var popupDesc = document.getElementById('popup-desc');

    console.log("Deschidere popup pentru: " + imageId);
    popupDesc.innerHTML = text;

    popupImg.src = imageId + ".png";
    popup.style.display = "flex";
}
function closePopup() {
    document.getElementById('popup').style.display = "none";
}

function openHtmlPopup(htmlContent) {
    var popup = document.getElementById('popup');
    var popupContent = document.getElementById('popup-content');

    console.log("Deschidere popup cu conținut HTML.");
    popupContent.innerHTML = htmlContent;
    popup.style.display = "flex";
}

function closeHtmlPopup() {
    document.getElementById('popup').style.display = "none";
}

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__data',{interval: 200}); 
