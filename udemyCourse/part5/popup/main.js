// const buton = document.querySelector('.login');
// const maninPopup = document.querySelector('.main-popup');
// const close = document.querySelector('.popup-close');

const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');

const usernamePattern = /^[a-z]{6,10}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        message.textContent = 'başarılı!';
    } else {
        message.textContent = 'lütfen tüm harfleri küçük ve 6 ile 12 karakter arasında giriniz.'
    }
})

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value);
    // console.log(form.username.value);
    if (usernamePattern.test(e.target.value)) 
        {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
})


// //tıkla butonuna tıklayınca popup açılır
// buton.addEventListener('click', () => {
//     maninPopup.style.display = 'block';
// })


// //x tıklandığında popup kapansın
// close.addEventListener('click', () => {
//     maninPopup.style.display = 'none';
// })


// //herhangi bir yere tıklanınca kapansın
// maninPopup.addEventListener('click', e => {
//     console.log(e.target);
//     if (e.target.className === 'main-popup') {
//         maninPopup.style.display = 'none';
//     }

// })