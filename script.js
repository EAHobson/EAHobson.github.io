// configuration variables
const MAPWIDTH = 50; // width of the map (in tiles)
const MAPHEIGHT = 50; // height of the map (in tiles)
const TIMESPEED = 5; // the speed that time passes in the game (amount of time units from csv per second)
const CHARACTER_SIZE = 3; // the size of the characters (in tiles)
const PLAYER_SPEED = 1; // the speed of the player (tiles per second)
const PLAYER_ID = -1; // the id the player will have in the final data sheet (in the agent column)
const TAG_COLOR = "black" // the color of the tag above the characters





const WIDTHTILES = MAPWIDTH + CHARACTER_SIZE;
const HEIGHTTILES = MAPHEIGHT + CHARACTER_SIZE;
let tileSize = Math.min(window.innerWidth / WIDTHTILES, window.innerHeight / HEIGHTTILES);

let canvas = document.getElementById("gameCanvas");
canvas.width = WIDTHTILES * tileSize;
canvas.height = HEIGHTTILES * tileSize;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
let ctx = canvas.getContext("2d");

let positionData = [];
let characters = [];
let lastTime = Date.now();
let totaltime = 1;
let endTime = 0;
let keys = [];

class Character {
    constructor(x, y, id, label, positions) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.label = label;
        this.size = CHARACTER_SIZE;
        this.spriteIndex = 0;
        this.animationIndex = 1;
        this.animationTimer = 0;
        this.animationSpeed = 0.05;
        this.image = new Image();
        this.image.src = "bat-sprites.png";
        this.imageSize = 256;
        this.positions = positions;
    }
    update(timePassed, totaltime) {
        this.animationTimer += this.animationSpeed;
        if (this.animationTimer >= 1) {
            this.animationTimer = 0;
            this.animationIndex++;
            if (this.animationIndex >= 3) {
                this.animationIndex = 0;
            }
        }
        this.draw();
        this.move(totaltime);
    }
    move(totaltime) { 
        if(this.positions) {
            let nextposition = this.positions.find((p) => p.timestep > totaltime);
            let position = this.positions[this.positions.indexOf(nextposition) - 1]
            if(!position || !nextposition) return;
            let timediff = nextposition.timestep - position.timestep;
            let xdiff = nextposition['x-coor'] - position['x-coor'];
            if(xdiff > 0) this.spriteIndex = 0;
            if(xdiff < 0) this.spriteIndex = 1;
            let ydiff = nextposition['y-coor'] - position['y-coor'];
            let xdiffpersec = xdiff / timediff;
            let ydiffpersec = ydiff / timediff;
            this.x = position['x-coor'] + xdiffpersec * (totaltime - position.timestep);
            this.y = position['y-coor'] + ydiffpersec * (totaltime - position.timestep);
        }
    }
    draw() {
        ctx.drawImage(this.image, this.animationIndex * this.imageSize, this.spriteIndex * this.imageSize, this.imageSize, this.imageSize, this.x * tileSize, this.y * tileSize, this.size * tileSize, this.size * tileSize);
        ctx.fillStyle = TAG_COLOR;
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText(this.label, (this.x + 0.5*this.size) * tileSize, this.y * tileSize);
    }
}

class Player extends Character {
    constructor(x, y) {
        super(x, y, PLAYER_ID, "player", []);
        this.speed = 1;
    }
    update(timePassed, totaltime) {
        if (keys["ArrowRight"]) {
            this.x += this.speed * timePassed;
            this.spriteIndex = 0;
        }
        if (keys["ArrowLeft"]) {
            this.x -= this.speed * timePassed;
            this.spriteIndex = 1;
        }
        if (keys["ArrowUp"]) {
            this.y -= this.speed * timePassed;
        }
        if (keys["ArrowDown"]) {
            this.y += this.speed * timePassed;
        }
        if(this.x < 0) {
            this.x = 0;
        }
        if(this.x > WIDTHTILES - this.size) {
            this.x = WIDTHTILES - this.size;
        }
        if(this.y < 0) {
            this.y = 0;
        }
        if(this.y > HEIGHTTILES - this.size) {
            this.y = HEIGHTTILES - this.size;
        }
        super.update();
    }
    move() {
        return;
    }
}

function createCharacters() {
    let player = new Player(0, 0);
    characters.push(player);

    //NPU_DATA_SP and NPU_RANDOM
    var e = document.getElementById("movementList");
    var val = e.value;
    if (val == "random") {
        NPU_DATA = NPU_RANDOM
      } else if (val == "sp") {
        NPU_DATA = NPU_DATA_SP
      } else {
        NPU_DATA = NPU_RANDOM
      }

    let data = readCSV(NPU_DATA);
    data = data.map((d) => ({...d, timestep: parseInt(d.timestep), 'x-coor': parseInt(d['x-coor']), 'y-coor': parseInt(d['y-coor']), 'agent': parseInt(d['agent'])}));
    endTime = Math.max(...data.map((d) => d.timestep))
    let npus = {}
    for(let d of data) {
        let id = d['agent'];
        if(!npus[id]) {
            npus[id] = [];
        }
        npus[id].push(d);
    }
    for(let id in npus) {
        console.log(npus[id])
        let character = new Character(npus[id][0]['x-coor'], npus[id][0]['y-coor'], id, npus[id][0]['label'], npus[id]);
        characters.push(character);
    }
    addData(1, characters);
}

function readCSV(csv_data) {
    let data = csv_data.split("\n").filter((l) => l.length > 0);
    let header = data.shift().split(",");
    let data_array = data.map((l) => l.split(",")).map((values) => header.reduce((o, k, i) => ({...o, [k.trim()]: values[i]}), {}));
    return data_array
}

function update() {
    let currentTime = Date.now();
    let timePassed = (currentTime - lastTime) / 1000 * TIMESPEED;
    if(Math.floor(totaltime) != Math.floor(totaltime + timePassed)) {
        addData(Math.floor(totaltime+timePassed), characters)
    }
    totaltime += timePassed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < characters.length; i++) {
        characters[i].update(timePassed, totaltime);
    }
    lastTime = currentTime;
    if(totaltime >= endTime) {
        document.getElementById("gameCanvas").style.display = "none";
        document.getElementById("menu").style.display = "flex";
    } else {
        requestAnimationFrame(update);
    }
}

function addData(time, characters) {
    for(let c of characters) {
        positionData.push({
            "timestep": Math.round(time),
            "agent": c.id,
            "x-coord": Math.round(c.x),
            "y-coord": Math.round(c.y)
        })
    }
}

function saveCSV(data) {
    let csv = ""
    let header = Object.keys(data[0]).join(",");
    csv += header;
    for(let d of data) {
        csv += "\n" + Object.values(d).join(",");
    }
    const link = document.createElement("a");
    const file = new Blob([csv], { type: 'text/csv' });
    link.href = URL.createObjectURL(file);
    link.download = "positions.csv";
    link.click();
    link.remove();
}

function reload() {
    window.location.reload();
}
    

document.addEventListener("keydown", function (e) {
    keys[e.key] = true;
});

document.addEventListener("keyup", function (e) {
    keys[e.key] = false;
});

window.onresize = () => {
    tileSize = Math.min(window.innerWidth / WIDTHTILES, window.innerHeight / HEIGHTTILES);
    canvas.width = WIDTHTILES * tileSize;
    canvas.height = HEIGHTTILES * tileSize;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
}
function start() {
    //#Need to clear out current stuff from map.
    lastTime = Date.now()
    createCharacters();
    update();
}
