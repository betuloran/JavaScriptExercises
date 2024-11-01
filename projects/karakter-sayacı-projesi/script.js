const textarea=document.querySelector('textarea');
const totalCounter=document.getElementById('totalCounter');
const remainingCounter=document.getElementById('remainingCounter');

textarea.addEventListener('keyup',updateCounter);

function updateCounter(){
totalCounter.textContent=textarea.value.length; //textarea içindeki mevcut karakter sayısını gösterir.
remainingCounter.textContent=textarea.getAttribute('maxlength') -  textarea.value.length; //Maksimum karakter sayısı (maxlength) ile mevcut karakter sayısının farkını hesaplar ve kalan karakter sayısını gösterir.
}

updateCounter();


