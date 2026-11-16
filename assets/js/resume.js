const printButton = document.querySelector(".resume-print");
printButton.hidden = false;
printButton.addEventListener("click", () => window.print());
