const grid = document.querySelector('.grid')
const block = document.createElement('div')
const blockWidth = 100
const blockHight = 20


class Block {
    constructor(x,y){
        this.bottomLeft = [x , y]
        this.bottomRight = [x + blockWidth, y]
        this.topleft= [x , y + blockHight]
        this.topRight = [x + blockWidth, y + blockHight]
    }

}

const blocks = [
    new Block(20,280)
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