const modal = document.getElementById("construction-modal");
const closeBtn = document.getElementById("close-modal");

if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}