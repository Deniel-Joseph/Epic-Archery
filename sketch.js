const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var board,boardImage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  handimage = loadImage("./assets/playerArcher.png");
  boardimage = loadImage("./assets/board.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var Options = {
    isStatic: true
  };

  //create player base body
  playerBase = Bodies.rectangle(200,350,180,150,Options);
  World.add(world, playerBase);

  //create player body
  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,Options);
  World.add(world,player);

  //create hand body
  hand = Bodies.rectangle(200,200,50,50);
  World.add(world,hand);

  //create board
  board = Bodies.rectangle(200,200,50,50);
  World.add(world,board);
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,80,player.position.y,50,180);

  //show the playerbase image using image() function
  image(baseimage,30,playerBase.position.y,180,150);

  //show the Hand image using image() function
  image(handimage,120,200,80,100)

  //show the playerbase image using image() function
  image(boardimage,680,300,130,130);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
