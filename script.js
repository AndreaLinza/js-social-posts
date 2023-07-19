

const posts = [

    {
        id: 1,
        month: Math.floor((Math.random()*11)+1),
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        month: Math.floor((Math.random()*11)+1),
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        month: Math.floor((Math.random()*11)+1),
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        month: Math.floor((Math.random()*11)+1),
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        month: Math.floor((Math.random()*11)+1),
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
]


const mainPostsContainer = document.getElementById("container")





// for (let i = 0; i < posts.length; i++){
    
    //     const itaDate = posts[i].created.split("-")
    //     posts[i].created = `${itaDate[2]}/${itaDate[1]}/${itaDate[0]}` 
    // }
    
    
    posts.forEach((post, i) => {
        
    const postContainer = document.createElement("div")
    postContainer.classList.add("post")
    //postContainer.dataset.index = 1
    const itaDate = new Date(post.created)
    itaDate.toLocaleString()
    


    postContainer.innerHTML = `
    <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${itaDate}</div>
            </div>
        </div>
    </div>
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="media">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#0" data-index='${i}' data-postid="${post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div>
    </div>`
    
    
    mainPostsContainer.append(postContainer)
})


const likeBtn = document.querySelectorAll(".like-button")
const likeCounter = document.querySelectorAll(".js-likes-counter")
const likeID = []






for(let i = 0; i<likeBtn.length; i++){

    const button = likeBtn[i]
    const counter = likeCounter[i]
    
    
    button.addEventListener("click", function(){
        

        if(button.classList.contains("like-button--liked")){

            button.classList.remove("like-button--liked")

            posts[i].likes--

            counter.innerHTML = posts[i].likes
        }
        else{

            button.classList.add("like-button--liked")

            posts[i].likes++
            
            counter.innerHTML = posts[i].likes

            likeID.push(posts[i].id)

            console.log(likeID)
            
        }
    })
    
}
















// likeBtn.forEach( button => {

//     button.addEventListener("click", function(){

//     if(likeBtn.classList.contains("like-button--liked")){
        
//         likeBtn.classList.remove("like-button--liked")
//         posts[i].likes--
//         counter
//     } 


//////////////////////////////////////////////////////////// Funzionava a ma non mi prende il classList 

        //     let currentPost = posts[indexBtn]
    //     this.classList.toggle("text-success")
        
    //     likeID.push(button)

    //     const likeListEL = document.querySelectorAll(".js-likes-counter")
    //     const addLike = (++currentPost.likes)
    //    // const removeLike = (--currentPost.likes)
    //     likeListEL.forEach(element => {

    //         element.innerHTML = addLike
    //         //element.innerHTML = removeLike
    //   })
        
//     })
// })










// post.forEach(element => {

//     const postHeader = document.createElement("div")
//     postHeader.classList.add("post__header")



// });


// post.forEach(element => {
    
//     const postMeta = document.createElement("div")
//     postMeta.classList.add("post-meta")
//     postMeta.innerHTML = `<div class="post-meta__icon">
//     <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
//     </div>`
    
//     postHeader.append(postMeta)
// });

// post.forEach(element => {
    
//     const {}
// });


// postContainer.append(postHeader)
