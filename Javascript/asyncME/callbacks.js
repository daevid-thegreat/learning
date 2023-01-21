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


function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({Title:"The Great One", Author:"Tolki", Year:1987}, getpost);