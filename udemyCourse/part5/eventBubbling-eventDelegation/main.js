
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'jQuery';

    ul.append(li);//alta ekler
    // ul.prepend(li); //üste ekler
})

// -------------------------------------------------------------

//Yeni eklenen öğeler (li), ul öğesine ekleniyor ve tıklama olayı ul'un olay dinleyicisi tarafından işleniyor:
const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove(); //Eğer tıklanan öğe bir li ise, bu öğe kaldırılıyor.Eklenen li öğeleri bu olay dinleyicisine yakalanıyor ve başarıyla siliniyor.
    }
})


const liElemanlari = document.querySelectorAll('li');
liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        e.stopPropagation(); // olayın dıştaki (parent) öğelere yayılmasını engelliyor.
        console.log(e.target);
    })
})

//stopPropagation : mevcut li öğelerine tıkladığınızda, tıklama olayı ul'a ulaşamıyor ve bu yüzden ul'un tıklama dinleyicisi çalışmıyor. Sonuç olarak, bu öğeler kaldırılmıyor.