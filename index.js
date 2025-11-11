
    //   Fonction typeWriter () qui crée l'effet "machine à écrire"
    //   @param {HTMLElement} element - L'endroit où afficher le texte
    //   @param {string} text - Le texte à écrire
    //   @param {number} speed - Vitesse entre chaque lettre (en millisecondes)
     

function typeWriter(element, text, speed = 50) {
    element.innerHTML = ""; // On efface tout texte précédent dans la zone

    let i = 0; // Compteur pour suivre la position actuelle dans le texte

    // On crée un élément "curseur" visuel qui clignote pendant la saisie
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    element.appendChild(cursor); // On ajoute le curseur dans la zone du texte

    // "setInterval" exécute une fonction plusieurs fois à intervalles réguliers
    const interval = setInterval(() => {

    if (i < text.length) {
        // Insère la lettre suivante juste avant le curseur
        cursor.insertAdjacentText('beforebegin', text.charAt(i));
        i++; // On passe à la lettre suivante
    } else {
        // Quand toutes les lettres sont affichées :
        clearInterval(interval); // On arrête le minuteur
        cursor.remove();          // Et on retire le curseur clignotant
    }

    }, speed); // délai entre chaque lettre (par défaut 50 ms)
}


// Sélectionne toutes les images dans la page
const images = document.querySelectorAll('img');
// Sélectionne toutes les images pairs
const imgpr = document.querySelectorAll('.pair'); 
// Sélectionne toutes les images impaires 
const imgimpr = document.querySelectorAll('.impair');

const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
const i4 = document.getElementById('i4');
const i5 = document.getElementById('i5');

// Pour chaque image, on ajoute un "écouteur d’événement"
images.forEach(img => {
    img.addEventListener('click', () => {
        
        // Sélectionne le div juste en dessous de l’image
        const textElement = img.nextElementSibling;

        // Récupère le texte stocké dans "data-text"
        const text = img.dataset.text;

        // Lance l’animation de saisie
        typeWriter(textElement, text, 20); // vitesse = 40 ms entre chaque lettre

        
    });
});


imgpr.forEach(img => {
    img.addEventListener('click', () => {
        img.style.boxShadow = '0 -2px 8px 2px  rgba(251, 171, 67, 0.68)';;  
    });
});


imgimpr.forEach(img => {
    img.addEventListener('click', () => {
        img.style.boxShadow = '0 -2px 8px 2px rgba(12, 184, 241, 0.5)';
    });
});

console.log("test3");












