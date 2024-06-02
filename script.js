function redirectToWhatsApp() {
    window.location.href = "https://wa.me/573005722844";
}

const noTitles = [
    "¿Dale al si ome?",
    "Yo se que si quieres, dale al si",
    "Piénsalo otra vez, ¿quieres mi WhatsApp?",
    "dale que si dag",
    "Tal vez deberías reconsiderar, ¿quieres mi WhatsApp?",
    "Estás perdiendo la oportunidad de tener mi WhatsApp",
    "Aja todavia",
    "dale que siii",
    "ajaaaaaaaaaaaa",
    "Dale al si que yo espero"
];

let noTitleIndex = 0;

function changeTitle() {
    const title = document.getElementById('title');
    title.textContent = noTitles[noTitleIndex];
    noTitleIndex = (noTitleIndex + 1) % noTitles.length;

    const yesButton = document.getElementById('yesButton');
    let size = parseInt(window.getComputedStyle(yesButton).getPropertyValue('font-size'));
    size += 30;
    yesButton.style.fontSize = size + 'px';
}

const messages = [
    "¡Ya sabía que ibas a presionar 'Sí'!",
    "¡Ya sabía que ibas a presionar 'Sí'!",
    "¡Ya sabía que ibas a presionar 'Sí'!",
    "¡Ya sabía que ibas a presionar 'Sí'!",
    "¡Ya sabía que ibas a presionar 'Sí'!",
    "¡Ya sabía que ibas a presionar 'Sí'!",
    
];

function confirmYes() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const confirmationMessage = messages[randomIndex];
    alert(confirmationMessage);
    redirectToWhatsApp();
}
