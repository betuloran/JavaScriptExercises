//Zaten oluşturulmuş öğeye veya öğelere JavaScript kullanarak erişebiliriz. Öğelere erişmek veya öğeleri almak için farklı yöntemler kullanırız. Aşağıdaki kodda dört h1 öğesi vardır. h1 öğelerine erişmenin farklı yöntemlerini görelim.

//JavaScript kullanarak HTML öğelerini almak, oluşturmak, eklemek veya kaldırmak mümkündür. Bir HTML öğesini seçmek için etiket adı, kimlik, sınıf adı veya diğer nitelikleri kullanırız. 
//Hangi yöntemin kullanılacağı, hangi tür elementlerin seçileceğine bağlıdır: tag (etiket) , class (sınıf) veya id. Şimdi bu üç elementin kullanıldığı yöntemleri inceleyelim.

// 1-	getElementsByTagName: Belirtilen etiket adına (örneğin; div, p, h1) sahip olan tüm elementleri seçer.

// syntax
document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

//------------------
let paragraph = document.getElementsByTagName('p');
console.log(paragraph); // Belgedeki tüm <p> etiketlerini listeler

let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'blue'; // Tüm <p> elementlerinin yazı rengini mavi yapar
}


//getElementsByClassName: belirtilen class adına sahip olan tüm elementleri seçer. 

let items = document.getElementsByClassName('item');
console.log(items); // Belgedeki tüm "item" sınıfına sahip elementleri listeler

let itemsTwo = document.getElementsByClassName('item');
for (let i = 0; i < itemsTwo.length; i++) {
  itemsTwo[i].style.fontWeight = 'bold'; // "item" sınıfına sahip tüm elementleri kalın yapar
}


//getElementById: Belirtilen id değeriyle eşleşen tek bir elementi seçer.

document.getElementById('id')

let firstTitle = document.getElementById('first-title')//Burada, id değeri 'first-title' olan elementi seçiyoruz.
console.log(firstTitle) // <h1>First Title</h1>
//Seçilen element, firstTitle adlı bir JavaScript değişkenine atanıyor. Bu değişken, artık HTML'deki <h1 id="first-title">First Title</h1> elementini temsil eder.

//querySelector yöntemlerini kullanarak öğeleri alma:
// let firstTitle = document.querySelector('h1') // select the first available h1 element
// let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available element with class title

//querySelector: Belgenizde CSS seçiciyle eşleşen ilk öğeyi döndürür - querySelectorAll: Belgenizde CSS seçiciyle eşleşen tüm öğeleri döndürür.

//Adding attribute - özellik ekleme
//Bu kod parçacığı, bir HTML belgesinde tüm <h1> etiketlerini seçer ve belirli bir <h1> etiketi üzerinde sınıf (className) ve kimlik (id) atamaları yapar
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'