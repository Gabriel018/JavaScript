const grid = document.querySelector('.grid')
const block = document.createElement('div')
const blockWidth = 100
const blockHight = 20
const ballDiameter = 20

let Xdirection  =   6

const bordWidth = 500
const bordHight = 600

const StartPosition = [270,10]
let  Position = StartPosition

const BallStart = [310,30]
let BallPosition = BallStart


class Block {
    constructor(x,y){
        this.bottomLeft = [x , y]
        this.bottomRight = [x + blockWidth, y]
        this.topleft= [x , y + blockHight]
        this.topRight = [x + blockWidth, y + blockHight]
    }

}

const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(240,270),
    new Block(350,270),
    new Block(460,270),
    new Block(10,240),
    new Block(120,240),
    new Block(240,240),
    new Block(350,240),
    new Block(460,240),
    
]
 
function addBlocks(){

    for (let i = 0; i < blocks.length; i++)
    {   
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomRight[1] + 'px'
        grid.appendChild(block)
    }

}
addBlocks()

const  user = document.createElement('div')
user.classList.add('user')
user.style.left = StartPosition[0] + 'px'
user.style.bottom = StartPosition[1] + 'px'
grid.appendChild(user)



function Draw(){
    user.style.left = StartPosition[0] + 'px'
    user.style.bottom = StartPosition[1] + 'px'
}


function BallDraw() {
    ball.style.left = BallStart[0] + 'px'
    ball.style.bottom = BallStart[1] + 'px'
}


function Mover(e){
    switch(e.key){
        case 'ArrowLeft':
            StartPosition[0] -= 10
            Draw()
            break;
        case 'ArrowRight':
            if (StartPosition[0] < bordHight ){
                StartPosition[0] += 10
                Draw()
            }
                break;    
    }
}


document.addEventListener('keydown',Mover)

const ball = document.createElement('div')
ball. classList.add('ball')
grid.appendChild(ball)


function MoveBall () {
    BallPosition[0] += Xdirection
    BallDraw()
    CheckColision()

}

setInterval(MoveBall,100)

function CheckColision () {
    if ( BallPosition[0] >= (bordHight - ballDiameter) ){
       ChanceDirection()
    }

    if ( BallPosition[0] <= 0 ){
        ChanceDirection()
    }
}


function ChanceDirection (){
    if ( Xdirection == 6 ){
         Xdirection = -6
 } 
    else {
        Xdirection = 6
    }
}