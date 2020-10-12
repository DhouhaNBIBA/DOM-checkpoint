let heart = document.getElementById('heart');
heart.addEventListener('click',()=>{
    if(heart.classList.contains('white')){
        heart.classList.remove('white');
        heart.classList.add('red');
        heart.src = 'whiteHeart.png';
    }else{
        heart.classList.remove('red');
        heart.classList.add('white');
        heart.src = 'redHeart.png';
    }
});
let heart2 = document.getElementById('heart2');
heart2.addEventListener('click',()=>{
    if(heart2.classList.contains('white')){
        heart2.classList.remove('white');
        heart2.classList.add('red');
        heart2.src = 'whiteHeart.png';
    }else{
        heart2.classList.remove('red');
        heart2.classList.add('white');
        heart2.src = 'redHeart.png';
    }
});

var removeItem=document.getElementsByClassName('btn--small')
console.log(removeItem)
for(var i=0; i< removeItem.length; i++){
    var button=removeItem[i]
    button.addEventListener('click', function(event){
   var buttonClicked=event.target
   buttonClicked.parentNode.parentNode.remove()
  
    })
    calculSomme()
    calculSomme2()
    totalSum()
}
let btnAdd = document.querySelector('#add');
let btnSus = document.querySelector('#sus');
let donnee = document.querySelector('input');
btnAdd.addEventListener('click', () =>{
    donnee.value = parseInt(donnee.value) + 1;
    calculSomme()
    totalSum()
});

btnSus.addEventListener('click', () =>{
    donnee.value = parseInt(donnee.value) - 1;
    calculSomme()
    totalSum()
});

let btnAddi = document.querySelector('#ad');
let btnSust = document.querySelector('#su');
let donne = document.querySelector('#quantity2');
btnAddi.addEventListener('click', () =>{
    donne.value = parseInt(donne.value) + 1;
    calculSomme2()
    totalSum()
});

btnSust.addEventListener('click', () =>{
    donne.value = parseInt(donne.value) - 1;
    calculSomme2()
    totalSum()
});


function calculSomme(){
    var totale=0;
    var choix = document.getElementsByClassName('h')
    for(var i=0; i< choix.length; i++){
    var price=60;
    var quantiteE=document.querySelector('#quantity').value ;

   totale= (price * quantiteE);
     }
    document.getElementById("prix").value = totale +'Dt';

console.log(totale)}

function calculSomme2(){
    var totale=0;
    var choix = document.getElementsByClassName('h2');
  
    for(var i=0; i< choix.length; i++){
    var price=200;
    var quantiteE=document.querySelector('#quantity2').value ;

   totale= (price * quantiteE);
       }
    document.getElementById("prix1").value = totale +'Dt' ;
        console.log(totale)

}

function totalSum(){

    var sum1 =  document.getElementById("prix").value;
    var sum2 =  document.getElementById("prix1").value;
    var totalSum= parseInt(sum1) + parseInt(sum2);
    document.getElementById("somme").value = totalSum +'Dt';
    console.log(totalSum)
}