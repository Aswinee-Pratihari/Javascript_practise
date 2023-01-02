import {posts} from './Post.js'

//forEach
// posts.forEach((post)=>{
//     console.log(post);
// })

//filterPost
const filterPost=posts.filter(post=>{
    return post.userId===1;
})

// console.log(filterPost);

const mappedPost=filterPost.map(post=>{
    return post.id*10;
})

console.log(mappedPost)

//reduce
const reducedPost=mappedPost.reduce((sum,post)=>{
    return sum+post;
})

console.log(reducedPost);///total of all numbers