const baslik=document.getElementById('dom');
console.log(baslik); //<h1 id="dom">DOM</h1> 

const frameworks=document.getElementsByClassName('framework');
console.log(frameworks); //HTMLCollection(2) [p.framework, div.framework]
console.log(frameworks[0]); //<p class="framework">react</p>

const ptickets=document.getElementsByTagName('p');
console.log(ptickets);