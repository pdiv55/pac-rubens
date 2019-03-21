//Objects

var PacDog = function (grid) {
    this.grid = grid;
};

var Rubens = function (x, y, score) {
    this.x = x;
    this.y = y;
    this.score = score;
}

var Ghost = function (x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.over = true;
}


// Variables

var store = [
    [3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 3, 2, 4, 0, 3, 2, 4, 0, 1, 0, 3, 2, 4, 0, 3, 2, 4, 0, 1],
    [1, 0, 1, 8, 1, 0, 1, 8, 10, 0, 1, 0, 1, 8, 1, 0, 1, 8, 1, 0, 1],
    [1, 0, 5, 2, 6, 0, 5, 2, 6, 0, 1, 0, 5, 2, 6, 0, 5, 2, 6, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 3, 2, 4, 0, 1, 0, 3, 2, 2, 2, 4, 0, 1, 0, 3, 2, 4, 0, 1],
    [1, 0, 5, 2, 6, 0, 1, 0, 5, 2, 2, 2, 6, 0, 1, 0, 5, 2, 6, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 4, 0, 5, 2, 2, 0, 1, 0, 2, 2, 6, 0, 3, 2, 2, 2, 1],
    [1, 8, 8, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 8, 8, 8, 1],
    [1, 8, 8, 8, 1, 0, 1, 0, 3, 2, 9, 2, 4, 0, 1, 0, 1, 8, 8, 8, 1],
    [1, 8, 8, 8, 1, 0, 1, 0, 1, 8, 8, 8, 1, 0, 1, 0, 1, 8, 8, 8, 1],
    [1, 8, 8, 8, 1, 0, 0, 0, 5, 2, 2, 2, 6, 0, 0, 0, 1, 8, 8, 8, 1],
    [5, 2, 2, 2, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 6],
    [8, 0, 0, 0, 0, 0, 1, 0, 3, 2, 2, 2, 4, 0, 1, 0, 0, 0, 0, 0, 8],
    [3, 2, 2, 2, 2, 12, 1, 0, 5, 2, 2, 2, 6, 0, 1, 12, 2, 2, 2, 2, 4],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 2, 4, 0, 2, 2, 2, 0, 1, 0, 2, 2, 2, 0, 3, 2, 2, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 2, 4, 0, 1, 0, 1, 0, 3, 2, 10, 2, 4, 0, 1, 0, 1, 0, 3, 2, 1],
    [1, 2, 6, 0, 1, 0, 1, 0, 5, 2, 2, 2, 6, 0, 1, 0, 1, 0, 5, 2, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6],
];


var initialGrid = [
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, "press", 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, "start", 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
];

var overGrid = [
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, "game", 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, "over", 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, "pressF5", 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, "start-again", 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
];

var winGrid = [
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, "you", 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, "win", 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
];

var pacdogInitial = new PacDog(initialGrid);
var ghost1 = new Ghost(10, 11, 9);
var rubens = new Rubens(1, 1, 0);
var ghost2 = new Ghost(8, 3, 10);
var ghost3 = new Ghost(10, 20, 10);
var pauseStatus = true;
var startStatus = false;
var begginingSound = document.querySelector('#beggining-sound');
var chompSound = document.querySelector('#chomp-sound');
var deathSound = document.querySelector('#death-sound');

// CHECK FUNCTIONS

function isObstacle(array, x, y) {
    if (array[y][x] === 1 || array[y][x] === 2 || array[y][x] === 3 || array[y][x] === 4 || array[y][x] === 5 || array[y][x] === 6 || array[y][x] === 9 || array[y][x] === 10 || array[y][x] === 11) {
        return true;
    }
    return false;
}

function isObstacleGhost(array, x, y) {
    if (array[y][x] === 1 || array[y][x] === 2 || array[y][x] === 3 || array[y][x] === 4 || array[y][x] === 5 || array[y][x] === 6 || array[y][x] === 9 || array[y][x] === 10 || array[y][x] === 11 || array[y][x] === 12) {
        return true;
    }
    return false;
}

function isFood(array, x, y) {
    if (array[y][x] === 0 || array[y][x] === 12) {
        return true;
    }
    return false;
}

function isPortal(x, y) {
    if (x === -1 && y === 15 || x === 21 && y === 15) {
        return true;
    }
    return false;
}

function isTopScore(score) {
    if (score === 1115) {
        win();
    }
}

// RUBENS

Rubens.prototype.moveRight = function () {
    if (isPortal(this.x + 1, this.y) === true) {
        store[this.y][this.x] = 8;
        store[15][0] = 7;
        this.x = 0;
        this.y = 15;
        updateGrid(store);
    }
    else if (isObstacle(store, this.x + 1, this.y) === false) {
        if (isFood(store, this.x + 1, this.y) === true) {
            store[this.y][this.x] = 8;
            store[this.y][this.x + 1] = 7;
            this.x += 1;
            updateGrid(store);
            this.score += 5;
            updateScore(this.score);
            isTopScore(this.score);
            chompSound.load();
            chompSound.play();
        } else {
            store[this.y][this.x] = 8;
            store[this.y][this.x + 1] = 7;
            this.x += 1;
            updateGrid(store);
        }
    } else {
        return false;
    }
}

Rubens.prototype.moveLeft = function () {
    if (isPortal(this.x - 1, this.y) === true) {
        store[this.y][this.x] = 8;
        store[15][20] = 7;
        this.x = 20;
        this.y = 15;
        updateGrid(store);
    }
    else if (isObstacle(store, this.x - 1, this.y) === false) {
        if (isFood(store, this.x - 1, this.y) === true) {
            store[this.y][this.x] = 8;
            store[this.y][this.x - 1] = 7;
            this.x -= 1;
            updateGrid(store);
            this.score += 5;
            updateScore(this.score);
            isTopScore(this.score);
            chompSound.load();
            chompSound.play();
        } else {
            store[this.y][this.x] = 8;
            store[this.y][this.x - 1] = 7;
            this.x -= 1;
            updateGrid(store);
        }
    } else {
        return false;
    }
}

Rubens.prototype.moveUp = function () {
    if (isObstacle(store, this.x, this.y - 1) === false) {
        if (isFood(store, this.x, this.y - 1) === true) {
            store[this.y][this.x] = 8;
            store[this.y - 1][this.x] = 7;
            this.y -= 1;
            updateGrid(store);
            this.score += 5;
            updateScore(this.score);
            isTopScore(this.score);
            chompSound.load();
            chompSound.play();
        } else {
            store[this.y][this.x] = 8;
            store[this.y - 1][this.x] = 7;
            this.y -= 1;
            updateGrid(store);
        }
    } else {
        return false;
    }
}

Rubens.prototype.moveDown = function () {
    if (isObstacle(store, this.x, this.y + 1) === false) {
        if (isFood(store, this.x, this.y + 1) === true) {
            store[this.y][this.x] = 8;
            store[this.y + 1][this.x] = 7;
            this.y += 1;
            updateGrid(store);
            this.score += 5;
            updateScore(this.score);
            isTopScore(this.score);
            chompSound.load();
            chompSound.play();
        } else {
            store[this.y][this.x] = 8;
            store[this.y + 1][this.x] = 7;
            this.y += 1;
            updateGrid(store);
        }
    } else {
        return false;
    }
}


// GHOST

Ghost.prototype.moveRight = function () {
    var itemNumber = store[this.y][this.x + 1];
    if (itemNumber === 7) {
        gameOver();
    } else {
        store[this.y][this.x] = itemNumber;
        store[this.y][this.x + 1] = this.id;
        this.x += 1;
        updateGrid(store);
    }
}

Ghost.prototype.moveLeft = function () {
    var itemNumber = store[this.y][this.x - 1];
    if (itemNumber === 7) {
        gameOver();
    } else {
        store[this.y][this.x] = itemNumber;
        store[this.y][this.x - 1] = this.id;
        this.x -= 1;
        updateGrid(store);
    }
}

Ghost.prototype.moveUp = function () {
    var itemNumber = store[this.y - 1][this.x];
    if (itemNumber === 7) {
        gameOver();
    } else {
        store[this.y][this.x] = itemNumber;
        store[this.y - 1][this.x] = this.id;
        this.y -= 1;
        updateGrid(store);
    }
}

Ghost.prototype.moveDown = function () {
    var itemNumber = store[this.y + 1][this.x];
    if (itemNumber === 7) {
        gameOver();
    } else {
        store[this.y][this.x] = itemNumber;
        store[this.y + 1][this.x] = this.id;
        this.y += 1;
        updateGrid(store);
    }
}




//Window Onload

window.onload = function () {

    var intGhost1Up;
    var intGhost1Right;
    var intGhost2Up;
    var intGhost2Right;
    var intGhost3Up;
    var intGhost3Right;

    function ghostInterval1() {
        intGhost1Up = setInterval(ghostUpOrDown, 700, ghost1, rubens);
        intGhost1Right = setInterval(ghostRightOrLeft, 900, ghost1, rubens);
    }

    function ghostInterval2() {
        intGhost2Up = setInterval(ghostUpOrDown, 700, ghost2, rubens);
        intGhost2Right = setInterval(ghostRightOrLeft, 900, ghost2, rubens);
    }

    function ghostInterval3() {
        intGhost3Up = setInterval(ghostUpOrDown, 700, ghost3, rubens);
        intGhost3Right = setInterval(ghostRightOrLeft, 900, ghost3, rubens);
    }

    updateGrid(pacdogInitial.grid);
    updateScore(rubens.score);

    document.onkeyup = function (e) {
        var code = e.keyCode;

        if (code == '32') {
            if (pauseStatus === false) {
                document.querySelector(".alert").innerHTML = "Game paused";
                pauseStatus = true;
                clearInterval(intGhost1Up);
                clearInterval(intGhost1Right);
                clearInterval(intGhost2Up);
                clearInterval(intGhost2Right);
                clearInterval(intGhost3Up);
                clearInterval(intGhost3Right);

            } else {
                document.querySelector(".alert").innerHTML = " ";
                pauseStatus = false;
                ghostInterval1();
                ghostInterval2();
                ghostInterval3();
            }
        }
        else if (code == '13') {
            if (startStatus === false) {

                var pacdog = new PacDog(store);
                updateGrid(pacdog.grid);

                begginingSound.load();
                begginingSound.play();

                store[1][1] = 7;

                ghost1.moveUp();
                store[11][10] = 2;
                ghostInterval1();

                ghost2.moveRight();
                store[3][8] = 1;
                ghostInterval2();

                ghost3.moveUp();
                store[20][10] = 2;
                ghostInterval3();

                startStatus = true;
                pauseStatus = false;
            } else {
                return false;
            }
        }
        else if (pauseStatus === false) {
            if (code == '38') {
                rubens.moveUp();
            }
            else if (code == '40') {
                rubens.moveDown();
            }
            else if (code == '37') {
                rubens.moveLeft();
            }
            else if (code == '39') {
                rubens.moveRight();
            }
        } else {
            return false;
        }
    }
}

// Independent Functions

function updateGrid(grid) {

    var html = '';

    grid.forEach(function (line) {

        html += '<div class = "line">'

        line.forEach(function (dot) {

            if (dot === "press") {
                html += '<h1>PRESS ENTER</h1>';
            }

            else if (dot === "start") {
                html += '<h1>TO START !</h1>';
            }

            else if (dot === "game") {
                html += '<h1>GAME</h1>';
            }

            else if (dot === "over") {
                html += '<h1>OVER</h1>';
            }

            else if (dot === "you") {
                html += '<h1 class "colors">YOU</h1>';
            }

            else if (dot === "win") {
                html += '<h1 class = "colors">WIN !</h1>';
            }

            else if (dot === 0) {
                html += '<div class="food">•</div>';
            }

            else if (dot === 1) {
                html += '<div class="vertical-shelf">|</div>';
            }

            else if (dot === 2) {
                html += '<div class="horizontal-shelf">-</div>';
            }

            else if (dot === 3) {
                html += '<div class="top-left-corner"></div>';
            }

            else if (dot === 4) {
                html += '<div class="top-right-corner"></div>';
            }

            else if (dot === 5) {
                html += '<div class="bottom-left-corner"></div>';
            }

            else if (dot === 6) {
                html += '<div class="bottom-right-corner"></div>';
            }

            else if (dot === 7) {
                html += '<div class = "rubens-icon"></div>';
            }

            else if (dot === 77) {
                html += '<div class = "rubens-happy"></div>';
            }

            else if (dot === 9) {
                html += '<div class = "ghost1-icon"></div>';
            }

            else if (dot === 10) {
                html += '<div class = "ghost2-icon"></div>';
            }

            else if (dot === 11) {
                html += '<div class = "ghost3-icon"></div>';
            }

            else if (dot === 12) {
                html += '<div class="food">•</div>';
            }

            else {
                html += '<div class="empty"></div>'
            }
        });

        html += '</div>'
    });

    document.querySelector(".board").innerHTML = html;
}


function updateScore(newScore) {
    document.querySelector(".score").innerHTML = newScore;
};


function ghostUpOrDown(ghost, dog) {
    var dogY = dog.y;
    var ghostX = ghost.x;
    var ghostY = ghost.y;
    var randomNumber = Math.floor(Math.random * 3);

    if (ghost.over === true) {
        if (ghostY > dogY) {
            if (isObstacleGhost(store, ghostX, ghostY - 1) === false) {
                ghost.moveUp();
            }
        } else if (ghostY < dogY) {
            if (isObstacleGhost(store, ghostX, ghostY + 1) === false) {
                ghost.moveDown();
            }
        } else if (ghostY === dogY) {
            if (randomNumber === 0) {
                if (isObstacleGhost(store, ghostX, ghostY - 1) === false) {
                    ghost.moveUp();
                }
            } else if (randomNumber === 1) {
                if (isObstacleGhost(store, ghostX, ghostY + 1) === false) {
                    ghost.moveDown();
                }
            } else if (randomNumber === 2) {
                if (isObstacleGhost(store, ghostX + 1, ghostY) === false) {
                    ghost.moveRight();
                }
            } else if (randomNumber === 3) {
                if (isObstacleGhost(store, ghostX - 1, ghostY) === false) {
                    ghost.moveLeft();
                }
            }
        }
    }
}

function ghostRightOrLeft(ghost, dog) {
    var dogX = dog.x;
    var ghostX = ghost.x;
    var ghostY = ghost.y;
    var randomNumber = Math.floor(Math.random * 3);

    if (ghost.over === true) {
        if (ghostX < dogX) {
            if (isObstacleGhost(store, ghostX + 1, ghostY) === false) {
                ghost.moveRight();
            }
        } else if (ghostX > dogX) {
            if (isObstacleGhost(store, ghostX - 1, ghostY) === false) {
                ghost.moveLeft();
            }
        } else if (ghostX === dogX) {
            if (randomNumber === 0) {
                if (isObstacleGhost(store, ghostX, ghostY - 1) === false) {
                    ghost.moveUp();
                }
            } else if (randomNumber === 1) {
                if (isObstacleGhost(store, ghostX, ghostY + 1) === false) {
                    ghost.moveDown();
                }
            } else if (randomNumber === 2) {
                if (isObstacleGhost(store, ghostX + 1, ghostY) === false) {
                    ghost.moveRight();
                }
            } else if (randomNumber === 3) {
                if (isObstacleGhost(store, ghostX - 1, ghostY) === false) {
                    ghost.moveLeft();
                }
            }
        }
    }
}

function gameOver() {
    var rubens = document.querySelector('.rubens-icon');
    function startAgain() {
        document.querySelector(".alert").innerHTML = "Press F5 to start again";
    }
    pauseStatus = true;
    ghost1.over = false;
    ghost2.over = false;
    ghost3.over = false;
    deathSound.load();
    deathSound.play();
    rubens.className = "rubens-dead"
    var pacdogEnd = new PacDog(overGrid);
    window.setTimeout(updateGrid, 1000, pacdogEnd.grid);
    window.setTimeout(startAgain, 1000);
}

function win() {
    var rubens = document.querySelector('.rubens-icon');
    function startAgain() {
        document.querySelector(".alert").innerHTML = "Press F5 to start again";
    }
    pauseStatus = true;
    ghost1.over = false;
    ghost2.over = false;
    ghost3.over = false;
    rubens.className = "rubens-happy"
    var pacdogWin = new PacDog(winGrid);
    window.setTimeout(updateGrid, 2000, pacdogWin.grid);
    window.setTimeout(startAgain, 2000);
}

// SOUNDS
