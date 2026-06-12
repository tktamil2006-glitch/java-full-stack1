let greetings = ["Good Morning", "Good Afternoon", "Good Evening","Good Night"];
let num = 0;

function greet_afternoon() {
    let text = document.getElementById("greet");
    text.innerText = greetings[num];
    num++;
    if (num>3) {
        num = 0;
    }
}

function sunrise() {
    let image = document.getElementById("sunrise");
    image.src = "sunrise.jpeg";
}

function sunset() {
    let image = document.getElementById("sunrise");
    image.src = "sunset.jpeg";
}

function change_color() {
    let body = document.getElementById("cap");
    body.style.backgroundColor = "black";

    let heading = document.getElementById("Data");
    heading.style.color = "white";

    let greeting = document.getElementById("greet");
    greeting.style.color = "yellow";
}