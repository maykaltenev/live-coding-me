/**
 * The Cat
 * Create a virtual cat
 * Write a class that represents a cat. It should have properties for 
 * tiredness, hunger, lonliness and happiness
 * 
 * Next, write methods that increase and decrease those properties. 
 * 
 * Call them something that actually represents what would increase or decrease these things,
 * like "feed", "sleep", or "pet".
 * 
 * Last, write a method that prints out the cat's status in each area. 
 * (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
 * 
 * Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
 * Bonus: Make the functions as arbitrary as cats are - 
 * sometimes make it so the cat doesn't want to be petted.
 */
class Cat {
    constructor(name, tiredness, hunger, lonliness, happiness) {
        this.name = name;
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;

    }
    feed(food) {
        if (this.hunger >= 80) {
            console.log(`${this.name} is starving!`);
        }
        if (food = 'fish') {
            this.hunger = 0;
            this.happiness = 100;
            this.tiredness += 75;
            console.log('Meow! Fish is great!')
        } else {
            this.hunger -= 25;
            this.tiredness += 50;
            console.log(`${this.name}love ${food}!`);
        }
        console.log(`${this.name} hunger is ${this.hunger}`)
    }
    play(activity) {
        if (activity === 'ball') {
            this.happiness += 50;
        } else {
            this.happiness += 25;
        }
        console.log(`${this.name} happiness is ${this.happiness}`)
        console.log(`${this.name} enjoy ${activity}`);
    }
    sleep() {
        if (this.tiredness >= 80) {
            this.tiredness -= 100;
            console.log(`${this.name} is really tired, need to sleep!`);
        } else {
            this.tiredness -= 25;
            console.log(`${this.name} is taking a nap!`);
        }
        console.log(`${this.name} tiredness is ${this.tiredness}`);
    }
    pet() {
        if (this.lonliness >= 80) {
            this.lonliness -= 50;
            console.log(`${this.name} is really lonely and happy to see you!`);
        } else if (this.lonliness <= 25) {
            console.log(`${this.name} doesn't want to be bordered!`)
        } else {
            this.lonliness -= 25;
            console.log(`${this.name} is enjoying your hugs!`);
        }
        console.log(`${this.name} tiredness is ${this.lonliness}`);
    }
    status() {
        console.log(`The cat ${this.name} is ${this.tiredness} tired, ${this.hunger} hungry, ${this.lonliness} lonely and ${this.happiness} happy!`)
    }
}
let chicko = new Cat('Chicko', 80, 80, 80, 25);
console.log(chicko.status())
console.log(chicko.feed('fish'))
console.log(chicko.pet())
console.log(chicko.pet())
console.log(chicko.pet())
console.log(chicko.play('dance'))
console.log(chicko.sleep())

/**
 * The Reading List
 * Crate an object-oriented book-list!
 * Write a class BookList
 * then create another class called Book
 * 
 * BookLists should have the following properties:
 * Number of books marked as read
 * Number of books marked not read yet
 * A reference to the next book to read (book object)
 * A reference to the current book being read (book object)
 * A reference to the last book read (book object)
 * An array of all the Books
 * 
 * Each Book should have several properties:
 * Title
 * Genre
 * Author
 * Read (true or false)
 * Read date, can be blank, otherwise needs to be a JS Date() object
 * 
 * Every Booklist should have a few methods:
 * .add(book) should add a book to the books list.
 * .finishCurrentBook() which should do the following:
 * should mark the book that is currently being read as "read"
 * Give it a read date of new Date(Date.now())
 * Change the last book read to be the book that just got finished
 * Change the current book to be the next book to be read
 * Change the next book to be read property to be the first unread book you find
 *  in the list of books
 * 
 * Booklists and Books might need more methods than that. 
 * Try to think of more that might be useful.
 */
class BookList {
    constructor(markedAsRead, notReadYet, nextBook, currentBook, lastBook) {
        this.markedAsRead = markedAsRead;
        this.notReadYet = notReadYet;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
        this.allBooks = [];
    }
}
class Book {
    constructor(title, genre, author, read, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = new Date(readDate);

    }
}
let harryPotter = new Book('Philosopher Stone', 'fantasy', 'J.K.Rowling', true, '2005, 6, 5');
console.log(harryPotter);
let lordOfTheRings = new Book('Two Towers', 'fantasy', ' J. R. R. Tolkien.', true, '2008, 12, 4');
console.log(lordOfTheRings)
let hungerGames = new Book('The Hunger Games', 'fantasy', 'Suzanne Collins', false, '2011,4,2');
console.log(hungerGames)