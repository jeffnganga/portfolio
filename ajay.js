const fire = document.querySelector("fire")

window.addEventListener("scroll", function(){
    fire.classList.toggle("sticky",window.scrollY > 200)
}
)

