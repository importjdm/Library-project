//the books are going to be added to parent
const parent = document.querySelector(".bookContainer");
//Get button to be used w/ eventlistener
const button = document.querySelector("button");
//gets forms classes
let toggleForm = document.querySelector(".invisible.book-form");

//getting submit button
let submitButton = document.querySelector("input[type='submit']");

//initialize button to use outside of function
let $removeButton = "";
//initalizing index number
let libIndex = "";

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
    $removeButton = document.createElement("button"); //makes button
    let $readStatus = document.createElement("button");
    $readStatus.textContent = "Read Status";
    $removeButton.dataset.num = i; //add the data set attribute to remove button
    $removeButton.textContent = "Remove Book"; //button text
    $removeButton.classList.add("remove"); // class of button
    $div.classList.add("book", "book" + i); //classes of div
    let string = Object.entries(element)
      .map((x) => x.join(": "))
      .join("\n");
    $div.append(string);
    $buttonDiv.appendChild($removeButton);
    $buttonDiv.appendChild($readStatus);
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

//function that removes div from book conatiner
function removeBook(num) {
  library.splice(num, 1);
  let beGone = document.querySelector(".book" + num);
  beGone.remove();
}

//Changes reading status
function toggleRead() {
  if (this.Read === "Read") {
    this.Read = "Have not";
  } else {
    this.Read = "Read";
  }
}

toggleRead.prototype = Object.create(book.prototype);

//toggles form on when addBook is pressed
button.addEventListener("click", displayForm);

//toggles form off when submit it pressed
submitButton.addEventListener("click", displayForm);

//adding event listeners to remove button
parent.addEventListener("click", (e) => {
  console.log(e);
  const isButton = e.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else if (isButton) {
    let dataPoint = e.target.dataset.num; //data attribure assigned to button
    parseInt(dataPoint);
    removeBook(dataPoint);
  }
});

$readStatus.addEventListener("click");
/*
Add a button reading status button to each book!!!
creating another button to add insdie the loopBooks
make sure it fits currectly in the bookContainer 
add an eventlistener to that button 
when the button is clicked it we need to access Read property 
make a function with the book prototype to inherit the read property
when the button is clicked use ternary function to toggle between "Read" & "HaveNot"

LINKING READ STATUS BUTTON TO CORRECT BOOK READ PROPERTY 

 */
