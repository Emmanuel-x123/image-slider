const buttons = document.querySelectorAll("[data-carousel-button]")  
/* the reason we use the data attribute here instead of class is because 
it makes working with javascript so much
 easier because you dont have to worry about overlap between your classes and javascript
*/


/*
* here we loop through each of the buttons
* The forEach() method calls a function (a callback function) once for each array element*/

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1 //- is a math sign

    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")

    let newIndex = [...slides.children].indexOf(activeSlide) + offset //converts the slide to an array

    if (newIndex < 0) newIndex = slides.children.length - 1 //the index of the last element.

    if (newIndex >= slides.children.length) newIndex = 0 //loops bact to the first slide

    slides.children[newIndex].dataset.active = true //adds the data set active of class or atribute 
    delete activeSlide.dataset.active //this revoves it from the slide that was actve before
  })
})



