//the books are going to be added to parent
const parent = document.querySelector(".bookContainer");
//Get button to be used w/ eventlistener
const button = document.querySelector("button");
//gets forms classes
let toggleForm = document.querySelector(".invisible.book-form");

//getting submit button
let submitButton = document.querySelector("input[type='submit']");
//creates read status button
let $readStatus;

//initialize button to use outside of function
let $removeButton = "";

//initalize variable
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
function loopBooks(som) {
  library.forEach((element) => {
    let $div = document.createElement("div"); //div evrything is going to be on
    let $buttonDiv = document.createElement("div"); //container for remove book
    $buttonDiv.classList.add("rBook"); //class of container for remove book
    i = library.indexOf(element); //index of current
    $removeButton = document.createElement("button"); //makes button
    $readStatus = document.createElement("button");
    $readStatus.dataset.num = i;
    $readStatus.textContent = "Read Status";
    $readStatus.classList.add("status");
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

const bookOne = new book("james", "dont run", "356", "Read");
const bookTwo = new book("Emmanuel", "Dune", "600", "Read");
const bookThree = new book("Lela", "Keep Going", "666", "Have not");

loopBooks();
//toggles the invisible class on the form to remove & display it
function displayForm() {
  toggleForm.classList.toggle("invisible");
}

//function that removes div from book conatiner
function removeBook(num, isButton) {
  library.splice(num, 1);
  let beGone = document.querySelector(".book" + num);
  beGone.remove();
  updateDataSet(num);
}
//updates all data-num values & class book# with current index position
function updateDataSet() {
  let i = 0;
  let x = 0;
  while (i < library.length) {
    let getButton = document.querySelectorAll(`button[data-num="${i}"]`);
    if (getButton.length === 0) {
      getButton = document.querySelectorAll(`button[data-num="${++x}"]`);
      getButton.forEach((element) => {
        element.dataset.num = i;
        let newClass = element.parentNode.parentNode;
        newClass.setAttribute("class", "");
        newClass.classList.add("book", "book" + i);
      });
    } else {
      getButton.forEach((element) => {
        element.dataset.num = i;
        let newClass = element.parentNode.parentNode;
        newClass.setAttribute("class", "");
        newClass.classList.add("book", "book" + i);
      });
      ++x;
    }
    i++;
  }
}

//Changes reading status
function toggleRead(index, dataPoint) {
  let readOrNot = index.Read;
  if (readOrNot === "Read") {
    index.Read = "Have not";
  } else {
    index.Read = "Read";
  }
  let bookToString = Object.entries(index)
    .map((x) => x.join(": "))
    .join("\n");
  const replaceBook = (document.querySelector(
    //changes book div text to new s
    ".book" + dataPoint
  ).firstChild.data = bookToString);
}

//give access to the book properties
toggleRead.prototype = Object.create(book.prototype);

//toggles form on when addBook is pressed
button.addEventListener("click", displayForm);

//toggles form off when submit it pressed
submitButton.addEventListener("click", displayForm);

//listens for when remove is pressed
parent.addEventListener("click", (e) => {
  const isButton = e.target.className;
  let dataPoint = e.target.dataset.num;
  if (isButton === "remove") {
    parseInt(dataPoint);
    removeBook(dataPoint, isButton);
  }
  return;
});

//listens to when button with Read status class is pressed
parent.addEventListener("click", (e) => {
  let isButton = e.target.className;
  let dataPoint = e.target.dataset.num;
  if (isButton === "status") {
    let ifRead = library[dataPoint];
    toggleRead(ifRead, dataPoint);
  }
});
