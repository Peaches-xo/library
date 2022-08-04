TO DO

* populate table via loop over array
* read/ not read toggle
* work out a way to create an id number not related to index array, use data-attribute & counter variable
* allow shelf to move with size of background if large book is entered
* add validation to form fields
* center delete button 

**DONE**
* when more than 5 rows added, flow needs to push display box down, not up. Use clamp on first grid rows or set min-height to that grid row
    -> solved by adding height 400px to first row 


The idea is to set a data attribute on the button (or any DOM element of the book) with a value that you can use to find the book in your array.

When you press the button, you'll use the value of the data attribute to find the right book in the array. 

Assuming you have a unique ID on the book. You'll use the book unique ID as the value of the data attribute. On a button press, the listener function will use the value of the data attribute to find the index of the book in the array. 

This will serve as a sort of link between your book in the DOM and your book object in the array. 


Assuming you have a unique ID on the book. You'll use the book unique ID as the value of the data attribute. On a button press, the listener function will use the value of the data attribute to find the index of the book in the array. 



PSEUDOCODE


1. Click Add Button -> inputs get put into variables

        createBook()  -> use new to create new book obj, add uniqueID#, push to lib array
        clearInputs() -> clears inputs for next book to be added
        displayOnPage() -> creates dom elements & adds book to table on page

2. inside createBook()












**FOR RADIO TOGGLE**

function A (climb) {
    this.climb = climb;
}

const a = new A(false)
const b = new A(true)

a.climb // false
b.climb // true

A.prototype.toggleClimb = function() {
    this.climb = !this.climb
}

a.toggleClimb()
b.toggleClimb()

a.climb // true
b.climb // false