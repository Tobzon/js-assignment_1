
var board = document.getElementById("board");



function init() {


    var tableElement = document.createElement("table");

    for (var i = 0; i<tileMap01.height; i++){
        var trElement = document.createElement("tr");
        for (var j = 0; j<tileMap01.width;j++){
            var tdElement = document.createElement("td");
            var img = document.createElement("img");
            if (tileMap01.mapGrid[i][j] == 'P'){

                img.src = "Hero.gif"
                tdElement.appendChild(img);
            }
            else if(tileMap01.mapGrid[i][j] == 'W'){
                img.src = "Wall.gif"
                tdElement.appendChild(img);
            }
            else if(tileMap01.mapGrid[i][j] == 'B'){
                img.src = "Box.gif"
                tdElement.appendChild(img);
            }
            else if(tileMap01.mapGrid[i][j] == 'G'){
                img.src = "Goal.gif"
                tdElement.appendChild(img);
            }
            else if(tileMap01.mapGrid[i][j] == ' '){
                img.src = "Empty.gif"
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

}



