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
    './assets/img/05.webp',
];

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let i = 0;
let image = document.querySelector('.item');

// tasto avanti
next.addEventListener('click', function() {

    image.setAttribute('src', arrayImmagini[i]);
    i++;

    if (i >= arrayImmagini.length) {
        i = 0;
    }
});

// tasto precedente
prev.addEventListener('click', function() {

    image.setAttribute('src', arrayImmagini[i]);
    i--;

    if (i < 0) {
        i = arrayImmagini.length - 1;
    }
});


