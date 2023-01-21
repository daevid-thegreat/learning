const posts = [
    {Title:"The Lord", Author:"Tolkien", Year:1954},
    {Title:"The Hobbit", Author:"Tolkie", Year:1937},
    {Title:"The Silmarillion", Author:"Tolki", Year:1977}
]

function getpost(){
    setTimeout(() => {
        let output = ``;
        posts.forEach((post, index) => {
            output += `<li>${post.Title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// createPost({Title:"The Great One", Author:"Tolki", Year:1987}).then(getpost).catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10 ;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));