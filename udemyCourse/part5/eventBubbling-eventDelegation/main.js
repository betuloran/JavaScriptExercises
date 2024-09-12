
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'jQuery';

    ul.append(li);//alta ekler
    // ul.prepend(li); //üste ekler
})

// -------------------------------------------------------------

const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})


const liElemanlari = document.querySelectorAll('li');
liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        e.stopPropagation();
        console.log(e.target);
    })
})
