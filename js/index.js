// Your code goes here

// eventListeners used (in descending order):
    // error
    // load
    // contextmenu
    // resize
    // click
    // dblclick
    // mouseenter
    // mouseleave
    // mouseover
    // mousedown
    // mouseup
    // wheel
    // keydown


    
// grabbing elements 
const header = document.querySelector('.main-navigation');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
const busImage = document.querySelector('.intro img');
const mapImage = document.querySelector('.content-section .img-content img')
const riverImage = document.querySelector('.inverse-content img')
const text = document.querySelectorAll('.text-content');
const h1 = document.querySelector('h1');
const body = document.querySelector('body');
const titles = document.querySelectorAll('h2');
const button = document.querySelectorAll('.btn');



// ERROR

// alerts when error is found
window.addEventListener('error', () => {
    alert("Error found!")
})



// LOAD

// alerts when window is loaded
window.addEventListener('load', () => {
    alert("This is William's DOM-II project")
})



// CONTEXTMENU

// alerts when right-clicked
window.addEventListener('contextmenu', () => {
    alert("You just opened the context menu")
})



// RESIZE

// alerts when window size is changed
window.addEventListener('resize', () => {
    alert("Size doesn't matter. Stop judging mine")
})



// CLICK

// h1 text changes
h1.addEventListener("click", (event) => {
    event.target.textContent = "My name is William"
})



//DBLCLICK

// bus image reduces to 50%
busImage.addEventListener('dblclick', (event) => {
    event.target.style.width = '50%'
})
// button text and background changes color
button.forEach(element => {
    element.addEventListener('dblclick', (event) => {
        event.target.style.color = 'yellow'
        event.target.style.backgroundColor = 'purple'
    })
})



// MOUSEENTER

// map image changes src
mapImage.addEventListener('mouseenter', (event) => {
    event.target.setAttribute("src", "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80")
})
// nav gets bigger
nav.addEventListener('mouseenter', (event) => {
    event.target.style.transform = 'scale(1.1)'
    event.target.style.transition = 'all .3s'
})
// changes color and font-size of titles (h2)
titles.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.color = '#1E90FF'
        event.target.style.fontSize = '50px'
        event.target.style.transition = '.1s'
    })
})
// text-content changes background and text color
text.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "#043030"
        event.target.style.color = 'white'
    })
})



// MOUSELEAVE

// changes revert back to normal
titles.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.color = null
        event.target.style.fontSize = null
    })
})
// map image changes src
mapImage.addEventListener('mouseleave', (event) => {
    event.target.setAttribute("src", "https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
})
// nav resets to normal
nav.addEventListener('mouseleave', (event) => {
    event.target.style.transform = null
    event.target.style.transition = "all .3s"
})
// nav links go to normal
navLinks.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.transform = null
        event.target.style.transition = 'all .3s'
    })
})



// MOUSEOVER

// nav links get smaller
navLinks.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.transform = "scale(1.2)"
        event.target.style.transition = "all .3s"
    })
})



// MOUSEDOWN

// header changes color to orange
header.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = 'orange'
})
// river image changes src
riverImage.addEventListener('mousedown', (event) => {
    event.target.setAttribute('src', "https://images.unsplash.com/photo-1515348752911-deaaf1de63a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80")
})



// MOUSEUP

// header color reverts to normal
header.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = null
})
// river image changes src
riverImage.addEventListener('mouseup', (event) => {
    event.target.setAttribute('src', 'https://images.unsplash.com/photo-1549110891-8f9f8a9f9515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')
})



// WHEEL

// scroll bar alert...kinda evil tbh
body.addEventListener('wheel', () => {
    alert('Have fun scrolling lmao\nBetter off clicking the space-bar')
})



// KEYDOWN

// key press changes body background color
body.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = 'grey'
})