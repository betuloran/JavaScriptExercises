
const section = document.querySelector('section');
console.log(section.children);
console.log(Array.from(section.children));

Array.from(section.children).forEach(child => {

    child.classList.add('section-element');

})

const baslik = document.querySelector('h2');
console.log(baslik.parentElement); //section etiketi
console.log(baslik.parentElement.parentElement); //body etiketi
console.log(baslik.nextElementSibling); //react
console.log(baslik.previousElementSibling); //merhaba

console.log(baslik.nextElementSibling.parentElement.children);