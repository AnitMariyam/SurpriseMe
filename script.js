// function startGame() {
//     window.location.href = 'categories.html';
// }

const startGame = () => {
  window.location.href = "categories.html";
};

// get the id
const howToBtn = document.getElementById("howToBtn");
const howToBtnDetail = document.getElementById("howToBtnDetail");
const whatBtn = document.getElementById("whatBtn");
const whatBtnDetail = document.getElementById("whatBtnDetail");

// add function for hover here
function showDetails(button, detailBtn) {
  button.addEventListener("mouseenter", () => {
    detailBtn.classList.add("show");
  });
  button.addEventListener("mouseleave", () => {
    detailBtn.classList.remove("show");
  });
}

// show the details here
showDetails(howToBtn, howToBtnDetail);
showDetails(whatBtn, whatBtnDetail);

// categories functions
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      localStorage.setItem("selectCategory", category); //Save choice
      window.location.href = "game.html"; //Go to the game page
    });
  });
});

// rolling dice page funtion
document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the category from localStorage
  const selectCategory = localStorage.getItem("selectCategory");

  // Check if a category was selected, if not, show a default message
  if (selectCategory) {
    document.getElementById("chosenCategory").textContent = selectedCategory;
  } else {
    document.getElementById("chosenCategory").textContent =
      "No category selected";
  }
});
