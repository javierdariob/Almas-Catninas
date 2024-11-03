function openPopup(pet) {
    document.getElementById("popup-name").textContent = pet.name;
    document.getElementById("popup-image").src = pet.image;
    document.getElementById("popup-raza").textContent = pet.raza;
    document.getElementById("popup-birth").textContent = pet.birth;
    document.getElementById("popup-status").textContent = pet.status;
    document.getElementById("popup-description").textContent = pet.description;


    document.getElementById("pet-popup").style.display = "flex";
}


function closePopup() {
    document.getElementById("pet-popup").style.display = "none";
}

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const pet = {
            name: card.querySelector(".name").textContent,
            image: card.querySelector("img").src,
            raza: card.querySelector(".raza").textContent,
            birth: card.querySelector(".info span").textContent,
            status: card.querySelector(".status").textContent,
            description: "Esta es una descripción de ejemplo para la mascota."
        };
        openPopup(pet);
    });
});
