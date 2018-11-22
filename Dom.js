// delete a book


// let deleteBtns = document.querySelectorAll('#book-list .delete');
// Array.from (deleteBtns)
//     .forEach( deleteBtn => {
//     deleteBtn.addEventListener('click', function(e){
//         const clickedButtonParent = e.target.parentElement;
//         clickedButtonParent.parentNode.removeChild(clickedButtonParent);
//     })
// })

// delete using events bubbling

// first lets grab the parentElement which is a "ul"

let ul = document.querySelector("#book-list ul");
ul.addEventListener('click', function(e){
    if( e.target.className == 'delete'){
        const clickedButtonParentElement = e.target.parentElement;
        ul.removeChild( clickedButtonParentElement )
    }
})

// PREVENT DEFAULT BEHAVIOUR AND EXTRACT THE VALUE OF WHAT HAS BEEN TYPED

    // first lets grab the form
const addForm = document.forms['add-book'];
    // lets attach a submit event and a listener to the form
addForm.addEventListener('submit', function(e){
    // lets prevent default so the page doesn't refrresh
    e.preventDefault();
    // lets grab what is typed into the form and save it as value
    const value = addForm.querySelector('input[type = "text"]').value;
    
    //create elements
        // first is the li tag
    const li = document.createElement('li');
        // next is the two span tags
    const bookName = document.createElement('span');
    const deleteButton = document.createElement('span');

    bookName.classList.add('name');
    deleteButton.classList.add('delete');

    // ADD TEXT CONTENT
    // to the delete button
    deleteButton.textContent = "delete";
    //to the bookName 
    bookName.textContent = value;

// APPEND CHILD
// lets add the bookName span tag into the li tag
    li.appendChild(bookName);
 // lets add the deleteButton span tag into the li tag 
    li.appendChild(deleteButton);
// lets grab the ul tag and append the li tag into it
    // we have grabbed the ul before
    ul.appendChild(li);
});

// Day73
const bookName = document.createElement('span');
const deleteButton = document.createElement('span');
const hideLabel = document.querySelector('#hideLabel');
bookName.classList.add('name');
deleteButton.classList.add('delete');

// HIDING BOOKS
// first grab the checkbox
const hideBooks = document.querySelector('#hide');
// next add a change event plus listener
hideBooks.addEventListener('change', function(e){
    // check if the checkbox is checked
    if(hideBooks.checked){
        // if checked, hide the ul holding all the books
        ul.style.display = "none";
        hideLabel.textContent = "Show all books"
    }else {
        // show the ul tag
        ul.style.display = "initial";
        hideLabel.textContent = "Hide all books";
    }
})

// search books
let searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = ul.getElementsByTagName("li");
    Array.from(books).forEach((book)=>{
        const title = book.firstElementChild.textContent;
        if( title.toLowerCase().indexOf(term) != -1 ) {
            book.style.display = "block"
        } else {
            book.style.display = "none"
        }
    })
})

