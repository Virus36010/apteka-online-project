
let homeBTN = document.getElementById("homeBTN")
homeBTN.addEventListener("click", function(){
  window.location.href="apteca-main.html"
})

let headerButton2 = document.getElementById("headerButton2")
let headerButton3 = document.getElementById("headerButton3")

let profModal = document.getElementById("profile-modal")
let profButton = document.getElementById("profileBTN")
profButton.addEventListener("click", function(){
  profModal.style.display = 'block'
})
let profClose = document.getElementById("close-profile")
profClose.addEventListener("click", function(){
  profModal.style.display = 'none'
})
