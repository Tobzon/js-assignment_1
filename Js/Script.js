
var board = document.getElementById("board");
var goalList = [];

var count = 0;
var counter = document.getElementById("counter");




function init() {

    for (var i = 0; i<tileMap01.height; i++){
        for (var j = 0; j<tileMap01.width;j++) {
            if (tileMap01.mapGrid[i][j] == 'G'){
                goalList.push({x:i,y:j});
            }
        }
    }
    draw();
}

function draw() {
    counter.innerHTML = count+" Moves";


    for (var goal = 0;goal<goalList.length;goal++){
        if (tileMap01.mapGrid[goalList[goal].x][goalList[goal].y] == ' '){
            tileMap01.mapGrid[goalList[goal].x][goalList[goal].y] = 'G';
        }
    }

    var tableElement = document.createElement("table");

    for (var i = 0; i<tileMap01.height; i++){
        var trElement = document.createElement("tr");
        for (var j = 0; j<tileMap01.width;j++){
            var tdElement = document.createElement("td");
            var img = document.createElement("img");
            if (tileMap01.mapGrid[i][j] == 'P'){
                tdElement.classList.add(Entities.Character);
                img.src = "Pics/Hero.gif"
                tdElement.appendChild(img);
            }
            else if(tileMap01.mapGrid[i][j] == 'W'){
                tdElement.classList.add(Tiles.Wall);
                img.src = "Pics/Wall.gif"
                tdElement.appendChild(img);
            }
            else if(tileMap01.mapGrid[i][j] == 'B'){
                tdElement.classList.add(Entities.Block);
                img.src = "Pics/Box.gif"
                tdElement.appendChild(img);
            }
            else if(tileMap01.mapGrid[i][j] == 'G'){
                tdElement.classList.add(Tiles.Goal);
                img.src = "Pics/Goal.gif"
                tdElement.appendChild(img);
            }
            else if(tileMap01.mapGrid[i][j] == ' '){

                tdElement.classList.add(Tiles.Space);
                img.src = "Pics/Empty.gif"
                tdElement.appendChild(img);
            }

            else if(tileMap01.mapGrid[i][j] == 'GB'){
                tdElement.classList.add(Entities.BlockDone);
                img.src = "Pics/GoalBox.gif"
                tdElement.appendChild(img);
            }
            else
            tdElement.innerHTML = tileMap01.mapGrid[i][j];

            trElement.appendChild(tdElement);
        }
        tableElement.appendChild(trElement);
    }
    board.innerHTML = "";
    board.appendChild(tableElement);
    if (checkWin()){
        alert("You won with only "+count +" moves!!!!!!!");
    }
    count++;
}

   document.addEventListener("keydown",event=>{
       if (event.isComposing || event.keyCode === 37){
           moveLeft();
       }
       else if (event.isComposing || event.keyCode === 38){
          moveUp();
      }
       else if (event.isComposing || event.keyCode === 39){
           moveRight();
       }
      else if (event.isComposing || event.keyCode === 40){
          moveDown();
      }
   });



function moveUp() {

    var pos = findPlayer();

    if (getTile(pos.x-1,pos.y) == ' '){

        setTile('P',pos.x-1,pos.y);
        setTile(' ',pos.x,pos.y);
        draw();
    }
    else if (getTile(pos.x-1,pos.y) == 'G'){
        setTile('P',pos.x-1,pos.y);
        setTile(' ',pos.x,pos.y);
        draw();
    }
    else if (getTile(pos.x-1,pos.y) == 'B'  ||getTile(pos.x-1,pos.y) == 'GB'){
        if (getTile(pos.x-2,pos.y) == ' '){
            setTile('B',pos.x-2,pos.y);
            setTile('P',pos.x-1,pos.y);
            setTile(' ',pos.x,pos.y);
            draw();
        }
        else if (getTile(pos.x-2,pos.y) == 'G' ){
            setTile('GB',pos.x-2,pos.y);
            setTile('P',pos.x-1,pos.y);
            setTile(' ',pos.x,pos.y);
            draw();
        }

    }


}

function moveDown() {
    var pos = findPlayer();
    if (getTile(pos.x+1,pos.y) == ' '){

        setTile('P',pos.x+1,pos.y);
        setTile(' ',pos.x,pos.y);
        draw();
    }
    else if (getTile(pos.x+1,pos.y) == 'G'){
        setTile('P',pos.x+1,pos.y);
        setTile(' ',pos.x,pos.y);
        draw();
    }
    else if (getTile(pos.x+1,pos.y) == 'B'  ||getTile(pos.x+1,pos.y) == 'GB') {
        if (getTile(pos.x + 2, pos.y) == ' ') {
            setTile('B', pos.x + 2, pos.y);
            setTile('P', pos.x + 1, pos.y);
            setTile(' ', pos.x, pos.y);
            draw();
        }
        else if (getTile(pos.x+2,pos.y) == 'G' ){
            setTile('GB',pos.x+2,pos.y);
            setTile('P',pos.x+1,pos.y);
            setTile(' ',pos.x,pos.y);
            draw();
        }

    }

}
function moveRight() {
    var pos = findPlayer();

    if (getTile(pos.x,pos.y+1) == ' '){
        setTile('P',pos.x,pos.y+1);
        setTile(' ',pos.x,pos.y);
        draw();
    }
    else if (getTile(pos.x,pos.y+1) == 'G'){
        setTile('P',pos.x,pos.y+1);
        setTile(' ',pos.x,pos.y);
        draw();
    }
    else if (getTile(pos.x,pos.y+1) == 'B' ||getTile(pos.x,pos.y+1) == 'GB' ){
        if (getTile(pos.x,pos.y+2) == ' '){
            setTile('B',pos.x,pos.y+2);
            setTile('P',pos.x,pos.y+1);
            setTile(' ',pos.x,pos.y);
            draw();
        }
        else if (getTile(pos.x,pos.y+2) == 'G' ){
            setTile('GB',pos.x,pos.y+2);
            setTile('P',pos.x,pos.y+1);
            setTile(' ',pos.x,pos.y);
            draw();
        }

    }

}
function moveLeft() {
    var pos = findPlayer();
    if (getTile(pos.x,pos.y-1) == ' '){
        setTile('P',pos.x,pos.y-1);
        setTile(' ',pos.x,pos.y);
        draw();
    }
    else if (getTile(pos.x,pos.y-1) == 'G' ){
        setTile('P',pos.x,pos.y-1);
        setTile(' ',pos.x,pos.y);
        draw();
    }
    else if (getTile(pos.x,pos.y-1) == 'B' ||getTile(pos.x,pos.y-1) == 'GB'){
        if (getTile(pos.x,pos.y-2) == ' ') {
            setTile('B',pos.x,pos.y-2);
            setTile('P',pos.x,pos.y-1);
            setTile(' ',pos.x,pos.y);
            draw();
        }
        else if (getTile(pos.x,pos.y-2) == 'G' ){
            setTile('GB',pos.x,pos.y-2);
            setTile('P',pos.x,pos.y-1);
            setTile(' ',pos.x,pos.y);
            draw();
        }

    }

}

function getTile(x,y) { return tileMap01.mapGrid[x][y]; }

function findPlayer() {
    for (var i = 0; i<tileMap01.height; i++){
        for (var j = 0; j<tileMap01.width;j++) {
           if (tileMap01.mapGrid[i][j] == 'P'){
               return {x:i,y:j};
           }
        }
    }
}

function setTile(tile,x,y) {

    tileMap01.mapGrid[x][y] = tile;

}
function checkWin() {
    for (var i = 0; i<tileMap01.height; i++){
        for (var j = 0; j<tileMap01.width;j++) {
            if (tileMap01.mapGrid[i][j] =='B' || tileMap01.mapGrid[i][j] =='G'){
                return false;
            }
        }
    }

 return true;
}






