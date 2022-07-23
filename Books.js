// Library Project 
const displayDiv = document.querySelector('.display_div');
const addBtn = document.querySelector('#add_btn');
const form = document.querySelector('.form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const radioButtons = document.querySelectorAll('input[name="read"]');

    let title,
    author,
    pages,
    read; 


addBtn.addEventListener('click', function(e){
    //GET VALUES
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    radioButtons.item(0).checked ? read = true : read = false ;
     

    createBook(title, author, pages, read);
    
    clearInputs();
    // displayBook();
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.hasRead = function(){
    return (this.read? `have read` : `not read yet`);
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead()}.`
}

Book.prototype.createID = function(){
    //finds objects place(index) in myLibrary array and returns it into data attribute property
    let endofLib = myLibrary.length - 1;
    console.log (myLibrary[endofLib]);
    // book.dataset.index = endOfLib;
    // console.log(book.dataset.index);

}


// const lilac = new Book('Lilac', 'BB Reid', 350, true);
// const thehobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);

function createBook(title, author, pages, read){
   //create object
    let book = Object.create(Book.prototype); 
    book = new Book(title, author, pages, read); //better way to do this?

    console.log(book);

    addBookToLibrary(book);
}


// Array to store book objects
let myLibrary = [];
// // function that can take user’s input, create object and store the new book objects into an array.
function addBookToLibrary(book) {
 
                    console.dir(book);
    //push to array
    myLibrary.push(book);
    // book.createID();
                        console.dir(myLibrary);

}

function clearInputs(){
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    // readInput.value = "";
}

// function displayBook(){
//     //loops through the array and displays each book on the page.
//     // displaydiv.textContent = `Title: ${titleInput.value} by ${authorInput.value}, ${pagesInput.value} pages, ` ;


//     //change to select i at end of array 
//     // for (let i = 0; i < myLibrary.length; i++){
//         displayDiv.textContent = `Title: ${myLibrary[myLibrary.length-1].title} by ${myLibrary[myLibrary.length-1].author}, ${myLibrary[myLibrary.length-1].pages} pages, .
//         ` ;

//         //create new <tr>, append to <tbody>
//         let newRow = document.createElement('tr');
//         let tbody = document.querySelector('tbody');
//         tbody.appendChild(newRow);


//             //create <th> with id of indexNo, textContent of index,  append to <tr> 
//             let newTh = document.createElement('th');
//             newTh.setAttribute('id', `ID#${[myLibrary.length-1]}`);
//             newTh.textContent = `${[myLibrary.length-1]}`;
//             newRow.appendChild(newTh);
            
//             //create <td> with headers of title & indexNo, textContent of title, append to <tr>
//             let titleTd = document.createElement('td');
//             titleTd.setAttribute('headers', 'title');
//             titleTd.textContent = `${title}`;
//             newRow.appendChild(titleTd);

//             let authorTd = document.createElement('td');
//             authorTd.setAttribute('headers', 'author');
//             authorTd.textContent = `${author}`;
//             newRow.appendChild(authorTd);

//             let pagesTd = document.createElement('td');
//             pagesTd.setAttribute('headers', 'pages');
//             pagesTd.textContent = `${pages}`;
//             newRow.appendChild(pagesTd);

//             let readTd = document.createElement('td');
//             readTd.setAttribute('headers', 'read');
//             //readTd.textContent = `${}`;  add variable for read here
//             newRow.appendChild(readTd);

//             let deleteTd = document.createElement('td');
//             deleteTd.setAttribute('headers', 'delete');
//             //insert image 
//             let trashcan = document.createElement('img');
//             trashcan.setAttribute('src', '/images/trash-can.png');
//             deleteTd.appendChild(trashcan);
            
//             newRow.appendChild(deleteTd);


//     //}



//     // call api to get cover image
//     //update img src of book shape
    
//  }