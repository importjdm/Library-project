const parent = document.querySelector(".bookContainer");
let visible = document.querySelector;
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
    i += 1;
    let $div = document.createElement("div");
    $div.classList.add("book", "book" + i);
    let string = Object.entries(element)
      .map((x) => x.join(": "))
      .join("\n");
    $div.append(string);
    parent.append($div);
  });
}
//set loopsBooks prototype to a copy of book
//(lets Book have access to loopBooks function)
loopBooks.prototype = Object.create(book.prototype);

const bookOne = new book("james", "dont run", "356", "read");
const bookTwo = new book("Emmanuel", "Dune", "600", "read");

loopBooks();

/*

figure out how to make it disapear
figure how to make it appear when your press the button

form class starts as display: block
set it to to none
then write code when button is clicked
grab the forms class and change the class to 
new class called "show" 
in css the show class will have the same stuff as the book-form class
except the display will be block to show form
when form is submitted the class will be changed back to hide form
 */
