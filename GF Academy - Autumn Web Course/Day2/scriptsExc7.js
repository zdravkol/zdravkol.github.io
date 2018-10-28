// Create an object for the details of your favourite book (author, title, year)
// Write out the whole object to the console
let book = { title: 'The Education of Little Tree', author: "Forrest Carter", year: "1976" };
console.log(book)
console.log(book['title'], book['author'], book['year']);
//Write out the author of the book
//Write out the title of the book
//Write out the year of the book
console.log(book['author']);
console.log(book['title']);
console.log(book['year']);
// Create two more book objects (with the same details)
// Put all of them into an array
let book2 = { title: 'Alchemyst', author: 'Paulo Coelho', year: '2005' };
let book3 = { title: 'MyBook', author: 'NoName', year: '2000' };
let bookArray = [book, book2, book3];
//Write all of them to the console using a forEach
//Write out the title for each
bookArray.forEach(object => {
    console.log(object['title']);
});
// Write out I recommend reading TitleOfBook if the year is fresher than 2010
// Write out You've probably already read TitleOfBook otherwise
bookArray.forEach(object => {
    if (object['year'] > 2000) {
        console.log('I reccoment reading: ' + object['title']);
    }
    else {
        console.log("you have probably have read: " + object['title']);
    }
})


