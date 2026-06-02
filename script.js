function scrollToContact(){
document
.getElementById("contact")
.scrollIntoView({
behavior:"smooth"
});
}

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value.trim();

let email =
document.getElementById("email").value.trim();

let message =
document.getElementById("message").value.trim();

let output =
document.getElementById("formMessage");

if(name==="" || email==="" || message===""){
output.innerHTML =
"Please fill all fields.";
output.style.color="red";
return;
}

let emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
output.innerHTML =
"Enter a valid email.";
output.style.color="red";
return;
}

output.innerHTML =
"Message Sent Successfully!";
output.style.color="green";

this.reset();
});