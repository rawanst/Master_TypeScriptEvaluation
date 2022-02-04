//Interface
export interface Article {
    title: string,
    auteur: string
}

export interface Auteur {
    name: string,
    email: string
}

//Data
let auteurs : Array<Partial<Auteur>>;
let articles :Array<Partial<Article>>;

document.addEventListener("DOMContentLoaded", async () => {
    const auteursData = await fetch("https://jsonplaceholder.typicode.com/users"); 
    const articlesData = await fetch("https://jsonplaceholder.typicode.com/posts"); 
    const auteursJson = (await auteursData.json()) as Array<Partial<Auteur>>;
    auteurs = auteursJson;
    const articlesJson = (await articlesData.json()) as Array<Partial<Article>>;
    articles = articlesJson;
    render(auteurs,articles);
})

//Rendu html
export function render(auteurs: Array<Partial<Auteur>>, articles: Array<Partial<Article>>){
    const div = document.querySelector('.list-auteurs') as HTMLBodyElement;
    div.innerHTML ="";
    let html = "";
    auteurs.forEach(auteur => {
        html += `
        <article>
            <h1${auteur.name}</h1>
            <p>${auteur.email}</p>
            <ul>
                ${articles.forEach(article => {
                     html += `<li>${article.title}</li>`
                })}
            </ul>
        </article>
        `
    });
    div.innerHTML = html;
}

