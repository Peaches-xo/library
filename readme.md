# library
## The Odin Project // Library app
---
![library screenshot](/images/Screen%20Shot%202022-08-05%20at%2010.21.17%20am.png)

### **Goals** 
Create a functional library/ book tracking app using HTML, CSS & Javascript. 

    - Must use objects/ constructor function & object.create
    - Use an array to store book objects
    - Loop through the array to display books on the page in either table or card format
    - Add ability for user to input their own books
    - Add a button on each book to be able to delete the book
    - Use a data-attribute to connect the book object to the corresponding DOM element
    - Add ability to change book's read status on Book prototype instance

---
### **Positives**
This was the first project I have had where I havent had an idea of what I would like the UI to look like. Found a design on dribbble and borrowed the shelf idea & worked from onwards from there. I like how it came together in the end but would love to spend more time on it to make it responsive.  

### **Challenges:**
 - mixed up creating an index to connect dom element to array element. 
    Solved by using the i of the loop as the index. 
 - when more than 5 rows added, flow needs to push display box down, not up. Use clamp on first grid rows or set min-height to that grid row.
    Solved by adding height 400px to first grid row. 
 - need to remove existing rows from page display otherwise will have doubles. 
    Solved by removing all children of tbody before re-rendering the array on the page. 

### **To Come Back To:**
- Would like the 'shelf' to be able to stay sized with the background
- Add responsiveness/ mobile friendly
- Update styling on table
- Add animations on icons
- Add form validation on inputs

* * * 

## Pseudocode for library


1. Click Add Button -> inputs get put into variables

        createBook()  -> use new to create new book obj, push to lib array, add index
        clearInputs() -> clears inputs for next book to be added
        displayOnPage() -> creates dom elements & adds book to table on page

2. inside createBook()
    creates new Book obj
    push to myArray
    add index in array to book obj 


3. inside displayOnPage()
    function that loops through the array & displays the book on the page
        

    When deleteBook() called
        remove row from screen
        remove obj from array
        array is reassigned as array without deleted object
        re-assign indexes in book objs (loop through array and give index property index value)











