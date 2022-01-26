const homePage = document.querySelector('.home-page');
const addPage = document.querySelector('.add-page');
const addBtn = document.querySelector('.home-page .add-btn');
const closeBtn = document.querySelector('.add-page .add-page-close');

addBtn.onclick = () => {
    console.log([addPage])
    addPage.classList.add("show")
}

closeBtn.onclick = () => {
    let inputBox = addPage.querySelector('input[type="text"]')
    inputBox.value = "";
    addPage.classList.remove("show")

}