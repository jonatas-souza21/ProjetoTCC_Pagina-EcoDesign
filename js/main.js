// Carrossel de imagens
{
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }
    
    console.log('control', isLeft, currentItem);
    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items[currentItem].classList.add("current-item");
  });
});
}

// Botão para voltar ao início
{
  const btn = document.querySelector("#button-to-top");

  btn.addEventListener("click", () => {
    window.scrollTo(0,0)
  })

  document.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        btn.style.display = "flex"
      } else {
        btn.style.display = "none"
      }
  })
}

//Botão leia mais
const button = document.querySelector('#button-read-more');

button.addEventListener('click', () => {
  const aboutCard = document.querySelector('.about-card');
  aboutCard.classList.toggle('active');

  if (aboutCard.classList.contains('active')) {
    return button.innerHTML = 'Ler menos';
  } 

  return button.innerHTML = 'Ler mais';
})





