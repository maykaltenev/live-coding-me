/**
 * Given the following array of blog posts,
 * create the following functions:
 *
 * a) Create a function that will search for a given text in all text properties of a blog post and
 * return the results in an array. In case the text was not found in any of the blog post properties, then return the text 'No matching posts found'
 * 
 * b) Create a function that edits a given post. The user should be able to edit 
 * any object property he would like and should return the updated object
 * If the post is not found then the function should return 'Post not found'
 * 
 * c) create a function that deletes a post with a given id from the array 
 * and returns the updated array
 * 
 * d) create a function that displays the comments of a given post one per row
 */

const blogPosts = [
    {
        id: 1,
        title: 'The AI in military',
        text: `And when the time he was in front of the army were cut short.
    The horse would have been trampled to pieces,
    And the men who would have been killed, and the whole town would have been burned.
    But I have been there, and we are done, for the king has gone forward,
    And if he is still in front of us, it says that it is time for him to see it again.
    Now let us come back to the place,
    For our own sake I will take an oath.
    Then shall we come back and lay hands on their bodies,
    And all that has no other will be eaten
    And there will be a thousand thousand more people to be massacred.
    Now let us go and lay hands on theirs.`,
        author: 'deepai.org',
        description: 'text generated from a machine in deepai.org',
        comments: ['Awesome posts, thanks!', 'Cannot agree more']
    },
    {
        id: 2,
        title: 'A garden in Babylon',
        text: `As a result, the first of the ten disciples of Samaria, 
    called the "Tray-Bearer of Wisdom," was known by her as the 
    "Empire of the Tungis." 
    The Tungis are the divine spirits of the Dead and of the Prophets. 
    She taught these beings that in every person who does not know any of them,
        all they can do is to look for a spirit that has been placed at the root 
        of any man's estate. She even stated this to the Prophet Joseph.`,
        author: 'deepai.org',
        description: 'text generated from a machine in deepai.org',
        comments: ['Amazed wow!', 'I dislike that']
    }
]

// function search(searchText) {
//     let arrayOfMatchedObjects = blogPosts.filter(object => {
//         return JSON.stringify(object)
//             .toString()
//             .toLowerCase()
//             .includes(searchText);
//     });
//     return arrayOfMatchedObjects;
// }
// console.log(search('pieces'));
// console.log('-----------')

// console.log(searchBlog(blogPosts, 'pieces'))
// function searchText(array, text) {
//     const results = [];
//     array.map((item) => {
//         if (item.title.includes(text) ||
//             item.text.includes(text) ||
//             item.description.includes(text)) {
//             results.push(item);
//         }
//     });

//     return results.length ? results : "No matching posts found";
// }
// console.log('------------03A--------------')
// console.log(searchText(blogPosts, "pieces"));

// * b) Create a function that edits a given post. The user should be able to edit 
// * any object property he would like and should return the updated object
// * If the post is not found then the function should return 'Post not found'


function editPost(array, postId, field, value) {
    let idx = -1;
    array.map((item, index) => {
        if (item.id === postId) {
            idx = index;
        }
    });
    if (idx < 0) {
        return 'Post not found'
    }
    array[idx][field] = value;
    return array[idx];
}

console.log(editPost(blogPosts, 2, 'title', 'Top Gear'));
console.log(editPost(blogPosts, 1, 'text', 'Super Film'));