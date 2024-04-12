let userResponse = '';

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    userResponse = prompt("Are you sure about this?");
    handleUserResponse();
}

function handleUserResponse() {
    if (userResponse.toLowerCase() === 'yes') {
        alert("Okay. Don't be scared. You won't feel anything.");
    } else if (userResponse.toLowerCase() === 'no') {
        alert("I see. It seems that you have other places to be.");
        window.close();
    } else {
        userResponse = prompt("Please enter 'yes' or 'no'.");
        handleUserResponse();
    }
}

function draw() {
    background(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}