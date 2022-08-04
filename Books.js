// Library Project 

const addBtn = document.querySelector('#add_btn');
const form = document.querySelector('.form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const radioButtons = document.querySelectorAll('input[name="read"]');

let testDiv = document.querySelector('.test');

    let title,
    author,
    pages,
    read; 

    let myLibrary = [];

addBtn.addEventListener('click', function(e){
    //GET VALUES
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    radioButtons.item(0).checked ? read = true : read = false ;
     
    createBook(title, author, pages, read);
    clearInputs();
    displayBook();
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
// Book.prototype.info = function(){
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead()}.`
// }
Book.prototype.createID = function(){
    //finds objects place(index) in myLibrary array (MAYBE TO ADD -> returns it into data attribute property)
    this.index = myLibrary.length - 1;  
}

function createBook(title, author, pages, read){
   //STEP 2 - create object
    let book = Object.create(Book.prototype);                                     
    book = new Book(title, author, pages, read); //better way to do this?
    //STEP 2 - pushes to array
    myLibrary.push(book);
    book.createID();
}

function clearInputs(){
    titleInput.value= "";
    authorInput.value = "";
    pagesInput.value = "";
    radioButtons.item(0).checked = false;
    radioButtons.item(1).checked = false;
}


let tbody = document.querySelector('tbody');

function displayBook(){
    //STEP 3 - loops through the array and displays each book on the page.
    
    //if tbody has children, remove them. 
    if (tbody.hasChildNodes){
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
          }
    }

    for(let i = 0; i < myLibrary.length; i++){

         //create new <tr>, append to <tbody>
         let newRow = document.createElement('tr');
         tbody.appendChild(newRow);

        //  let newTh = document.createElement('th');
        //  newRow.setAttribute('id', `${[myLibrary.length-1]}`); //get index number from book object in array?
        //  newTh.textContent = `${[myLibrary.length-1]}`;
        //  newRow.appendChild(newTh);
            // newTh.textContent = `${myLibrary[i].index}`;
            // newRow.appendChild(newTh);

            //create <td> with headers of title & indexNo, textContent of title, append to <tr>
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

            let deleteTd = document.createElement('td');
            deleteTd.setAttribute('headers', 'delete');

                //insert image 
                let trashcan = document.createElement('img');
                trashcan.setAttribute('src', '/images/trash-can.png');

                deleteTd.appendChild(trashcan);
                newRow.appendChild(deleteTd);
                trashcan.addEventListener("click", (e) => {
                    tbody.removeChild(newRow);
                    console.log(myLibrary[i].index);
                    deleteBook(myLibrary[i].index); 
                });  
    }

  
}

function deleteBook(id){ 
    console.log(id + " deleted");
    //remove from array
    myLibrary.splice(id,1); 
    //HOW TO to update indexes of book objects in array
    console.log(myLibrary);

}

//possibly remove index column from table as no need to show that. Will solve problem of having to refresh display after deletion of one book