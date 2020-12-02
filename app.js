var audio = new Audio('tracks/background.mp3');

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector('#navbar__logo');

// display menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//Show active menu when scrolling
const highlightMenu = () => {
    //const elem = document.querySelector('.higlight');
    const aboutMenu = document.querySelector('#about-page')
    const introductionMenu = document.querySelector('#introduction-page');
    const whyPianoMenu = document.querySelector('#why-piano-page');
    const choiceMenu = document.querySelector('#choice-page');
    const repertoireMenu = document.querySelector('#repertoire-page');
    const contactMenu = document.querySelector('#contact-page');
    const allMenus = [aboutMenu, introductionMenu, whyPianoMenu, choiceMenu,
    repertoireMenu, contactMenu];
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    //adds highlight class to menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        for (current of allMenus) {
            current.classList.remove('highlight');
        }
        aboutMenu.classList.add('highlight');
        return;
    } 
    else if (window.innerWidth > 960 && scrollPos < 1400) {
        for (current of allMenus) {
            current.classList.remove('highlight');
        }
        introductionMenu.classList.add('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2700) {
        for (current of allMenus) {
            current.classList.remove('highlight');
        }
        whyPianoMenu.classList.add('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 3600) {
        for (current of allMenus) {
            current.classList.remove('highlight');
        }
        choiceMenu.classList.add('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPos < 5500) {
        for (current of allMenus) {
            current.classList.remove('highlight');
        }
        repertoireMenu.classList.add('highlight');
        return;
    }
    else {
        for (current of allMenus) {
            current.classList.remove('highlight');
        }
        contactMenu.classList.add('highlight');
        return;
    }
    // if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    //     elem.classList.remove('highlight');
    // }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

//close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

// menuLinks.addEventListener('click', hideMobileMenu);
// navLogo.addEventListener('click', hideMobileMenu);

let playing = false;

const playMusic = () => {
    if(playing){
        audio.pause();
        playing = false;
    }
    else{
        audio.play();
        playing = true;
    }
}

bckMusic = document.getElementById('music');
bckMusic.addEventListener('click', playMusic);

const highlightSocial = () => {
    const facebook = document.getElementById("fb");
    const instagram = document.getElementById("ig");
    const youtube = document.getElementById("yt");
    const spotify = document.getElementById("spot");
    const twitter = document.getElementById("twt");
    const socials = [facebook, instagram, youtube, spotify, twitter];
    for(social of socials) {
        social.classList.add('highlightIcon');
        setTimeout(function() { for (social of socials) {
            social.classList.remove('highlightIcon');} }, 7000);
    }
}

hitButton = document.getElementById('hit');
hitButton.addEventListener('click', highlightSocial);