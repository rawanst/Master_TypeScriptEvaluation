import {render, Auteur, Article } from './lib.js';

let data : any ; 

document.addEventListener("DOMContentLoaded", async () => {
    const dataUsers = await fetch("https://jsonplaceholder.typicode.com/users"); 
    const dataPosts = await fetch("https://jsonplaceholder.typicode.com/posts"); 
    const users = (await dataUsers.json()) as Array<Partial<User>>;
    utilisateurs = users;
    const posts = (await dataPosts.json()) as Array<Partial<Post>>;
    articles = posts;
    getDatas(users,posts);
    
})

