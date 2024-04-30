//KLAVYE EVENTLARI

//keypress : harf ve sayılarda tetiklenen eventtır.

//keydown : hepsinde çalışır.

//keyup : tuştan elini kaldırdığında çalışan eventtır.


document.addEventListener("keypress",run);
 function run(e){
   console.log(e.type);
//   if(e.keyCode ==116){
//     alert("Sayfa yenileme engellendi!");}
//   e.preventDefault();
 }

 /*document.addEventListener("keypress",run);
 function run(e){
   console.log(e.key);
 }*/


/*
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup",run);


function run(e){
    cardTitle.textContent = e.target.value;
}

*/

