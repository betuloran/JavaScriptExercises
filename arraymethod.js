 //DİZİ METOTLARI //
 let arabalar = ["toyota", "mercedes", "porsche"];
 let arabalar1 = ["hundai","tofaş"];

 //push metodu : dizinin sonuna eleman ekler ve uzunluğunu döndürür.
 arabalar.push("opel");
 console.log(arabalar);

 //unshift metodu : dizinin başına eleman ekler ve eleman sayısını geriye döner.
 arabalar.unshift("bmw");
 console.log(arabalar);

 // pop metodu: dizinin son elemanını siler ve eleman sayısını döner.
 arabalar.pop();
 console.log(arabalar);

 //shift metodu : dizinin başından eleman siler ve eleman sayısını döner.
 let silinenEleman = arabalar.shift();
 console.log(arabalar);
 console.log(silinenEleman);

 //splice(index,incdex) : eleman eklemek ve silmek için kullanılır.
 //  index:başlangıç indexi 
 //  incdex: bitiş indexi 
 console.log(arabalar);
 arabalar.splice(2, 0, "hundai");
 console.log(arabalar);

 arabalar.splice(2, 1); // 2.indexten başla, 1 tane eleman sil demektir.
 console.log(arabalar);
 ['toyota', 'mercedes', 'hundai', 'porsche'] //-> yani dizi soldaki gibiyken alttakine döner:
 ['toyota', 'mercedes', 'porsche']


//toString : diziyi stringe çevirebiliriz .
 let stringArabalar = arabalar.toString();
 console.log(typeof stringArabalar);


//join: diziyi stringe çeviririz, toString'ten farkı araya eleman ekleyebiliriz.
 let arayaElemanEklendi = arabalar.join("1");
 console.log(arayaElemanEklendi);


//concat: dizileri birleştirmek için (birden fazla diziyi) kullanılır. aşağıda arabalar1 ve arabalar2 dizisini birleştirdik.
 let birlesmisDizi = arabalar1.concat(arabalar2);
 console.log(birlesmisDizi);

// slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi olusturur.
 console.log(arabalar);
 ayrilmisDizi = arabalar.slice(1); //1.indexteki elemandan itibaren elamanları diğer belirlenen diziye ayır.
 console.log(ayrilmisDizi);


//length : dizinin uzunlugunu verir.
 console.log(arabalar.length);
 let mesaj = "Hello, world!";
 console.log(mesaj.length);

// reverse : dizinin elemanlarin1 ters çevirir. 
 arabalar.reverse();
 console.log(arabalar);

 // split(bölmek) : belirli bir ifadeye göre bölüp diziye cevirir.
 let isimler = "Enes,Ali, Veli";
 let isimlerDizi = isimler.split(",");
 console.log(isimlerDizi);
 const message = "javascript dizi metotları nelerdir?";

 const words = message.split(" ");
 console.log(words);

// index0f : elemanın index numarasini verir. dizide o eleman yoksa -1 dönüyor fakat varsa kaçıncı indeksteyse o index numarası dönüyor. 
 let index = arabalar.indexOf("mercedes");
 console.log(index);
 let index_two = arabalar.indexOf("opel");
 console.log(index_two);

// includes: verilen elemanı iceriyor mu ona bakar.
 let varMi = arabalar.includes("porsche");
 console.log(varMi);

