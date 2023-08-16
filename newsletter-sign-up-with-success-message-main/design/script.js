var email="";
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    email=inputText;
    return true;
  } else {
    const errosmsg = document.getElementById("error");
    const input = document.getElementById("email");
    errosmsg.innerHTML = "Valid email required";
    document.form1.text1.focus();
    input.classList="errorInput"
    return false;
  }
}
function success(){
  var successemail=document.getElementById("successemail");
  successemail.innerHTML=email;
}
