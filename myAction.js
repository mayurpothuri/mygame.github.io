var matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

var binary = 0;
var boxes = [
    [0 , 0],
    [0 , 1],
    [0 , 2],
    [1 , 0],
    [1 , 1],
    [1 , 2],
    [2 , 0],
    [2 , 1],
    [2 , 2]
];

function checkLines(a) {
    
    var temp = document.getElementById(a).style.backgroundImage;
    var result;
    if (temp.search("cross") !== -1){
        result = 1;
    } else {
        result = 0;
    }
    console.log(result);
    if(matrix[0][0] == result && matrix[0][1] == result && matrix[0][2] == result) {
        return true;
    } else if (matrix[0][0] == result && matrix[1][1] == result && matrix[2][2] == result) {
        return true;
    } else if (matrix[0][0] == result && matrix[1][0] == result && matrix[2][0] == result) {
        return true;
    } else if (matrix[0][2] == result && matrix[1][2] == result && matrix[2][2] == result) {
        return true;
    } else if (matrix[2][0] == result && matrix[2][1] == result && matrix[2][2] == result) {
        return true;
    } else if(matrix[0][1] == result && matrix[1][1] == result && matrix[2][1] == result) {
        return true;
    } else if (matrix[1][0] == result && matrix[1][1] == result && matrix[1][2] == result) {
        return true;
    }
    else if(matrix[2][0] == result && matrix[1][1] == result && matrix[0][2] == result) {
        return true;
    }
    return false;
}

function checkGameOver(){
    var flag = 0;
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix.length; j++){
            if(matrix[i][j] == -1){
                flag = 1;
            }
        }
    }
    if(flag == 1)
        return false;
    return true;
}

function triggeredBox(a) {
    var temp = document.getElementById(a);
    if (temp.className.search("effect") === -1 && binary != -1) {
        if (binary === 0) {
        
            temp.style.backgroundImage = "url('images/cross.png')";
            temp.classList.add("effect");
            var p = boxes[parseInt(a) - 1];
            matrix[p[0]][p[1]] = 1;
            binary = 1;
        } else {
            temp.style.backgroundImage = "url('images/zero.png')";
            temp.classList.add("effect");
            var p = boxes[parseInt(a) - 1];
            matrix[p[0]][p[1]] = 0;
            binary = 0;
        }
        var tempo = document.getElementsByTagName("h2");
        if(checkLines(a)) {
            tempo[0].style.display = "block";
            tempo[0].classList.add("heading");
            if(temp.style.backgroundImage.search("cross") != -1){
                tempo[0].innerHTML = "Winner is Cross";
            }
            else{
                tempo[0].innerHTML = "Winner is Zero";
            }
            binary = -1;
        }
        else if(checkGameOver()){
            tempo[0].style.display = "block";
            tempo[0].classList.add("heading");
            tempo[0].innerHTML = "Tie";
            binary = -1;
        }
    }
    console.log(matrix);
}

var button = document.getElementById("reset-button");

button.onclick = function() {
    var p = document.getElementsByTagName("h2")[0];
    p.style.display = "none";
    p.classList.remove("heading");
    p.innerHTML = "";
    for(var i = 1; i < 10; i++){
        var temp = document.getElementById(i);
        temp.classList.remove("effect");
        temp.style.backgroundImage = "url()";
        
    }
    for(var i =0; i < matrix.length; i++){
        for(var j = 0; j < matrix.length; j++){
            matrix[i][j] = -1;
        }
    }
    binary = 0;
}