/**
 * 10 easy
 * Create an array of objects, where each object describes a book
 * and has properties for the title (a string), author (a string), 
 * and alreadyRead (a boolean indicating if you read it yet).
 * Iterate through the array of books. 
 * For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 * Now use an if/else statement to change the output depending on whether you read it yet or not. 
 * If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', 
 * and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
 */

let bookShelf = [
    {
        title: 'Harry Potter Philosopher Stone',
        author: 'J.K.Rowlign',
        read: true,
    },
    {
        title: 'Harry Potter Chamber of Secrets',
        author: 'J.K.Rowlign',
        read: true,
    },
    {
        title: 'Harry Potter Prisoner of Azkaban',
        author: 'J.K.Rowlign',
        read: true,
    },
    {
        title: 'Harry Potter Goblet of Fire',
        author: 'J.K.Rowlign',
        read: true,
    },
    {
        title: 'Bore Hole',
        author: 'Joseph Mellen',
        read: false,
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        read: false,
    },
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        read: true,
    },
]
for (let i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].read === false) {
        console.log(`You still need to read ${bookShelf[i].title} by ${bookShelf[i].author}.`)
    } else {
        console.log(`You already read ${bookShelf[i].title} by ${bookShelf[i].author}.`)
    }
}