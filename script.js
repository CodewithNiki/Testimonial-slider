const indicators = document.querySelector("footer").children;
const sliders = document.querySelectorAll("section");

 for(let i = 0; i < indicators.length; i++){
    indicators[i].addEventListener("click",()=>{
       for(let j = 0; j < indicators.length; j++){
        indicators[j].classList.remove("active");
        sliders[j].classList.remove("active");
       }
       indicators[i].classList.add("active");
       sliders[i].classList.add("active");
    })
 }