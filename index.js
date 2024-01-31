// document.getElementsByClassName("drum")[0].addEventListener("click", handleClicked);
// document.getElementsByClassName("drum")[1].addEventListener("click", handleClicked);
// document.getElementsByClassName("drum")[2].addEventListener("click", handleClicked);
// document.getElementsByClassName("drum")[3].addEventListener("click", handleClicked);
// document.getElementsByClassName("drum")[4].addEventListener("click", handleClicked);
// document.getElementsByClassName("drum")[5].addEventListener("click", handleClicked);
// document.getElementsByClassName("drum")[6].addEventListener("click", handleClicked);

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", handleClicked);
}

// function handleClicked() {
//     alert("I am clicked!");
// }


// function handleClicked() {
//     var audio1=new Audio("sounds/tom-1.mp3");
//     audio1.play();
// }


function handleClicked() {
    var button = this.innerHTML;
    createSound(button)
    buttonAnimation(button)
}
document.addEventListener("keypress",function(event){
    createSound(event.key);
    buttonAnimation(event.key)
});

function createSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "s":
            var audio1 = new Audio("sounds/tom-3.mp3");
            audio1.play();
            break;
        case "d":
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;
        case "j":
            var audio1 = new Audio("sounds/snare.mp3");
            audio1.play();
            break;
        case "k":
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case "l":
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    } ,100);
}