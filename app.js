const audio = new Audio('tracks/background.mp3');
const somebodyToLove = new Audio('tracks/somebody_to_love.mp3');
const moonlightSonata = new Audio('tracks/m_sonata.mp3');
const furElise = new Audio('tracks/fur_elise.mp3');
const riverFlowsInYou = new Audio('tracks/river_flows.mp3');
const solfeggietto = new Audio('tracks/solfeggietto.mp3');
const balladePourAdeline = new Audio('tracks/adeline.mp3');
const nuvoleBianche = new Audio('tracks/nuvole_bianche.mp3');
const preludeInEMinor = new Audio('tracks/prelude_chopin.mp3');
const rondoAllaTurca = new Audio('tracks/alla_turca.mp3');
const hesAPirate = new Audio('tracks/caribbean.mp3');
const divenire = new Audio('tracks/divenire.mp3');
const comptineDunAutreEte = new Audio('tracks/autre_ete.mp3');

let map = new Map([
    ['queen', somebodyToLove],
    ['sonata', moonlightSonata],
    ['furelise', furElise],
    ['rivers', riverFlowsInYou],
    ['solfeggietto', solfeggietto],
    ['ballade', balladePourAdeline],
    ['nuvole', nuvoleBianche],
    ['prelude', preludeInEMinor],
    ['turca', rondoAllaTurca],
    ['pirate', hesAPirate],
    ['divenire', divenire],
    ['autreete', comptineDunAutreEte]
]);

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
    // console.log(scrollPos);

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

let nowPlaying = false;
let nowPlayingSongName = '';

function playSpecificSong(name) {
    let song = map.get(name);
    console.log(nowPlaying);
    console.log(nowPlayingSongName);
    if(!nowPlaying) {
        if(playing) {
        audio.pause();
        }
        song.play();
        nowPlaying = true;
        nowPlayingSongName = name;
    }
    else {
        playingSong = map.get(nowPlayingSongName);
        playingSong.pause();
        if(name !== nowPlayingSongName) {
            song.play();
            nowPlayingSongName = name;
        }
        else {
            nowPlaying = false;
            if(playing) {
            audio.play();
            }
        }
    }
}
