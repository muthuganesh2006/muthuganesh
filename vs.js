


  lucide.createIcons();

const textArray = ["Frontend Developer", "Creative Designer", "Web Developer"];
let typing = document.querySelector(".typing");
let i = 0, j = 0;

function typeEffect() {
  if (j < textArray[i].length) {
    typing.textContent += textArray[i].charAt(j);
    j++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (j > 0) {
    typing.textContent = textArray[i].substring(0, j - 1);
    j--;
    setTimeout(eraseEffect, 50);
  } else {
    i = (i + 1) % textArray.length;
    setTimeout(typeEffect, 300);
  }
}
typeEffect();

document.querySelectorAll('.bar span').forEach(span => {
  const skillValue = span.getAttribute('data-skill');
  span.style.setProperty('--skill-width', skillValue + '%');
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
