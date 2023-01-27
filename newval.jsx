const prevBtns = document.querySelectorAll(".btn-prev");
const formSteps = document.querySelectorAll(".form-step");
let formStepsNum = 0;

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();

  });
});

// new method
// first next button
const next1 = document.querySelector(".next1");
  next1.addEventListener("click", () => {
    if (check1(true)) {
      formStepsNum++;

      updateFormSteps();
    }
  });
// second next button

const next2 = document.querySelector(".next2");

next2.addEventListener("click", () => {
    if (check2(true)) {
      formStepsNum++;

      updateFormSteps();
    }
  });

const next3 = document.querySelector(".next3");

  next3.addEventListener("click", () => {
    if (check3(true)) {
      formStepsNum++;

      updateFormSteps();
    }
  });
const submitbtn = document.querySelector(".submitbtn");
  submitbtn.addEventListener("click", () => {
    if (check4(true)) {
      alert("Thanks for submitting the form")
    }
    else{
      alert("password does not match")
    }
    
  });



function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}


function check1() {

  let firstname = document.getElementById("firstName").value
  let lastname = document.getElementById("lastName").value
  if ((firstname.trim() && lastname.trim()) == "") {
    document.getElementById("error1").innerHTML = "<h3>Please fill your Name properly<h3>"
    return false
  }
  else {
    return true
  }
}

function check2() {
 
  if ((phone.value.trim() && email.value.trim()) == "") {
    document.getElementById("error2").innerHTML = "<h3>Please fill your Phone Number and Email properly<h3>"
    return false
  }
  else {
    return true
  }

  
}

function check3() {
  if ((dob.value && ID.value.trim()) == "") {
    document.getElementById("error3").innerHTML = "<h3>Please fill your DOB and Nationality properly<h3>"
    return false
  }
  else {
    return true
  }
}

function check4(){
  let password=document.getElementById("password")
  let confirmPassword=document.getElementById("confirmPassword")
  if(password==confirmPassword){
    return true
  }
  else{
    document.getElementById("error4").innerHTML="<h1>Password does not match"
    return false
  }

}

function disdata(){
  let firstname = document.getElementById("firstName").value
  let lastname = document.getElementById("lastName").value
  console.log(`The username is ${firstname} ${lastname}`)
}

window.addEventListener('keydown', function (e) { if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) { if (e.target.nodeName == 'INPUT' && e.target.type == 'text', "number", "email","date","password") { e.preventDefault(); return false; } } }, true);