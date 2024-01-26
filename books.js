// Library Project 

const addBtn = document.querySelector('#add_btn');  
const clearBtn = document.querySelector('#clear_btn');
const form = document.querySelector('.form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const radioButtons = document.querySelectorAll('input[name="read"]');
const tbody = document.querySelector('tbody');
    let title,author,pages,read; 
    let myLibrary = [];


//add listener on title input 
//add validations for required

clearBtn.addEventListener('click', clearInputs);

titleInput.addEventListener('input', validateInput);
authorInput.addEventListener('input', validateAuthor);

function validateInput(e){
  
    if (titleInput.validity.valueMissing){
        titleInput.setCustomValidity('Please enter a title for this book!');
      } else {
        titleInput.setCustomValidity("");
      }
}


function validateAuthor(e){
  
    if (authorInput.validity.valueMissing){
        authorInput.setCustomValidity('Please enter an author for this book!');
      } else {
        authorInput.setCustomValidity("");
      }
}

//reusable function 
const validateElement = (element) => {
    if (element.validity.valueMissing){
        element.setCustomValidity(`Please enter  `);
    } else {
        element.setCustomValidity('');
    }
}





addBtn.addEventListener('click', function(e){
   //if form is valid, proceed with adding book 
if (form.checkValidity()){

    //When Add button is clicked, get values & put into variables
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    radioButtons.item(0).checked ? read = true : read = false ;
     
    //call helper functions
    createBook(title, author, pages, read);
    clearInputs();
    displayBook();
} else {
    console.log('form not valid');
    // validateInput();
    // validateAuthor();
    validateElement(titleInput);

}
});

// function Book(title, author, pages, read){ //ORIGINAL CONSTRUCTOR FUNCTION 
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

class Book { //REFACTOR TO USE CLASS AS PER TOP INSTRUCTION
    // class methods
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
   }
  
    hasRead() { 
      this.read = !this.read; 
    }
  };

// Book.prototype.hasRead = function(){ //MOVED FROM PROTOTYPE INTO CLASS
//     // this.read ? this.read = false : this.read = true;
//     this.read = !this.read;
// }

function createBook(title, author, pages, read){
   //STEP 2 - create object & push to array
    // let book = Object.create(Book.prototype);                           
    book = new Book(title, author, pages, read); 
    myLibrary.push(book);
}

function clearInputs(){
    titleInput.value= "";
    authorInput.value = "";
    pagesInput.value = "";
    radioButtons.item(0).checked = false;
    radioButtons.item(1).checked = false;
}

function displayBook(){
    //STEP 3 - loops through the array, displays each book on the page.
    
    //if tbody has children, remove them so display is current with whats in array. 
    if (tbody.hasChildNodes){
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
          }
    }

    for(let i = 0; i < myLibrary.length; i++){
        //create new <tr>, append to <tbody>
        let newRow = document.createElement('tr');
        //add data-attribute to newRow that is the value of index
        newRow.setAttribute('data-index', i);
        tbody.appendChild(newRow);
 
        //create <td> with headers & append to <tr>
        let titleTd = document.createElement('td');
        titleTd.setAttribute('headers', 'title');
        titleTd.textContent = `${myLibrary[i].title}`;
        newRow.appendChild(titleTd);

        let authorTd = document.createElement('td');
        authorTd.setAttribute('headers', 'author');
        authorTd.textContent = `${myLibrary[i].author}`;
        newRow.appendChild(authorTd);

        let pagesTd = document.createElement('td');
        pagesTd.setAttribute('headers', 'pages');
        pagesTd.textContent = `${myLibrary[i].pages}`;
        newRow.appendChild(pagesTd);

        let readTd = document.createElement('td');
        readTd.setAttribute('headers', 'read');
        readTd.textContent = `${myLibrary[i].read}`; 
        newRow.appendChild(readTd);

            readTd.addEventListener('click', () =>{
                if (readTd.textContent === 'true'){
                     readTd.textContent = 'false';
                     myLibrary[i].hasRead();
                 } else if (readTd.textContent === 'false'){
                     readTd.textContent = 'true';
                     myLibrary[i].hasRead();
                }
            })

        let deleteTd = document.createElement('td');
        deleteTd.setAttribute('headers', 'delete');

        let trashcan = document.createElement('img');
        trashcan.setAttribute('src', '/images/trash-can.png');
        deleteTd.appendChild(trashcan);
        newRow.appendChild(deleteTd);

            trashcan.addEventListener('click', () => {
                tbody.removeChild(newRow);
                deleteBook(i);
            });  
    }
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBook(); //rerender array on page
    // console.log(myLibrary);
}