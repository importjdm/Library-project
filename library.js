const parent = document.getElementById("parent");
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

//loops through library array and displays it
function loopBooks() {
  library.forEach((element) => {
    let $div = document.createElement("div");
    let book = element;
    $div.append(book);
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
tat least we got somewhere 
i guess convert them to strings 
and they should print out fine */
