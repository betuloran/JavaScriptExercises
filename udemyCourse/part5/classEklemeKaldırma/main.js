const icerik = document.querySelector('p'); //ilk p etiketine sahip olanı seçtik
console.log(icerik.classList);
icerik.classList.add('dom')
icerik.classList.remove('error')

//ikinci kısım
const pDegeri = document.querySelectorAll('p');

pDegeri.forEach(a => {
    if (a.textContent.includes('error')) //eğer seçilen p etiketlerinde error kelimesi varsa 
    {
        a.classList.add('error'); //error class ını ekler
    }
    if (a.textContent.includes('success')) 
    {
        a.classList.add('success');
    }
});