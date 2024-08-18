//ONE EXAMPLE
let user1={
    name:'betül',
    surname:'oran'
}
let user2={
    name:'betül',
    surname:'oran'
}
console.log(user1==user2) //false 

//TWO EXAMPLE 
let firstName='betül'
let lastName='oran'
let space=' '

// let fullName=firstName + space + lastName;
// console.log(fullName) // betül oran 

let fullName=`${firstName} ${lastName}`
 console.log(fullName) // betül oran 

//THEREE EXAMPLE

let paragraph="Physical fitness refers to good body health, and is the result of regular exercise, proper diet and nutrition,\
 and proper rest for physical recovery. A person who is physically fit will be able to walk or run without getting breathless \
 and they will be able to carry out the activities of everyday \
 living and not need help. How much each person can do will depend on their age and whether they are a man or woman. "

document.write(paragraph)
 // \ işareti paragrafın uzunluğundan dolayı hata almasını önler


//......
let word='prototurk'
console.log(word.toUpperCase())
console.log(word.toLowerCase())