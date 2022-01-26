const overviewPage = document.querySelector('.overview-page');
const homePage = document.querySelector('.home-page');
const addPage = document.querySelector('.add-page');
const addBtn = document.querySelector('.home-page .add-btn');
const closeBtn = document.querySelector('.add-page .add-page-close');
const lineDouble = document.querySelector('.home-page .nav-item .ti-line-double')
const backBtn = document.querySelector('.overview-page .back-btn')

addBtn.onclick = () => {
    addPage.classList.add("show")
    setTimeout(() => {
        addBtn.style.display = 'none';
    },200)

}

closeBtn.onclick = () => {
    let inputBox = addPage.querySelector('input[type="text"]')
    inputBox.value = "";
    addPage.classList.remove("show")
    setTimeout(() => {
        addBtn.style.display = 'block';
    },200)
}

lineDouble.onclick = () => {
    homePage.classList.add("translate")
}

backBtn.onclick = () => {
    homePage.classList.remove("translate")
}