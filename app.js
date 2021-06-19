const modal = document.getElementById("modal")
const overlay = document.getElementById("overlay")

function toggleModal(){
    if(modal.classList.contains("active")){
        modal.classList.remove("active")
        overlay.classList.remove("active")
    }else{
        modal.classList.add("active")
        overlay.classList.add("active")
    }
}

overlay.addEventListener('click', ()=>{
    if(overlay.classList.contains("active")){
        toggleModal()
    }
})