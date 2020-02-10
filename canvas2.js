const myCanvas2 = document.getElementById('myCanvas2');
const myContext2 = myCanvas2.getContext('2d');

myCanvas2.width = 500;
myCanvas2.height = 500;

const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 4,
    dy: 3,
};

this.moveCircle();


/*

- here requestAnimationFrame with callback is used for animation 
*/
function moveCircle() {
    myContext2.clearRect(0, 0, myCanvas2.width, myCanvas2.height);

    drawCircle();

    //change position
    circle.x += circle.dx;
    circle.y += circle.dy;

    //Detect side walls
    if (circle.x + circle.size > myCanvas2.width || circle.x - circle.size < 0) {
        circle.dx *= -1;
    }

    //Detect top and bottom walls
    if (circle.y + circle.size > myCanvas2.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
    }


    requestAnimationFrame(moveCircle);

    //
}

/*
- This method is used to create simple circle
*/
function drawCircle() {
    myContext2.beginPath();
    myContext2.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    myContext2.fillStyle = 'orange';
    myContext2.fill();
}

