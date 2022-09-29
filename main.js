const InfoPerfil = document.querySelector(".section-perfil")

const iconShare = document.querySelector(".icon-share")
const iconShareM = document.querySelector(".icon-share-m")
const shareArea = document.querySelector(".share")

iconShare.addEventListener('click', function(){
    shareArea.classList.toggle('active')
    iconShare.classList.toggle('active')
    InfoPerfil.classList.toggle('off')
}) 

iconShareM.addEventListener('click', function(){
    shareArea.classList.remove('active')
    iconShare.classList.remove('active')
    InfoPerfil.classList.remove('off')
})