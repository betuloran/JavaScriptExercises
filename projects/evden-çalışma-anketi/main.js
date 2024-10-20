const correctAnswers = ['E', 'E', 'E', 'E']; // Doğru yanıtlar dizisi
const form = document.querySelector('.questions-form'); // Formu seçiyoruz
const result = document.querySelector('.result'); //Sonucun görüneceği elementi seçiyoruz

form.addEventListener('submit', e => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller  

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; //Kullanıcının verdiği yanıtlar dizi olarak alınır.   

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;//Kullanıcı yanıtları ve doğru yanıtlar tek tek karşılaştırılır ve her doğru cevap için 25 puan eklenir.
        }
    });

    result.classList.remove('d-none'); //HTML'de başlangıçta gizlenen sonuç alanını görünür hale getirir

    let puan = 0;
    const bastir = setInterval(() => { 
        result.querySelector('span').textContent = `${puan}%`; //sonucu günceller
        if (puan == score) {
            clearInterval(bastir);//Her 10 milisaniyede bir puanı 1 artırarak sonucu yavaşça ekrana basar. Animasyon, puan score ile eşleştiğinde durur.
        }else{
            puan++;
        }
    }, 10);
});

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