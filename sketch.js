var canvas, bgI;
var database, gameState;
var form, player, game;
var allPlayers;


function preload(){
  bgI = loadImage("background.png");

}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  
}