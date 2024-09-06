// const pdegeri=document.querySelector('p');
// console.log(pdegeri.innerText); //js

//  pdegeri.innerText='Can Boz Fullstack Developer';

// const pdegeri=document.querySelectorAll('p');

// pdegeri.forEach(a => {
//     console.log(a.innerText);  //js react
// a.innerText +=' ' + 'yeni yazı'; //js yeni yazı react yeni yazı
// });

const framework=document.querySelector('.framework'); 
console.log(framework.innerHTML);

framework.innerHTML +='<h2>vue js, react js, angular js</h2>' 

const ogrenciler =['ali','veli','can'];
    ogrenciler.forEach(ogrenci => {
        framework.innerHTML +=`<p>${ogrenci}</p>`
    });