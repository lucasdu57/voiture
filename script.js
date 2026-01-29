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

    if (car === "bugatti") {
        title.textContent = "Bugatti";
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEGQdWCG_ymQ59uAir8KOzCSEJaj8JMtcZA&s"
        description.textContent = "Bugatti est une marque française ultra-luxe connue pour ses performances extrêmes.";
    }

    if (car === "mclaren") {
        title.textContent = "McLaren";
        image.src = "https://www.motorsport-academy.fr/img/modules/kookcarouselproduit/product-252-position-0-jpg.jpg"
        description.textContent = "McLaren est un constructeur britannique spécialisé dans les supercars et la F1.";
    }

    if (car === "astonmartin") {
        title.textContent = "Aston Martin";
        image.src = "https://www.largus.fr/images/styles/max_1300x1300/public/2023-05/aston-martin-db12-2023-vert-avd-mk_14.jpg?itok=J_JRXoRB"
        description.textContent = "Aston Martin incarne l’élégance et la sportivité britannique.";
    }

    if (car === "alpine") {
        title.textContent = "Alpine";
        image.src = "https://images.rtl.fr/~c/2000v2000/rtl/www/1274419-la-nouvelle-alpine-a110.jpg"
        description.textContent = "Alpine est une marque française sportive, célèbre pour l’A110.";
    }

    if (car === "bmw") {
        title.textContent = "BMW";
        image.src = "https://www.bmw.fr/fr/gamme-bmw/coupe/_jcr_content/root/maincontent/contentblueprint_312_1322136309/contentblueprint/image.coreimg.jpeg/1736430056315/bmw-serie-8-coupe.jpeg"
        description.textContent = "BMW est un constructeur allemand alliant luxe, sport et technologie.";
    }

    if (car === "mercedes") {
        title.textContent = "Mercedes";
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaalGNrwFkefUVz9ipHLGg1mgM4rCwGblz4w&s"
        description.textContent = "Mercedes-Benz est une référence mondiale en luxe et innovation automobile.";
    }

    if (car === "audi") {
    title.textContent = "Audi";
    image.src = "https://res.cloudinary.com/dkugkfusy/image/upload/v1677768765/cars/models/ilesmure6yl4m2vfg5qe.webp";
    description.textContent =
        "Audi est une marque allemande connue pour son design moderne et sa technologie quattro.";
}

if (car === "tesla") {
    title.textContent = "Tesla";
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfSm2YHju9Un60dittRRTh6FdVgE-1Ce39Q&s";
    description.textContent =
        "Tesla est un constructeur américain pionnier des voitures électriques haut de gamme.";
}

if (car === "landrover") {
    title.textContent = "Land Rover";
    image.src = "https://media.cdn-jaguarlandrover.com/api/v2/images/115519/w/680/h/383.jpg";
    description.textContent =
        "Land Rover est une marque britannique spécialisée dans les SUV de luxe et le tout-terrain.";
}

if (car === "toyota") {
    title.textContent = "Toyota";
    image.src = "https://www.automobile-propre.com/_next/image/?url=https%3A%2F%2Fcdn.automobile-propre.com%2Fuploads%2F2016%2F02%2FToyota-C-HR-SUV-hybride-16.jpg&w=1920&q=75";
    description.textContent =
        "Toyota est un constructeur japonais réputé pour sa fiabilité, ses innovations hybrides et sa longévité.";
}

if (car === "jeep") {
    title.textContent = "Jeep";
    image.src = "https://cdnwp.dealerk.com/d0713c4e/uploads/sites/173/2022/09/produit-phare-jeep-scaled.jpg";
    description.textContent =
        "Jeep est une marque américaine emblématique spécialisée dans les SUV et le tout-terrain.";
}

if (car === "volkswagen") {
    title.textContent = "Volkswagen";
    image.src = "https://www.caroom.fr/guide/content/uploads/2025/06/volkswagen-polo.jpg";
    description.textContent =
        "Volkswagen est un constructeur allemand reconnu pour ses voitures polyvalentes, fiables et populaires.";
}

if (car === "peugeot") {
    title.textContent = "Peugeot";
    image.src = "https://journalauto.com/wp-content/uploads/2023/09/2008-E.jpg";
    description.textContent =
        "Peugeot est une marque française alliant design moderne, confort et technologies avancées.";
}

if (car === "renault") {
    title.textContent = "Renault";
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegrOx7h3MKZVIi5t7CDTuTI4KR468Ye82Nw&s";
    description.textContent =
        "Renault est un constructeur français historique, innovant dans l’électrique et les véhicules du quotidien.";
}

if (car === "bentley") {
    title.textContent = "Bentley";
    image.src = "https://pictures.dealer.com/b/bentleybeverlyhills/0718/45a98a7a5bdca9dc2d795c34f7d42d98x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520";
    description.textContent =
        "Bentley est un constructeur anglais historique et cher, innovant dans l’électrique et les véhicules du quotidien.";
}

if (car === "opel") {
    title.textContent = "Opel";
    image.src = "https://cdn.motor1.com/images/mgl/9m7NQ/s1/opel-astra-2022.jpg";
    description.textContent = "Opel est un constructeur allemand connu pour ses voitures fiables et accessibles.";
}

if (car === "mazda") {
    title.textContent = "Mazda";
    image.src = "https://cdn.motor1.com/images/mgl/0ANjR/s1/mazda-3-2023.jpg";
    description.textContent = "Mazda est une marque japonaise reconnue pour son design et ses moteurs performants.";
}

if (car === "ford") {
    title.textContent = "Ford";
    image.src = "https://cdn.motor1.com/images/mgl/BEooB/s1/ford-mustang-2024.jpg";
    description.textContent = "Ford est un constructeur américain emblématique, célèbre pour la Mustang.";
}

if (car === "citroen") {
    title.textContent = "Citroën";
    image.src = "https://cdn.motor1.com/images/mgl/6ZZzR/s1/citroen-c5-x.jpg";
    description.textContent = "Citroën est une marque française axée sur le confort et l’innovation.";
}

if (car === "fiat") {
    title.textContent = "Fiat";
    image.src = "https://cdn.motor1.com/images/mgl/vxX0z/s1/fiat-500-2023.jpg";
    description.textContent = "Fiat est un constructeur italien célèbre pour ses voitures urbaines.";
}

if (car === "chevrolet") {
    title.textContent = "Chevrolet";
    image.src = "https://cdn.motor1.com/images/mgl/kJJqZ/s1/chevrolet-corvette-c8.jpg";
    description.textContent = "Chevrolet est une marque américaine mythique, connue pour la Corvette.";
}

if (car === "nissan") {
    title.textContent = "Nissan";
    image.src = "https://cdn.motor1.com/images/mgl/xqq9x/s1/nissan-gt-r.jpg";
    description.textContent = "Nissan est un constructeur japonais reconnu pour la GT-R.";
}

if (car === "jaguar") {
    title.textContent = "Jaguar";
    image.src = "https://cdn.motor1.com/images/mgl/JJJJx/s1/jaguar-f-type.jpg";
    description.textContent = "Jaguar est une marque britannique de luxe et de sport.";
}

if (car === "hyundai") {
    title.textContent = "Hyundai";
    image.src = "https://cdn.motor1.com/images/mgl/RRr9p/s1/hyundai-ioniq-5.jpg";
    description.textContent = "Hyundai est une marque coréenne moderne et innovante.";
}

if (car === "alfaromeo") {
    title.textContent = "Alfa Romeo";
    image.src = "https://cdn.motor1.com/images/mgl/JZqYp/s1/alfa-romeo-giulia.jpg";
    description.textContent = "Alfa Romeo incarne la sportivité et le style italien.";
}

if (car === "dacia") {
    title.textContent = "Dacia";
    image.src = "https://cdn.motor1.com/images/mgl/MkB1Z/s1/dacia-duster.jpg";
    description.textContent = "Dacia est connue pour ses voitures robustes et accessibles.";
}

function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
}

/********************
  CONFIG
********************/
const PASSWORD = "admin";

/********************
  AU CHARGEMENT DE LA PAGE
********************/
const maintenance = document.getElementById("maintenance");

// si admin déjà connecté → on enlève maintenance
if (localStorage.getItem("admin") === "true") {
    if (maintenance) {
        maintenance.remove();
        document.body.style.overflow = "auto";
    }
} else {
    // sinon on bloque le scroll
    document.body.style.overflow = "hidden";
}

/********************
  LOGIN
********************/
function showLogin() {
    document.getElementById("loginBox").classList.remove("hidden");
}

function login() {
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (pass === PASSWORD) {
        // on mémorise la connexion
        localStorage.setItem("admin", "true");

        // on enlève l’écran maintenance
        maintenance.remove();
        document.body.style.overflow = "auto";
    } else {
        error.textContent = "Mot de passe incorrect";
    }
}

/********************
  DÉCONNEXION
********************/
function logout() {
    localStorage.removeItem("admin");
    location.href = "index.html"; // retour accueil + maintenance

}
