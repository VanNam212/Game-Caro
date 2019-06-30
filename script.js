let game = document.getElementById("caro");
let data = '<table cellpadding="0" cellspacing="0">';
for (let i = 0; i < 20; i++) {
    data += "<tr>";
    for (let j = 0; j < 20; j++) {
        data += "<td>";
        // data += "<input type='button' style='width: 20px; height: 20px' id='square "+i+"-"+j+"' />";
        data += "<button id='square "+i+"-"+j+"' onclick='setValue(i,j)'>" +
            "</button>";
        data += "</td>";
    }
    data += "</tr>";
}
data += "</table>";
game.innerHTML = data;

let check = true;
let index_x = 0;
let index_o = 0;
let array_x = [];
let array_o = [];

function setValue(i,j) {
    let id = document.getElementById("square "+i+"-"+j+"");
    if (check == true && id.innerHTML != "O") {
        id.value = "X";
        // array_x[index_x++] = [positionX, positionY];
        // if (index_x >= 3) {
        //     if (winner(array_x) == true) {
        //         alert("X đã chiến thắng");
        //     }
        // }
        check = false;
    } else {
        id.innerHTML = "X";
        // array_o[index_o++] = [positionX, positionY];
        // if (index_o >= 3) {
        //     if (winner(array_o) == true) {
        //         alert("O đã chiến thắng");
        //     }
        // }
        check = true;
    }
    // for (let i = 0; i < 10; i++) {
    //     data += "<br/>";
    //     for (let j = 0; j < 10; j++) {
    //         data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
    //     }
    // }
    // id_caro.innerHTML = data;

}


function winner(array) {
    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if ((array[j][0] == (array[i][0] + array[k][0]) / 2) &&
                    array[i][1] == array[j][1] && array[j][1] == array[k][1]) {
                    return true;
                } else if ((array[j][1] == (array[i][1] + array[k][1]) / 2) &&
                    array[j][0] == array[i][0] && array[i][0] == array[k][0]) {
                    return true;
                } else if ((array[j][0] == (array[i][0] + array[k][0]) / 2) &&
                    array[j][1] == (array[i][1] + array[k][1]) / 2) {
                    return true;
                }
            }
        }
    }
    return false;
}