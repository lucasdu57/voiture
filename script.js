const params = new URLSearchParams(window.location.search);
const car = params.get("car");

const title = document.getElementById("title");
const image = document.getElementById("image");
const description = document.getElementById("description");

if (car === "ferrari") {
    title.textContent = "Ferrari";
    image.src = "https://tse4.mm.bing.net/th/id/OIP.rHj30GrCaRlZnk3-mOlkIgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3";
    description.textContent =
        "Ferrari est une marque automobile italienne légendaire fondée en 1939. Elle est mondialement connue pour ses performances extrêmes, son design élégant et son implication historique en Formule 1. Les Ferrari symbolisent le luxe, la vitesse et la passion automobile.";
}

if (car === "lamborghini") {
    title.textContent = "Lamborghini";
    image.src = "https://tse1.mm.bing.net/th/id/OIP.WTvdsCyA0_W5BDnLWIJviAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3";
    description.textContent =
        "Lamborghini est célèbre pour ses supercars au design agressif et futuriste. Avec ses moteurs puissants et son style unique, la marque italienne est devenue une référence dans le monde des voitures de luxe et de performance.";
}

if (car === "porsche") {
    title.textContent = "Porsche";
    image.src = "https://th.bing.com/th/id/R.b8cff158a2513f327b8b79200b4767ea?rik=avULvKXW0i9dkg&pid=ImgRaw&r=0";
    description.textContent =
        "Porsche est une marque allemande reconnue pour sa précision, son efficacité et ses performances. La Porsche 911 est l’un des modèles les plus emblématiques de l’histoire automobile.";
}
