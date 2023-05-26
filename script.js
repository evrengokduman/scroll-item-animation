const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4 // 80% of the window height

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top // getBoundingClientRect() returns the size of an element and its position relative to the viewport

    // if the top of the box is less than the triggerBottom, add the class 'show' to the box
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
