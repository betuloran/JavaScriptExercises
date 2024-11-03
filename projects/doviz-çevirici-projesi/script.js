//üzerinde işlem yapacağımız tüm işlevleri çağırıyoruz:
const currencyFirst=document.getElementById('currencyFirst')
const currencySecond=document.getElementById('currencySecond')
const count=document.getElementById('count') //count: Kullanıcının çevirmek istediği miktarı girdiği alan.
const equal=document.getElementById('equal') //equal: Çevrim sonucunda çıkan değerin gösterildiği alan.
const exchangeRate=document.querySelector('.exchangeRate') // veya const exchangeRate=document.getElementById('exchangeRate')
//exchangeRate: İki para birimi arasındaki güncel döviz kurunu göstermek için kullanılan alan.
updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/ffe1fa46573ce5bd94c31403/latest/${currencyFirst.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const rate = data.conversion_rates[currencySecond.value]; // currencyFirst para biriminden currencySecond para birimine olan döviz kuru alınır.
      exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;
      equal.textContent = (count.value * rate).toFixed(2);
    });
}
//Olay - Etkinlik Dinleyicileri:
currencyFirst.addEventListener('change', updateRate);
currencySecond.addEventListener('change', updateRate);
count.addEventListener('input', updateRate);

