let formContainer=document.querySelector(".form");
let inputMessage=document.querySelector(".input");
let clickButton=document.querySelector(".button");
let errorMessage=document.querySelectorAll(".error-message");
let emptyField=document.querySelectorAll(".empty-field");
let showPasswordBtn=document.querySelector(".btn");
let firstName,lastName,email,password;
let fnTarget,lnTarget,emailTarget,pswdTarget;
let fnFlag, lnFlag, emailFlag, pswdFlag;

for(let char of errorMessage){
  char.classList.add('d-none');
};
for(let element of emptyField){
  element.classList.add("d-none");
}; 

let nameRegex=/^[a-z]+$/i; //only letters allowed in the names
let  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//regex for validating emails
let passRegex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

formContainer.addEventListener("keyup",(e)=>{
  e.preventDefault();
  let field = e.target.dataset.key;
  switch(field){
    case "firstName":
      firstName=e.target.value;
      fnTarget=e.target;
      break;
    case  "lastName" :
      lastName=e.target.value;
      lnTarget=e.target;
      break;
    case "email":
      email=e.target.value;
      emailTarget=e.target;
      break;
    case "password":
      password=e.target.value;
      pswdTarget=e.target;
      break;
    default:
      firstName=lastName=email=password="";
      break;   
  }
}
);
clickButton.addEventListener("click",(e)=>{
  e.preventDefault();
  console.log(firstName,lastName,email,password);
  if(firstName){
    emptyField[0].classList.add("d-none");
    if(!nameRegex.test(firstName)){
      fnFlag=false;
      fnTarget.classList.add("error");
      errorMessage[0].classList.remove("d-none");
    }else{
      fnFlag=true;
      fnTarget.classList.remove("error");
      errorMessage[0].classList.add("d-none");
    }
  }else{
    emptyField[0].classList.remove("d-none");
   
  }
  if(lastName){
    emptyField[1].classList.add("d-none");
    if(!nameRegex.test(lastName)){
      lnFlag=false;
      lnTarget.classList.add("error");
      errorMessage[1].classList.remove("d-none");
      
    }else{
      lnFlag=true;
      lnTarget.classList.remove("error");
      errorMessage[1].classList.add("d-none");
  
    }
  }else{
    emptyField[1].classList.remove("d-none");
   
  }
  if(email){
    emptyField[2].classList.add("d-none");
    if(!emailRegex.test(email)){
      emailFlag=false;
      emailTarget.classList.add("error");
      errorMessage[2].classList.remove("d-none");
    }else{
      emailFlag=true;
      emailTarget.classList.remove("error");
      errorMessage[2].classList.add("d-none");
    }
  }else{
    emptyField[2].classList.remove("d-none");
  }
  if(password){
    emptyField[3].classList.add("d-none");
    if(!passRegex.test(password)){
      pswdFlag=false;
      pswdTarget.classList.add("error");
      errorMessage[3].classList.remove("d-none");
  }else{
    pswdFlag=true;
    pswdTarget.classList.remove("error");
    errorMessage[3].classList.add("d-none");
  }
}else{
  emptyField[3].classList.remove("d-none");
}
if(fnFlag && lnFlag && emailFlag && pswdFlag){
  fnTarget.value=lnTarget.value=emailTarget.value=pswdTarget.value="";
  window.location.href ="success.html";
}

})

showPasswordBtn.addEventListener('click', function(event){
    event.preventDefault();
    if(pswdTarget.getAttribute("type")==="text"){
      pswdTarget.setAttribute("type", "password");
    }else{
      pswdTarget.setAttribute("type","text");
    }

})

