let optionsCont = document.querySelector(".options-cont");
let toolsCont = document.querySelector(".tools-cont");

let optionsFlag = true;

// true -> tools show , fals -> hide tools
optionsCont.addEventListener("click", (e) =>{
    optionsFlag = !optionsFlag;

    if (optionsFlag) {
        openTools();
    } else {
        closeTools();
    }

    

})

function openTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
    toolsCont.style.display = "none";
}
function closeTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display = "flex";
}