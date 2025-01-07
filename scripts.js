

let botaosom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".Audio")

botaosom.addEventListener("click", ligasom)
modal.addEventListener("click", escondermodal)
window.addEventListener("load", tocarAudio)

function ligasom() {
    video.muted = !video.muted
}

botao.addEventListener("click", mostrarmodal)

function mostrarmodal() {
    modal.style.display = "block"
}

function escondermodal() {
    modal.style.display = "none"
}

function tocarAudio() {
    audio.play()
}