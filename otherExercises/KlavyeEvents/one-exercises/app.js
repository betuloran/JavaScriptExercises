//KLAVYE EVENTLARI

//keypress : harf ve sayılarda tetiklenen eventtır.yani klavyede caps lock gibi şeylere basarsan tetiklenmez

//keydown : hepsinde çalışır.

//keyup : tuştan elini kaldırdığında çalışan eventtır.

                                      //  ***********************************************

document.addEventListener("keydown", run);
function run(e) {
  // console.log(e.type);
  console.log(e.key); //ekrana klavyedeki harfleri basınca konsola da basılan harfler gelir
  //  console.log(e.keyCode); VEYA console.log(e.which); //ASCI TABLOSUNDAKİ DEĞERLERİ VERİR
} 

//normalde f5e basıldığında sayfa yenilenir ama şirket, müşteri f5e basınca sayfa yenilensin istemiyorsa bunu nasıl yaparsın: 
/*
document.addEventListener("keydown",run);
 function run(e){ 
   console.log(e.keyCode);  
    if(e.keyCode ==116){
 alert("Sayfa yenileme engellendi!");
 }
   e.preventDefault();
 }*/


/*
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");
input.addEventListener("keyup",run);
function run(e){
 cardTitle.textContent = e.target.value;
}
*/

/*
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");
input.addEventListener("keypress", run);
function run(e) {
  console.log(e.target.value);
}
*/



