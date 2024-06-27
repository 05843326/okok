
const myyH1 = document.querySelector(".myH1");
const yesButton = document.querySelector(".yesBtn");
const noButton = document.querySelector(".noBtn");
const catImg = document.querySelector(".slide");
const buttons = document.querySelector(".buttons");

let MAX_IMAGES = 6;

let play = true;
let noCount = 1;

yesButton.addEventListener("click", yesButtonResult);

noButton.addEventListener("click", function(){
    if(play){
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        increasingYesButton();
        updateNoButtonText();
    
    if(noCount === MAX_IMAGES){
        play = false
    }
}
});

function increasingYesButton(){
    const computedStyle = window.getComputedStyle(yesButton);
    const font_size = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newfont = font_size * 1.6;
    yesButton.style.fontSize = `${newfont}px`;
}

function generateNoButtonText(noCount){

    const message = [
        "No",
        "Are you sure?",
        "Pookie please",
        "Don't do this to me :(",
        "You're breaking my heart",
        "I'm gonna cry..."
    ];

    const messageIndex = Math.min(noCount, message.length -1);
    return message[messageIndex];
}


function yesButtonResult(){
    myyH1.textContent = "yaay! (us soon) ❤";
    buttons.classList.add("hidden");
    changeImage("us_soon");
}

function changeImage(image){
    catImg.src = `uwu_cats/cat-${image}.png`;
}

function updateNoButtonText(){
    noButton.innerHTML = generateNoButtonText(noCount);
}