class Book {
  constructor(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}


let myBook = new Book (
  "L'Histoire de Tao",
  "Will Alexander",
  250);

let myOtherBook = new Book (
  "Le Héros du Vieux Meldrum",
  "Will Alexander",
  320);

console.log(myBook);
console.log(myOtherBook);

/*
myBook:
{
  title : "L'histoire de Tao",
  author: "Will Alexandeer",
  pages : 250
}

*/
