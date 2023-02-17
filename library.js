//the books are going to be added to parent
const parent = document.querySelector(".bookContainer");
//Get button to be used w/ eventlistener
const button = document.querySelector("button");
//gets forms classes
let toggleForm = document.querySelector(".invisible.book-form");

//getting submit button
let submitButton = document.querySelector("input[type='submit']");

let i = 0;
//library of books
let library = [];

//constructor
function book(author, title, pages, read) {
  this.Author = author;
  this.Title = title;
  this.Pages = pages;
  this.Read = read;
  library.push(this);
}

//loops through library array and displays it
function loopBooks() {
  library.forEach((element) => {
    let $div = document.createElement("div"); //div evrything is going to be on
    let $buttonDiv = document.createElement("div"); //container for remove book
    $buttonDiv.classList.add("rBook"); //class of container for remove book
    i = library.indexOf(element); //index of current
    $div.dataset.num = i; //add the data set attribute to div
    let $dataAtt = document.createElement("button"); //makes button
    $dataAtt.textContent = "Remove Book"; //button text
    $dataAtt.classList.add("remove"); // class of button
    $div.classList.add("book", "book" + i); //classes of div
    let string = Object.entries(element)
      .map((x) => x.join(": "))
      .join("\n");
    $div.append(string);
    $buttonDiv.appendChild($dataAtt);
    $div.appendChild($buttonDiv);
    parent.append($div);
  });
}
//set loopsBooks prototype to a copy of book
//(lets Book have access to loopBooks function)
loopBooks.prototype = Object.create(book.prototype);

const bookOne = new book("james", "dont run", "356", "read");
const bookTwo = new book("Emmanuel", "Dune", "600", "read");

loopBooks();
//toggles the invisible class on the form to remove & display it
function displayForm() {
  toggleForm.classList.toggle("invisible");
}

//toggles form on when addBook is pressed
button.addEventListener("click", displayForm);

//toggles form off when submit it pressed
submitButton.addEventListener("click", displayForm);

/*
add button to each book!!!!
after the div is created in the loopBooks function
also create a new button element 
make the button a child of div with class remove
now the button is going to be on the display of everybook
next create a eventlistener for the button when pressed remove the book
problem: how do we know what book to remove when the book is pressed,
solution: every book has a data-attribute when the button is pressed 
it'll get the attribute which is going to be a number that number is 
going to be the index number of the array its in.
How do we add the data-attribute to it?
You add it to the constructor?


REMOVE THE VARIABLE i
MAKE THE BOOK DIV OUTSIDE THE LOOP
AND ASSIGN THE DATA ATTRIBUTE BASED ON THE ARRAYS INDEX




 */
