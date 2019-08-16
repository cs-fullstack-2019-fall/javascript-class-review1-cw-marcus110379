//alert("test");
// Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author. Create 3 instances of Books and put them in an array. Afterwards print each one in the format below:
// //     ```
// // The book [BOOK NAME] has [RATING] stars!!!
// // ```
function main() {
    let bookArray = [];

    class Books {
        constructor(name, rating, genre, author) {
            this.name = name;
            this.rating = rating;
            this.genre = genre;
            this.author = author;

        }


    }

    let user1books = new Books("life", "4", "fiction", "Bach");
    let user2books = new Books("horse", "5", "non-fiction", "Johnson");
    let user3books = new Books("dogs", "5", " non-fiction", "paul");

    bookArray.push(user1books);
    bookArray.push(user2books);
    bookArray.push(user3books);


    bookArray.forEach(function (eachElement) {
        console.log("the book " + eachElement.name + " has " + eachElement.rating + " stars!!!");

    });

}


main();




