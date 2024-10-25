let box1 = document.querySelector('#box-1');
let box2 = document.querySelector('#box-2');
let box3 = document.querySelector('#box-3');
let submit = document.querySelector("#btn");
let mainCont = document.querySelector(".main-container")


let selectedBox = null ;

function select(box){

    if(selectedBox && selectedBox!=box){
        selectedBox.style.backgroundColor= "";
        selectedBox.classList.remove("shake");
    }
    selectedBox = box ;
    box.style.backgroundColor = "bisque"
    box.classList.add("shake")

    

    setTimeout( ()=>{
        box.classList.remove("shake");
    },500);

    
};

box1.addEventListener("click",()=>select(box1));
box2.addEventListener("click",()=>select(box2));
box3.addEventListener("click",()=>select(box3));

submit.addEventListener("click",()=>{
    if (selectedBox) { 
        mainCont.innerHTML = `
            <p class="thank-you">Thank You!</p>
            <p>Feedback: ${selectedBox.innerText}</p>
            <p>We'll use your feedback to improve our customer support.</p>
        
            `
            mainCont.styleCSS;
        ;
    } else {
        mainCont.innerHTML = `
            <p>*Please select a box to submit feedback.*</p>
            <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
    mainCont.style.padding = "20px"; 
    mainCont.style.marginTop = "20px"; 
    mainCont.style.backgroundColor = "#f9f9f9"; 
    mainCont.style.color = "green"; 
    mainCont.style.fontSize = "20px";
    mainCont.style.textAlign = "center";

    const thankYouMessage = mainCont.querySelector('.thank-you');
    thankYouMessage.style.textAlign = "center"; // Center the text
    thankYouMessage.style.fontSize = "34px"; // Make the font larger
    thankYouMessage.style.fontWeight = "bold";

})