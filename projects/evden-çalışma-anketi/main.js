const correctAnswers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.questions-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }

    })
    result.classList.remove('d-none');

    let puan = 0;
    const bastir = setInterval(() => { 
        result.querySelector('span').textContent = `${puan}%`;
        if (puan == score) {
            clearInterval(bastir);
        }else{
            puan++;
        }
    }, 10);
})

// setTimeout(() => { //1 kez çalışır
//     console.log('a');
// }, 2000);

// setInterval(() => { //sürekli çalışır
//     console.log('a');
// }, 1000);

// let i=0;
// const bastir= setInterval(() => {
//     console.log('a');
//     i++;
//     if(i==4){
//         clearInterval(bastir);
//     }
// }, 1000);