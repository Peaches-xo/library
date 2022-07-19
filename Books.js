// Library Project 
const displayDiv = document.querySelector('.display_div');
const addBtn = document.querySelector('#add_btn');
const form = document.querySelector('.form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');


addBtn.addEventListener('click', function(e){
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    // let read = readInput.value;
 

    addBookToLibrary(title, author, pages);
    clearInputs();
    displayBook();
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // let hasRead = function(){
    //     return (read ? `have read` : `not read yet`); }

    // this.info = function (){
    //   `${this.title} by ${this.author}, ${this.pages} pages, ${hasRead()}.  ;}
}

Book.prototype.hasRead = function(){
    return (this.read? `have read` : `not read yet`);
    //     if (this.read){
    //         return `have read`
    //     } else {
    //         return `have not read`
    // }
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead()}.`
}

// const lilac = new Book('Lilac', 'BB Reid', 350, true);
// const thehobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);

// Array to store book objects
let myLibrary = [];


// function that can take user’s input, create object and store the new book objects into an array.
function addBookToLibrary(title, author, pages, read) {
    //create object
    let book = Object.create(Book.prototype); //swap book for data index 
    book = new Book(title, author, pages, read);

    console.dir(book);
    //push to array
    myLibrary.push(book);
    console.dir(myLibrary);
}

function clearInputs(){
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    // readInput.value = "";
}

function displayBook(){
    //loops through the array and displays each book on the page.
    // displaydiv.textContent = `Title: ${titleInput.value} by ${authorInput.value}, ${pagesInput.value} pages, ` ;

    for (let i = 0; i < myLibrary.length; i++){
        displayDiv.textContent = `Title: ${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, .
        ` ;

        //create new <tr>, append to <tbody>
            //create <th> with id of indexNo, textContent of index,  append to <tr> 
            //creat <td> with headers of title & indexNo, textContent of title, append to <tr>

    }

    // call api to get cover image
    //update img src of book shape
    
}