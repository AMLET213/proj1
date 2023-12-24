gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
ScrollSmoother.create({
	wrapper:'.warpper',
	content:'.conteiner',
	smooth: 1.5,
	effects: true

})

const header = document.getElementById('header')
const burg = document.getElementById('burg')
var theme = document.getElementById('check')
const body = document.getElementById('body')
const wrap = document.getElementById("benef-wrap")
const title = document.getElementById("benef-title")

window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY
        console.log(scrollPosition)
        if(scrollPosition>=600){
            header.style.backgroundColor = '#0E1D28'
        }
        else{
            header.style.backgroundColor = 'transparent'
        }
      });

burg.addEventListener('click', function f(){
burg.classList.toggle('open')
console.log("asdasdasd")
})

theme.addEventListener('click', function f(){
	if(theme.checked){
		body.classList.toggle('dark')
		wrap.classList.toggle('dark')
		title.classList.toggle('dark')
	}
	else{
		body.classList.remove('dark')
		wrap.classList.remove('dark')
		title.classList.remove('dark')
	}
})