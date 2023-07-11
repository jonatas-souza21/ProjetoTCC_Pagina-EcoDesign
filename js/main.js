// Botão para voltar ao início
{
    const btn = document.querySelector('.button-top');

    btn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });

    document.addEventListener('scroll', () => {
        btn.classList.toggle('btn-active', window.scrollY > 100);
    });
}

// Menu nav - Efeito fade-in/fade-out
{
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
    });
}


// Menu mobile
{
    const menu = document.querySelector('.menu-icon');
    const icon = document.querySelector('.icon-ham');
    const iconClose = document.querySelector('.icon-close');
    const navlist = document.querySelector('.navlist');
    const navbar = document.querySelector('.navbar');
    const main = document.querySelector('main');

    menu.addEventListener('click', () => {
    navlist.classList.toggle('open');
    navbar.classList.toggle('active');
    main.classList.toggle('blur')

    if (navlist.classList.contains('open')) {
        icon.classList.toggle('none');
        iconClose.classList.toggle('active')
    } else {
        icon.classList.remove('none');
        iconClose.classList.remove('active')
    }
    })
}

// Animações ao rolar página (ScrollReveal)
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 700
})
scrollReveal.reveal (
    `#home .home-text, #about .about-img,
    #about .about-text, #about .box-button-rm,
    #projects .projects title, #projects .row,
    #testimony .testimony-title, #testimony .testimony-box,
    #contacts .map-container, #contacts .form-container`, {interval:50}
)

