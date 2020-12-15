var canvas, database;
var playerCount;
var gameState=0;
var form, player, game;


function setup(){
  canvas=createCanvas(400,400);
  database = firebase.database();
  game=new Game();
  game.gameState();
  game.start();
  
}

function draw(){
  background("white");
  
    
    
  
}


