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


let arrayImmagini= [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
];

let itemsElement = document.querySelector('.items');

    for(i = 0; i< arrayImmagini.length; i++){
        let immagine = arrayImmagini[i];

        itemsElement.innerHTML +=  `
        <div class="item" id='img${i}'>
            <img src="${immagine}" alt="">
        </div>
        `;
     
    }

let numeroImmagineAttiva = 0;
let imgActive = document.getElementById(`img${numeroImmagineAttiva}`);
imgActive.classList.add('active');

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const first = document.getElementById (`img${numeroImmagineAttiva}`)
first.classList.add('first')

const last = document.getElementById (`img4`)
last.classList.add('last')

next.addEventListener( 'click', function(){
    imgActive.classList.remove('active')    
    numeroImmagineAttiva = numeroImmagineAttiva + 1;
    imgActive = document.getElementById(`img${numeroImmagineAttiva}`);
    imgActive.classList.add('active');

    let activeItem = document.querySelector('.item .active')
    let itemToActive = activeItem.nextElementSibling

    if ( activeItem.classList.contains ('last') ){
    itemToActive = document.querySelector ('.item .first')
    }
})

prev.addEventListener( 'click', function(){
    imgActive.classList.remove('active')    
    numeroImmagineAttiva = numeroImmagineAttiva - 1;
    imgActive = document.getElementById(`img${numeroImmagineAttiva}`);
    imgActive.classList.add('active');

    let activeItem = document.querySelector('.item .active')
    let itemToActive = activeItem.previousElementSibling

    if ( activeItem.classList.contains ('first') ){
    itemToActive = document.querySelector ('.item .last')
    }
})


