const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, board, arrow;
var baseimage, playerimage, playerArcherImg, boardImg, arrowImg

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImg = loadImage("./assets/playerArcher.png")
  boardImg = loadImage("./assets/board.png")
  arrowImg = loadImage("./assets/arrow.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  var options= {
    isStatic:true
  };


  //create player body
  playerBase = Bodies.rectangle(200, 320, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 70, 50, 180, options );
  World.add(world, player);
  
  angle = 180;
  playerArcher = Bodies.rectangle(270, 305, 180, 150, options);
  World.add(world, playerArcher);

  board = Bodies.rectangle(1350, 305, 180, 150, options);
  World.add(world, board);

  arrow = Bodies.rectangle(1350, 330, 180, 150, options);
  World.add(world, arrow);
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage, player.position.x, player.position.y, 60, 80);

  //show the playerbase image using image() function
  image(baseimage, playerBase.position.x, playerBase.position.y, 200, 180);

  image(playerArcherImg, playerArcher.position.x, playerArcher.position.y, 80, 80);
  
  image(boardImg, board.position.x, board.position.y, 150, 150);

  image(arrowImg, arrow.position.x, arrow.position.y, 60, 70);
  
  Engine.update(engine);





  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
