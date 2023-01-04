let signinBtn=document.getElementById("signinBtn");
let signupBtn=document.getElementById("signupBtn");
let title=document.getElementById("title");
let nameField=document.getElementById("nameField");







signinBtn.onclick=function(){
    nameField.style.maxHeight="0";
    title.innerText="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick=function(){
    nameField.style.maxHeight="65px";
    title.innerText="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}