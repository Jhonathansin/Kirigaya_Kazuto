const IMAGE = ["https://i.pinimg.com/736x/f2/33/2c/f2332c0f88240cb8724acd7f6d44e3af.jpg"]
const TEXTO = ["O espadachim negro"]

function changeText() {
    const textElement = document.querySelector("#title h1")
    const texto = TEXTO[0]
    TEXTO[0] = textElement.textContent
    textElement.textContent = texto
}

function changeImage() {
    const imageElement = document.querySelector("#img-div img")
    const image = IMAGE[0]
    IMAGE[0] = imageElement.src
    imageElement.src = image
}

function addDate() {
    const footerElement = document.querySelector("footer")
    footerElement.innerText = new Date().toLocaleString()
}

function main() {
    document.querySelector("#img-div img").addEventListener("click", changeImage)

    document.querySelector("#title h1").addEventListener("click", changeText)

    document.body.onload = () => setInterval(addDate, 1000)
}

main()