function openPopup(pet) {
    // Configura los elementos del popup con los datos de la tarjeta
    document.getElementById("popup-name").textContent = pet.name;
    document.getElementById("popup-image").src = pet.image; // Establece la imagen en el popup
    document.getElementById("popup-raza").textContent = "Raza: " + pet.raza;
    document.getElementById("popup-birth").textContent = "Nacimiento: " + pet.birth;
    document.getElementById("popup-status").textContent = pet.status;
    document.getElementById("popup-description").textContent = pet.description;

    // Muestra el popup
    document.getElementById("pet-popup").style.display = "flex";
}

// Cierra el popup
function closePopup() {
    document.getElementById("pet-popup").style.display = "none";
}

// Agregar evento click a cada tarjeta
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        // Crea un objeto 'pet' con la información de la tarjeta
        const pet = {
            name: card.querySelector(".name").textContent,
            image: card.querySelector("img").src,
            raza: card.querySelector(".raza").textContent,
            birth: card.querySelector(".info span").textContent,
            status: card.querySelector(".status").textContent,
            description: "Esta es una descripción de ejemplo para la mascota." // Agrega la descripción adecuada
        };
        openPopup(pet); // Llama a openPopup con los datos de la tarjeta
    });
});
