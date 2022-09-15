let elForm = document.querySelector(".form")
let elSelect = document.querySelector(".form__select")
let elInput = document.querySelector(".form__input-img")
let elImgList = document.querySelector(".form__images-list")


elForm.addEventListener("submit" , function (evt) {
    evt.preventDefault()
})


elSelect.addEventListener("input" , function () {
    let Select = elSelect.value
    let elRadioWrapper = document.querySelector(".form__radio-wrapper")
    
    if (Select == "Проекты") {
        elRadioWrapper.style.display = "flex"
    }else {
        elRadioWrapper.style.display = "none"
    }
})


function download(input) {
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function () {
        let img = document.createElement("img")
        img.classList.add("form__input-image")
        elImgList.appendChild(img)
        img.src = reader.result
    }
}