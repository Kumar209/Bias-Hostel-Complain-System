/******************************************* Popup Functionality ***************************************/ 

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("popup_btn")){
        toggleProjectPopup();
        complainDetails(e.target.parentElement.parentElement.parentElement);
    }
});


document.querySelector(".project-popup-close").addEventListener("click", toggleProjectPopup);


function toggleProjectPopup(){
    document.querySelector(".popup").classList.toggle("open");
}


function complainDetails(complainItem){
    document.querySelector(".popup-img img").src=complainItem.querySelector(".clicked_tr img").src;
    document.querySelector(".popup-detail p").innerHTML=complainItem.querySelector(".clicked_tr .complainText_td").innerHTML;
}


