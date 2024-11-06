const accordions = document.querySelectorAll(".box");

// console.log(accordions)

accordions.forEach((box) => {
  const boxButton = box.querySelector(".boxButton");
  boxButton.addEventListener("click", () => {
    box.querySelector('.minusIcon').classList.toggle('active');
    box.querySelector('.plusIcon').classList.toggle('active');
    box.querySelector('.box-text').classList.toggle('active');
  });
});
