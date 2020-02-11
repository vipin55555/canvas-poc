const myCanvas = document.getElementById('myCanvas');
const myContext = myCanvas.getContext('2d');

myCanvas.width = 500;
myCanvas.height = 500;

this.createRectangles();
this.createTexts();
this.createPaths();


/*
- create or clear rectangles in mutiple ways such as fill or stroke with the help of:
- fillRect(x-axis,y-axis,width,height);
- strokeRect(x-axis,y-axis,width,height);
- clearRect(x-axis,y-axis,width,height);
*/
function createRectangles() {

    // create rectangle
    myContext.fillStyle = 'red';
    myContext.fillRect(20, 20, 100, 100);
    myContext.fillStyle = 'blue';
    myContext.fillRect(140, 20, 100, 100);


    //create rectangle with border only
    myContext.strokeStyle = 'red';
    myContext.lineWidth = 2;
    myContext.strokeRect(260, 20, 100, 100);
    myContext.strokeStyle = 'blue';
    myContext.lineWidth = 3;
    myContext.strokeRect(380, 20, 100, 100);

    //clear rectangle with height/width portion
    myContext.clearRect(56, 56, 30, 30);

}

/*
- create texts in mutiple ways such as fill or stroke with the help of:
- fillText(text,width,height);
- strokeText(text,width,height);
*/
function createTexts() {

    //create simple text
    myContext.fillStyle = 'purple';
    myContext.font = '16px Arial';
    myContext.fillText("I'm Awesome", 20, 150);

    //create text with border
    myContext.strokeStyle = 'orange';
    myContext.lineWidth = 1;
    myContext.strokeText("I'm damn Awesome", 150, 150);
}


/*
- Create line and create any shape like rectangle, triangle or circle with the help of:
- beginPath(x-axis,y-axis);
- moveTo(x-axis,y-axis);
- lineTo(x-axis,y-axis);
- arc(x-axis, y-axis, radius, startAngle, endAngle, anticlockwise?: boolean);
- stroke();
*/
function createPaths() {


    //********************Triangle Start******************************/
    myContext.beginPath();
    myContext.moveTo(20, 180);
    myContext.strokeStyle = 'green';
    myContext.lineTo(120, 180);
    myContext.stroke();
    myContext.strokeStyle = 'red';
    myContext.lineTo(70, 280);
    myContext.stroke();
    myContext.strokeStyle = 'blue';
    myContext.lineTo(20, 180);
    myContext.stroke();

    myContext.beginPath();
    myContext.moveTo(150, 180);
    myContext.strokeStyle = 'green';
    myContext.lineTo(300, 180);
    myContext.stroke();
    myContext.strokeStyle = 'red';
    myContext.lineTo(220, 280);
    myContext.stroke();
    myContext.strokeStyle = 'blue';
    myContext.lineTo(150, 180);
    myContext.stroke();
    myContext.fillStyle = 'pink';
    myContext.fill();
    //********************Triangle End*******************************/

    //********************Arcs(circle) Start*************************/

    myContext.beginPath();
    myContext.strokeStyle = 'red';

    //Draw circle
    myContext.arc(70, 350, 40, 0, Math.PI * 2,);

    // Move to draw semi-circle(mouth)
    myContext.moveTo(90, 350);
    myContext.arc(70, 350, 20, 0, Math.PI, false);

    // Move to draw semi-circle(eyes)
    myContext.moveTo(60, 330);
    myContext.arc(55, 330, 5, 0, Math.PI * 2, true);

    // Move to draw semi-circle(eyes)
    myContext.moveTo(90, 330);
    myContext.arc(85, 330, 5, 0, Math.PI * 2, true);

    myContext.stroke();

    //********************Arcs(circle) End*************************/


}