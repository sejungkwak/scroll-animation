# scroll-animation

<img width="413" alt="Screenshot 2021-03-08 at 21 51 27" src="https://user-images.githubusercontent.com/71224770/110387060-05a3d600-8059-11eb-9559-bdf6e61aa80b.png">

<img width="413" alt="Screenshot 2021-03-08 at 21 51 13" src="https://user-images.githubusercontent.com/71224770/110387088-0b012080-8059-11eb-92c5-6402719b7e69.png">


project notes<br />

1. HTML<br />
h1 "Scroll to see the animation"<br />
3(visible by default) + x(visible/unvisible as scrolling) boxes<br />

2. CSS<br />
transition<br />
box comes/goes from/to left and right side<br />

3. JavaScript<br />
schroll + set the trigger point<br />

# Takeaway from the instructor

1. HTML<br />
h1 & boxes, no container or classL<br />

2. CSS<br />
transform: translateX(200%) <= set to 400% or it will show on wide screens<br />
.box:nth-of-type(even) {transform: translate(-200%);}<br />
with this pseudo class I don’t need to add additional class to the html elements.<br />

3. Javascript<br />
const boxes = document.querySelectorAll(‘.box’)

Window.addEventListener(’scroll’, checkBoxes)

checkBoxes()

function checkBoxes() {
const triggerBottom = window.innerHeight / 5 *4

boxes.forEach(box => {
Const boxTop = box.getBoundingClientRect().top

If (boxTop < triggerBottom) {
box.classList.add(’show’)
} else {
box.classList.remove(’show’)
}

})
