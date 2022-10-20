var main_img = document.getElementById("main-img");

// Logo Color

var logo = document.getElementById('logo');

// Text Color 

var main_text = document.getElementById('tshirt_bold');

// Read More Button

var btn = document.getElementById('btn');

var blue = document.getElementById('blue');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');
var red = document.getElementById('red');
var green = document.getElementById('green');

// For Blue

blue.addEventListener('click', function(){

    main_img.src = 'images/blue.jpg'
    logo.style.color = 'blue'
    main_text.style.color = 'blue'
    btn.style.backgroundColor = 'blue'
    
    
    
    })

  // For Pink  

pink.addEventListener('click', function(){

main_img.src = 'images/pink.jpg'
logo.style.color = '#D7018F'
main_text.style.color = '#D7018F'
btn.style.backgroundColor = '#D7018F'



}) 

// For Purple


purple.addEventListener('click', function(){

    main_img.src = 'images/purple.jpg'
    logo.style.color = '#B90AE1'
    main_text.style.color = '#B90AE1'
    btn.style.backgroundColor = '#B90AE1'
    
    })


    // For Red

red.addEventListener('click', function(){

    main_img.src = 'images/red.jpg'
    logo.style.color = '#DF071A'
    main_text.style.color = '#DF071A'
    btn.style.backgroundColor = '#DF071A'
    
    })

 // For Green
 
 green.addEventListener('click', function(){

    main_img.src = 'images/green.jpg'
    logo.style.color = '#8EE103'
    main_text.style.color = '#8EE103'
    btn.style.backgroundColor = '#8EE103'
    
    })