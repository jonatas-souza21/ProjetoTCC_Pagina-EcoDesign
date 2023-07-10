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
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('main');
const menuItem = document.querySelector('.navlist a')

menu.addEventListener('click', () => {
  menu.classList.toggle('box-x');
  navlist.classList.toggle('open');
  navbar.classList.toggle('active');
  main.classList.toggle('blur')
})