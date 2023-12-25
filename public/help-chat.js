
let homeBTN = document.getElementById("homeBTN")
homeBTN.addEventListener("click", function(){
  window.location.href="apteca-main.html"
})

let headerButton2 = document.getElementById("headerButton2")
let headerButton3 = document.getElementById("headerButton3")

let profModal = document.getElementById("profile-modal")
let profButton = document.getElementById("profileBTN")
profButton.addEventListener("click", function(){
  profModal.style.display = 'block';
})
let profClose = document.getElementById("close-profile")
profClose.addEventListener("click", function(){
  profModal.style.display = 'none';
})
profModal.addEventListener('click', function(event) {
  if (event.target == profModal) {
    profModal.style.display = "none";
  }
})

let regModal = document.getElementById("reg-modal")
let regButton = document.getElementById("regBTN")
regButton.addEventListener("click", function(){
  profModal.style.display = 'none';
  signinModal.style.display = 'none';
  regModal.style.display = 'block';
})
let regClose = document.getElementById("close-reg")
regClose.addEventListener("click", function(){
  regModal.style.display = 'none';
})
regModal.addEventListener('click', function(event) {
  if (event.target == regModal) {
    regModal.style.display = "none";
  }
})

let signinModal = document.getElementById("signin-modal")
let signinButton = document.getElementById("signinBTN")
signinButton.addEventListener("click", function(){
  profModal.style.display = 'none';
  regModal.style.display = 'none';
  signinModal.style.display = 'block';
})
let signinClose = document.getElementById("close-signin")
signinClose.addEventListener("click", function(){
  signinModal.style.display = 'none';
})
signinModal.addEventListener('click', function(event) {
  if (event.target == signinModal) {
    signinModal.style.display = "none";
  }
})
