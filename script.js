//check if email entered and if has @

function validateEmail(event) {
  event.preventDefault();

  let email = document.querySelector("#email").value;

  let resultObj = document.getElementById("result");
  let successObj = document.getElementById("request-access");

  if ( (email.length === 0) || (!(email.includes("@")))) {
    resultObj.style.display = "block";
  } else {
    successObj.value = "Thanks!";
  }
}
  
// event listener for request-access button

let reqaccBtn = document.querySelector("#request-access");
reqaccBtn.addEventListener("click", validateEmail);