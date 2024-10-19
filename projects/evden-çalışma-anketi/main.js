const correctAnswers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.questions-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index])   {
            score += 25;
        }

    })
    console.log(score);
})