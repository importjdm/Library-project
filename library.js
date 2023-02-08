//library of books
let library = [];

//constructor
function book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  library.push(this);
}

//loops through library array
function loopBooks() {
  library.forEach((element) => console.log(element));
}
//set loopsBooks prototype to a copy of makeBook
//(lets makeBook have access to loopBooks function)
loopBooks.prototype = Object.create(book.prototype);

const bookOne = new book("james", "dont run", "356", "read");
const bookTwo = new book("Emmanuel", "Dune", "600", "read");

loopBooks();

const displayBook = document.querySelector(".display-book1");

/*displayBook.inner*/
//get div inner text and loop it to display all books on screen */
