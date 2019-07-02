let game = document.getElementById("caro");
let data = '<table>';
let board = [];
let size = 20;
let check = true;

for (let i = 0; i < size; i++) {
    data += "<tr>";
    board[i] = new Array(size);
    for (let j = 0; j < size; j++) {
        data += "<td>";
        data += "<input type='button' id='square" + i + "-" + j + "' onclick='setValue(" + i + "," + j + ")' />";
        // data += "<button id='square" + i + "-" + j + "' onclick='setValue(" + i + "," + j + ")'></button>";
        data += "</td>";
        board[i].push('.');
    }
    data += "</tr>";
}
data += "</table>";
game.innerHTML = data;



function setValue(i, j) {
    let id_input = document.getElementById("square" + i + "-" + j + "");
    if (check == true && id_input.value != "O" && id_input.value != "X") {
        id_input.value = "X";
        board[i][j] = "X";
        check = false;
        if (KtraDoc(i, j, 'X') == true) {
            alert("X đã chiến thắng");
        } else if (KtraNgang(i, j, 'X') == true) {
            alert("X đã chiến thắng");
        } else if (KtraCheo1(i, j, 'X') == true) {
            alert("X đã chiến thắng");
        } else if (KtraCheo2(i, j, 'X') == true) {
            alert("X đã chiến thắng");
        }
    }
    if (check == false && id_input.value != "O" && id_input.value != "X") {
        id_input.value = "O";
        board[i][j] = "O";
        check = true;
        if (KtraDoc(i, j, 'O') == true) {
            alert("O đã chiến thắng");
        } else if (KtraNgang(i, j, 'O') == true) {
            alert("O đã chiến thắng");
        } else if (KtraCheo1(i, j, 'O') == true) {
            alert("O đã chiến thắng");
        } else if (KtraCheo2(i, j, 'O') == true) {
            alert("O đã chiến thắng");
        }
    }
}

function KtraDoc(i, j, value) {
    let y1 = i;
    let y2 = i;
    let count = 1;
    while (y1 - 1 >= 0 && board[y1 - 1][j] == value) {
        count++;
        y1--;
    }
    while (y2 + 1 <= size && board[y2 + 1][j] == value) {
        count++;
        y2++;
    }
    if (count == 5) {
        return true;
    }
    return false;
}

function KtraNgang(i, j, value) {
    let x1 = j;
    let x2 = j;
    let count = 1;
    while (x1 - 1 >= 0 && board[i][x1 - 1] == value) {
        count++;
        x1--;
    }
    while (x2 + 1 <= size && board[i][x2 + 1] == value) {
        count++;
        x2++;
    }
    if (count == 5) {
        return true;
    }
    return false;
}

function KtraCheo1(i, j, value) {
    let x1 = j;
    let x2 = j;
    let y1 = i;
    let y2 = i;
    let count = 1;
    while (x1 - 1 >= 0 && y1 - 1 >= 0 && board[y1 - 1][x1 - 1] == value) {
        count++;
        x1--;
        y1--;
    }
    while (x2 + 1 <= size && y2 + 1 <= size && board[y2 + 1][x2 + 1] == value) {
        count++;
        x2++;
        y2++;
    }
    if (count == 5) {
        return true;
    }
    return false;
}

function KtraCheo2(i, j, value) {
    let x1 = j;
    let x2 = j;
    let y1 = i;
    let y2 = i;
    let count = 1;
    while (x1 + 1 <= size && y1 - 1 >= 0 && board[y1 - 1][x1 + 1] == value) {
        count++;
        x1++;
        y1--;
    }
    while (x2 - 1 >= 0 && y2 + 1 <= size && board[y2 + 1][x2 - 1] == value) {
        count++;
        x2--;
        y2++;
    }
    if (count == 5) {
        return true;
    }
    return false;
}