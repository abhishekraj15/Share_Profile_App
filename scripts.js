const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
    console.log("Model Is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};


const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};