//örnek
function multiply(num1, num2){
    return num1*num2
}
let toplam=multiply(5,2)
console.log('toplam sonucunuz:',toplam)
//
// örnek
function sayHello(){
    let msg='hello world'
    return msg
}
 let hello=sayHello()
console.log(hello) //hello world
//

//örnek !!!!!!!!!!!!!!!!
let dizi =[2,4,5]
function sumArrayValues(array){
    let total=0
    for(let i=0;i<array.length;i++){
        total +=array[i]
    }
    return total
}
console.log('dizinin toplam değeri: ',sumArrayValues(dizi)) //dizinin toplam değeri:  11


