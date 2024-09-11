const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('Tıklandı');
// })


const liElemanlari = document.querySelectorAll('li');

liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        // //         // console.log(e);
        // //         // console.log(e.target);
        // //         // console.log('Liye tıklandı');
        // //         // e.target.style.color = 'blue';
    })
})

const ul = document.querySelector('ul');
// ul.remove();

liElemanlari.forEach(eleman => {

    eleman.addEventListener('click', e => {
        e.target.remove();
    })
})

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'jQuery';

    ul.append(li);//alta ekler
    // ul.prepend(li); //üste ekler
})
