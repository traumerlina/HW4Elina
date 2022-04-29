const press = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalView = document.querySelector(".modal_view");

press.addEventListener("click", () => {
  overlay.style.display = "block";
  modalView.style.display = "block";
});

overlay.addEventListener("click", () => {
  modalView.style.display = "none";
  overlay.style.display = "none";
});