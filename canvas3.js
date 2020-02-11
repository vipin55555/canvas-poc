const myCanvas3 = document.getElementById('myCanvas3');
const myContext3 = myCanvas3.getContext('2d');
const characterImage = document.getElementById('characterImage');

myCanvas3.width = 370;
myCanvas3.height = 500;

const keyboardKeys = {
    left: 'Left',
    arrowLeft: 'ArrowLeft',
    right: 'Right',
    arrowRight: 'ArrowRight',
    up: 'Up',
    arrowUp: 'ArrowUp',
    down: 'Down',
    arrowDown: 'ArrowDown'
};

const character = 
    {
        width:48,
        height:48,
        x: 100,
        y: 150,
        speed:5,
        dx: 0,
        dy: 0
    };

this.moveCharacter()

function moveCharacter() {    
    myContext3.clearRect(0,0,myCanvas3.width,myCanvas3.height);

    this.drawCharacter();

    character.x += character.dx;
    character.y += character.dy;

    this.detectWalls();

    requestAnimationFrame(moveCharacter);
}

function detectWalls() {
    if (character.x < 0) {
        character.x = 0;
    }
    if (character.x + character.width > myCanvas3.width) {
        character.x = myCanvas3.width - character.width;
    }
    if (character.y < 0) {
        character.y = 0;
    }
    if (character.y + character.height > myCanvas3.height) {
        character.y = myCanvas3.height - character.height;
    }
}

function drawCharacter() {
    myContext3.drawImage(characterImage, character.x, character.y, character.width, character.height); 
}

function myKeyDown(event) {
    
    switch (event.key) {
        case keyboardKeys.left:
        case keyboardKeys.arrowLeft:
            movePosition(event.key);
            break;
        case keyboardKeys.right:
        case keyboardKeys.arrowRight:
            movePosition(event.key);
            break;
        case keyboardKeys.up:
        case keyboardKeys.arrowUp:
            movePosition(event.key);
            break;
        case keyboardKeys.down:
        case keyboardKeys.arrowDown:
            movePosition(event.key);
            break;
        default:
            break;
    }
}

function myKeyUp(event){
    if (
        event.key === keyboardKeys.left || 
        event.key === keyboardKeys.arrowLeft ||
        event.key === keyboardKeys.right || 
        event.key === keyboardKeys.arrowRight ||
        event.key === keyboardKeys.up || 
        event.key === keyboardKeys.arrowUp ||
        event.key === keyboardKeys.down || 
        event.key === keyboardKeys.arrowDown) {
            character.dx = 0;
            character.dy = 0;
    }
}

function movePosition(position){    
    switch (position) {
        case keyboardKeys.left:
        case keyboardKeys.arrowLeft:
            character.dx = -character.speed;
            break;
        case keyboardKeys.right:
        case keyboardKeys.arrowRight:
            character.dx = character.speed;
            break;
        case keyboardKeys.up:
        case keyboardKeys.arrowUp:
            character.dy = -character.speed;
            break;
        case keyboardKeys.down:
        case keyboardKeys.arrowDown:
            character.dy = character.speed;
            break;
        default:
            break;
    }
}

document.addEventListener('keydown',myKeyDown);
document.addEventListener('keyup',myKeyUp);