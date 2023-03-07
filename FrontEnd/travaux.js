// Récupération des projetws depuis l'API
const url = "http://localhost:5678/api/works";
const res = await fetch(url);
const works = await res.json();

function fetchProjets(works) {
    for (let i = 0; i < works.length; i++) {

        const article = works[i];

        const galleryProjet = document.querySelector(".gallery");

        // Création balise des projets
        const projet = document.createElement("figure");

        // Création des autres balises
        const imageProjet = document.createElement("img");
        imageProjet.src = article.imageUrl;
        const titleProjet = document.createElement("figcaption");
        titleProjet.innerText = article.title;
        imageProjet.alt = article.title;
        // On rattache la balise article a la section Fiches
        galleryProjet.appendChild(projet);
        projet.appendChild(imageProjet);
        projet.appendChild(titleProjet);

    }

}

document.querySelector(".gallery").innerHTML = "";
fetchProjets(works);

const boutonTous = document.getElementById('btn-filtrer-tous');

boutonTous.addEventListener("click", () => {
    document.querySelector(".gallery").innerHTML = "";
    fetchProjets(works);
});

const boutonObjets = document.getElementById('btn-filtrer-objets');

boutonObjets.addEventListener("click", () => {
    const projetsFiltreesObjets = works.filter((work) => {
        if (work.category.name == "Objets") {
            return true;
        } 
        return false;
    });
    document.querySelector(".gallery").innerHTML = "";
    fetchProjets(projetsFiltreesObjets);
});

const boutonAppartements = document.getElementById('btn-filtrer-appartements');

boutonAppartements.addEventListener("click", () => {
    const projetsFiltreesAppartements = works.filter((work) => {
        if (work.category.name == "Appartements") {
            return true;
        } 
        return false;
    });
    document.querySelector(".gallery").innerHTML = "";
    fetchProjets(projetsFiltreesAppartements);
});
