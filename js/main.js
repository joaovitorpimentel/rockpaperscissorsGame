document.getElementById("exit-overlay").addEventListener("click", function () {
  let containerOne = document.getElementById("gradient-section");
  containerOne.style.display = "flex";
  let overlayContainer = document.getElementById("overlay-container");
  overlayContainer.style.display = "none";
});
