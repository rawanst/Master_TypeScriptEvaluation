export interface Article {
    title: string,
    auteur: string
}

export interface Auteur {
    nom: string,
    email: string,
    acticles: Array<Article>
}

export function render(data){
    let html = "";
    data.forEach(auteur => {
        const articles = auteur.articles
        html += `
        <article>
            <h1${auteur.nom}</h1>
            <p>${auteur.email}</p>
            <ul>
                ${articles.forEach(article => {
                     html += `<li>${article.title}</li>`
                })}
            </ul>
        </article>
        `
    });
    document.querySelector("main").innerHTML = html;
}