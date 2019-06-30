let game = document.getElementById("caro");
let data = '<table cellpadding="0" cellspacing="0">';
for (let i = 0; i < 20; i++) {
    data += "<tr>";
    for (let j = 0; j < 20; j++) {
        data += "<td>";
        // data += "<input type='button' style='width: 20px; height: 20px' id='square "+i+"-"+j+"' />";
        data += "<input type='button' id='square" + i + "-" + j + "' onclick='setValue(i,j)'>";
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

function setValue(i, j) {
    let id_input = document.getElementById("square" + i + "-" + j + "");
    if (check == true) {
        id_input.value = "X";
        array_x[index_x++] = [i, j];
        if (index_x >= 5) {
            if (winner(array_x) == true) {
                alert("X đã chiến thắng");
            }
        }
        check = false;
    } else {
        id_input.value = "O";
        array_o[index_o++] = [i, j];
        if (index_o >= 5) {
            if (winner(array_o) == true) {
                alert("O đã chiến thắng");
            }
        }
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
    for (let i = 0; i < array.length - 4; i++) {
        for (let j = i + 1; j < array.length - 3; j++) {
            for (let k = j + 1; k < array.length - 2; k++) {
                for (let l = k + 1; l < array.length - 1; l++) {
                    for (let m = l + 1; m < array.length; m++) {
                        if ((array[j][0] == (array[i][0] + array[k][0]) / 2) &&
                            (array[k][0] == (array[j][0] + array[l][0]) / 2) &&
                            (array[l][0] == (array[k][0] + array[m][0]) / 2) &&
                            array[i][1] == array[j][1] == array[k][1] == array[l][1] == array[m][1]) {
                            return true;
                        } else if ((array[j][1] == (array[i][1] + array[k][1]) / 2) &&
                            (array[k][1] == (array[j][1] + array[l][1]) / 2) &&
                            (array[l][1] == (array[k][1] + array[m][1]) / 2) &&
                            array[i][0] == array[j][0] == array[k][0] == array[l][0] == array[m][0]) {
                            return true;
                        } else if ((array[j][0] == (array[i][0] + array[k][0]) / 2) &&
                            (array[k][0] == (array[j][0] + array[l][0]) / 2) &&
                            (array[l][0] == (array[k][0] + array[m][0]) / 2) &&
                            (array[j][1] == (array[i][1] + array[k][1]) / 2) &&
                            (array[k][1] == (array[j][1] + array[l][1]) / 2) &&
                            (array[l][1] == (array[k][1] + array[m][1]) / 2)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}