"use strict"

if(true){
    var bodyEl = document.querySelector("body");
    var restartKnappEl = document.querySelector("#restartKnapp");
    var flaggKnappEl = document.querySelector("#flaggKnapp");
    var innpakningEl = document.querySelector("#innpakning");
    var tryggeIgjenEl = document.querySelector("#tryggeIgjen");
    var brettEl = document.querySelector("#brett");
    var tidEl = document.querySelector("#tid");

    var width, height, bombeProsent, antallBomber, tryggeIgjen, timer;
    var brett = [];
    var flaggModus = false;
}

class rute{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.bombe = false;
        this.adjBombeCount = 0;
        this.ruteEl;
        this.trykket = false;
        this.flagget = false;
    }
    trykk(){
        if(flaggModus){
            this.flagg();
            return;
        }
        if(this.trykket || this.flagget){
            return;
        }
        this.trykket = true;

        if(this.bombe){
            gameOver();
        } else {
            tryggeIgjen--;

            if(tryggeIgjen === 0){
                gameWin();
            }
        
            if(this.adjBombeCount === 0){

                this.ruteEl.classList.remove("aktiv");
                this.ruteEl.classList.add("dod");

                //Sjekk om opp, ned høyre eller venstre har 0 adj, og kjør trykk metode på dem.

                var x = this.x;
                var y = this.y;

                if(brett[x-1] !== undefined){
                    brett[x-1][y].trykk();
                }
                if(brett[x+1] !== undefined){
                    brett[x+1][y].trykk();
                }
                if(brett[x][y-1] !== undefined){
                    brett[x][y-1].trykk();
                }
                if(brett[x][y+1] !== undefined){
                    brett[x][y+1].trykk();
                }


                if(brett[x-1] !== undefined && brett[x-1][y-1] !== undefined){
                    brett[x-1][y-1].trykk();
                }
                if(brett[x-1] !== undefined && brett[x-1][y+1] !== undefined){
                    brett[x-1][y+1].trykk();
                }
                if(brett[x+1] !== undefined && brett[x+1][y+1] !== undefined){
                    brett[x+1][y+1].trykk();
                }
                if(brett[x+1] !== undefined && brett[x+1][y-1] !== undefined){
                    brett[x+1][y-1].trykk();
                }



            } else {
                this.ruteEl.innerHTML = "<b>" + String(this.adjBombeCount) + "</b>";
                this.ruteEl.classList.remove("aktiv");
                this.ruteEl.classList.add("dod");
            }
        }
        oppdaterTrygge();
    }
    flagg(){
        if(this.trykket){
            return;
        }
        if(this.flagget){
            this.flagget = false;
            this.ruteEl.classList.remove("flagget");
        } else {
            this.flagget = true;
            this.ruteEl.classList.add("flagget");
        }
    }
}


init();



function init(){
    initValues();
    lagBrettArray();
    bestemBomber();
    bestemAdjBombeTall();
    oppdaterTrygge();
    lagBrettElementer();
    startTimer();
    startKnappLyttere();
}


function initValues(){
    width = 30 + Math.floor(Math.random()*10);
    height = 15 + Math.floor(Math.random()*7);
    bombeProsent = 0.17;
    antallBomber = Math.floor(width * height * bombeProsent);
    tryggeIgjen = width * height - antallBomber;
}

function lagBrettArray(){
    for(var x = 0; x < width; x++){
        var kolonneArray = [];
        for(var y = 0; y < height; y++){
            kolonneArray.push(new rute(x, y));
        }
        brett.push(kolonneArray);
    }
}

function bestemBomber(){
    var a = antallBomber
    while(a > 0){
        var randX = Math.ceil(Math.random()*width)-1;
        var randY = Math.ceil(Math.random()*height)-1;
        if(!brett[randX][randY].bombe){
            brett[randX][randY].bombe = true;
        }
        a--;
    }
}

function bestemAdjBombeTall(){
    for(var x = 0; x < width; x++){
        for(var y = 0; y < height; y++){
            if(brett[x][y].bombe){
                for(var i = 0; i < 3; i++){
                    for(var j = 0; j < 3; j++){
                        if(x-1+i>=0&&x-1+i<width&&y-1+j>=0&&y-1+j<height){
                            brett[x-1+i][y-1+j].adjBombeCount++;
                        }
                    }
                }

            }
        }
    }
}

function lagBrettElementer(){
    for(var x = 0; x < width; x++){
        var kolonneEl = document.createElement("div");
        kolonneEl.setAttribute("class", "kolonne");
        for(var y = 0; y < height; y++){
            var ruteEl = document.createElement("div");
            ruteEl.setAttribute("class", "rute");
            ruteEl.classList.add("aktiv");
            ruteEl.setAttribute("kolonne", String(x));
            ruteEl.setAttribute("rad", String(y));
            ruteEl.addEventListener("click", ruteTrykk);
            kolonneEl.appendChild(ruteEl);
            brett[x][y].ruteEl = ruteEl;
        }
        brettEl.appendChild(kolonneEl);
    }
}

function startTimer(){
    timer = setInterval(sekund, 1000);
}

function startKnappLyttere(){
    flaggKnappEl.addEventListener("click", endreFlaggModus);
    restartKnappEl.addEventListener("click", function(){location.reload()});
    bodyEl.addEventListener("keydown", tasteTrykk);
}

function sekund(){
    tid.innerHTML++;
}

function tasteTrykk(e){
    if(e.key === "b"){
        endreFlaggModus();
    }
}

function endreFlaggModus(){
    if(flaggModus){
        flaggModus = false;
        flaggKnappEl.classList.remove("flagg");
        flaggKnappEl.classList.add("ikkeFlagg");
    } else {
        flaggModus = true;
        flaggKnappEl.classList.remove("ikkeFlagg");
        flaggKnappEl.classList.add("flagg");
    }
}


function oppdaterTrygge(){
    tryggeIgjen = width * height - antallBomber;
    for(var i = 0; i < width; i++){
        for(var j = 0; j < height; j++){
            if(brett[i][j].trykket){
                tryggeIgjen--;
            }
        }
    }
    tryggeIgjenEl.innerHTML = "Trygge ruter: " + String(tryggeIgjen);
}

function ruteTrykk(e){
    var kolonne = Number(e.target.getAttribute("kolonne"));
    var rad = Number(e.target.getAttribute("rad"));

    brett[kolonne][rad].trykk();
}

function gameOver(){
    console.log("Du tapte spillet.");
    var timer = setTimeout(function(){location.reload()}, 1000);
}

function gameWin(){
    console.log("Gratuelerer, du vant spillet!");
}