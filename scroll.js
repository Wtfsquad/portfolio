var slides=document.querySelector('.slider-items').children;
 var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
     resetTimer();
}
prevSlide.onclick=function () {
     next("prev");
     resetTimer();
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

function resetTimer(){
 // stop timer after clicked next & prev Button
 clearInterval(timer);
 // then start again timer
 timer = setInterval(autoPlay,5000);
}

function autoPlay(){
 next('next');
}

 var timer = setInterval(autoPlay,5000);






function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


var elements = document.getElementsByClassName("column");
var i;
//display full width images
function one() {
     for (i = 0; i < elements.length; i++) {
       elements[i].style.flex = "100%";
     }
   }