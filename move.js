function move(element) {
    element.style.position = 'fixed'
  

    function moveToCoordinates(left,bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

function moveWithArrowKeys(left, bottom, atChangeofDirection){
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    
    function moveCharacter(){ 
        if(direction === 'west'){
            x-=1 
        }
        if(direction === 'north'){
            y+=1
            
        }
        if(direction === 'east'){
            x+=1
    
        }
        if(direction === 'south'){
            y-=1
            
        }
        if(y < 0) {
            direction = null
                }
        if (y > 957) {
            direction = null
        }
        if (x < 0) {
            direction = null
        }
        if(x > 1800) {
            direction = null
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        element.style.zIndex = 1
    }
    
    setInterval(moveCharacter, 1)
       
    document.addEventListener('keydown', function(e) {
        if(e.repeat) return;
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        atChangeofDirection(direction)
    })
    
    document.addEventListener('keyup', function(e){
        direction = null
        atChangeofDirection(direction)
    })
}

return {
    to: moveToCoordinates, withArrowKeys: moveWithArrowKeys
}
}