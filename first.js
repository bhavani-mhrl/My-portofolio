let body= document.querySelector("body");

function changeAboutMe()
{
    const aboutMeText=["Front-End Developer","Learning New Skills","Implementing"];
    const typeSpeed=100;
    const erase=50;
    const pause=1500;
    const aboutMe=document.querySelector(".about-me");

    let textIndex=0;
    let charIndex=0;
    let isDeleting=false;

    function type(){
        const current=aboutMeText[textIndex];
        /*typing*/
        if (!isDeleting&& charIndex<current.length)
        {
            aboutMe.textContent+=current[charIndex];
            charIndex++;
            setTimeout(type,typeSpeed);
        }
        /*erasing*/
        else if(isDeleting&& charIndex>0){
            aboutMe.textContent=current.substring(0,charIndex-1);
            charIndex--;
            setTimeout(type,erase);
        }
        /*switching the deleting or typing process*/
        else{
            isDeleting=!isDeleting;
            if(!isDeleting){
                textIndex=(textIndex+1)%aboutMeText.length;
            }
            setTimeout(type,pause);
        }
    }
     type();
}

changeAboutMe();

/*dark modr*/

let moon=document.querySelector(".fa-moon");
moon.addEventListener("click",()=>{
    moon.classList.toggle("fa-sun");
    moon.classList.toggle("fa-moon");
    body.classList.toggle("dark-mode");
});

/*login-form*/
let loginBtn=document.querySelector(".log-btn");
let Form=document.querySelector(".log");
let cancelBtn=document.querySelector(".cancel-btn");
let formClick=false;
loginBtn.addEventListener("click",()=>{
    if(formClick===false){
       Form.style.display="block";
      body.style.overflow="hidden";
    }
});

cancelBtn.addEventListener("click",()=>{
   Form.style.display="none";
});

window.onclick = function(event) {
    if (event.target == Form) {
        Form.style.display = "none";
    }
}

/*sign in form creation*/
let sign=document.querySelector(".sign");
let signBtn=document.querySelector(".sign-btn");
let SignCancel=document.querySelector(".Scancel-btn");

let signBtnClick=false;
signBtn.addEventListener("click",()=>{
if(signBtnClick===false){
   sign.style.display="block";
   body.style.overflow="hidden";
}
});

SignCancel.addEventListener("click",()=>{
sign.style.display="none";
body.style.overflow="visible";
});

window.onclick = function(event) {
    if (event.target == Form) {
        Form.style.display = "none";
        body.style.overflow="visible";
    }
    else if (event.target == sign){
      sign.style.display="none";
      body.style.overflow="visible";
    }
}

/* menu bar accessing*/

let Bar=document.querySelector(".fa-bars");
let menuBar=document.querySelector(".menuBar");
let barClick=false;
Bar.addEventListener("click",()=>{
    console.log("click");
   if(barClick===false){
    menuBar.style.display="block";
   }
});


/*images slide creation*/

let slideIndex=1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n){
    let i;
    let slides=document.querySelectorAll(".slides");
    let dots=document.querySelectorAll(".dot");
    if(n > slides.length){
        slideIndex = 1;
    }
     if(n < 1){
        slideIndex = slides.length;
    }
    for(i=0;i< slides.length;i++){
        slides[i].style.display="none";
    }
     for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}