// esericizo senza array
// const prev = document.querySelector('.prev')
// const next = document.querySelector('.next')

// console.log( next, prev) 

// tasto next
// next.addEventListener( 'click', function(){
//     // selezionare div con classe .active
//     let activeItem = document.querySelector('.item.active')
//     console.log ( activeItem )

//     let itemToActive = activeItem.nextElementSibling
//     console.log ( itemToActive )

//     if ( activeItem.classList.contains ('last') ){
//         itemToActive = document.querySelector ('.item.first')
//     }

//     // rimuovere classe .active
//     activeItem.classList.remove ('active')
//     // aggiungere classe .active ad elemento successivo
//     itemToActive.classList.add ('active')

// })

// // tasto prev
// prev.addEventListener( 'click', function(){
//     // selezionare div con classe .active
//     let activeItem = document.querySelector('.item.active')
//     console.log ( activeItem )

//     let itemToActive = activeItem.previousElementSibling
//     console.log ( itemToActive )

//     if ( activeItem.classList.contains ('first') ){
//         itemToActive = document.querySelector ('.item.last')
//     }

//     // rimuovere classe .active
//     activeItem.classList.remove ('active')
//     // aggiungere classe .active ad elemento successivo
//     itemToActive.classList.add ('active')

// })


let arrayImmagini = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
];

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let items = document.querySelector(".items");

for (i = 0; i < arrayImmagini.length; i++){
    
    let item = `
    <div class="item">
        <img src="${arrayImmagini[i]}">
    </div>
    `
    items.innerHTML += item;
    
}
let active = 0
items.getElementsByClassName('item')[active].classList.add('active')

prev.addEventListener ('click', function(){
    if(active == 0){
        active = arrayImmagini.length - 1
    } else {
        active--;
    }

    document.querySelector('.item.active').classList.remove('active')
    items.getElementsByClassName('item')[active].classList.add('active')
})

next.addEventListener ('click', function(){
    if(active == arrayImmagini.length - 1){
        active = 0
    } else {
        active++;
    }

    document.querySelector('.item.active').classList.remove('active')
    items.getElementsByClassName('item')[active].classList.add('active')
})

