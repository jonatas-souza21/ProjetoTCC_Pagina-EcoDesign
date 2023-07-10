{
    const btn = document.querySelector('.button-top');

    btn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });

    document.addEventListener('scroll', () => {
        btn.classList.toggle('btn-active', window.scrollY > 100);
    });
}

{
    let header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 100);
    });
}

// Eventos Menu hamburguer
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