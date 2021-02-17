var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;
var distance = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game  = new Game();
  game.getState();
  game.start();
  
 
}

function draw(){
  if(playerCount === 4 ){
    game.play();
  }
}

