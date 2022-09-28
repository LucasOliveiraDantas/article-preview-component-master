const iconShare = document.querySelector(".icon-share")
const shareArea = document.querySelector(".share")

iconShare.addEventListener('click', function(){
    shareArea.classList.toggle('active')
    iconShare.classList.toggle('active')
}) 
