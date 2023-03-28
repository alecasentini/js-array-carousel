const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

console.log( next, prev) 

// tasto next
next.addEventListener( 'click', function(){
    // selezionare div con classe .active
    let activeItem = document.querySelector('.item.active')
    console.log ( activeItem )

    let itemToActive = activeItem.nextElementSibling
    console.log ( itemToActive )

    if ( activeItem.classList.contains ('last') ){
        itemToActive = document.querySelector ('.item.first')
    }

    // rimuovere classe .active
    activeItem.classList.remove ('active')
    // aggiungere classe .active ad elemento successivo
    itemToActive.classList.add ('active')

})

// tasto prev
prev.addEventListener( 'click', function(){
    // selezionare div con classe .active
    let activeItem = document.querySelector('.item.active')
    console.log ( activeItem )

    let itemToActive = activeItem.previousElementSibling
    console.log ( itemToActive )

    if ( activeItem.classList.contains ('first') ){
        itemToActive = document.querySelector ('.item.last')
    }

    // rimuovere classe .active
    activeItem.classList.remove ('active')
    // aggiungere classe .active ad elemento successivo
    itemToActive.classList.add ('active')

})

