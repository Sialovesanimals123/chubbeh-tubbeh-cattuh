
var points = 100
localStorage.setItem("p", points)
var mouse, mouseImg, cat, catImg, beartrap1, beartrap11, beartrap22, beartrap33

function preload(){
    catImg = loadImage("assets/cat1img.png");
    mouseImg = loadImage("assets/mouse.png");
    beartrap1 = loadImage("assets/beartrap2.png");
}

function setup(){
    createCanvas(1000,700);
    mouse = createSprite(100,200)
    mouse.addImage(mouseImg)
    mouse.scale = 0.05;

    cat = createSprite(300,300)
    cat.addImage(catImg)
    cat.scale = 0.7;
    edges = createEdgeSprites()

    beartrap11 = createSprite(100,200)
    beartrap11.addImage(beartrap1)
    beartrap11.scale = 0.2

    beartrap22 = createSprite(500,400)
    beartrap22.addImage(beartrap1)
    beartrap22.scale = 0.2

    beartrap33 = createSprite(600,150)
    beartrap33.addImage(beartrap1)
    beartrap33.scale = 0.2


    mouse.velocityX = 12
    mouse.velocityY = 20
}

function Home(){
    window.location.href="index.html"
}



function draw(){

    background("black");
    drawSprites()

    fill("Yellow")
    textSize(20)
    text("Money: "+points, 50,30)

    if(cat.isTouching(mouse)){
       
        points = points + 3
        localStorage.setItem("p", points)
        mouse.x=random(50,950)
        mouse.y=random(50,650)
        mouse.velocityX = random(-9,7)
        mouse.velocityY = random(-11,11)
    }
  if(cat.isTouching(beartrap11)){
    beartrap11.x=random(50,950)
    beartrap11.y=random(50,650)
    points = 0 
    localStorage.setItem("p", points)
  }
 
  
  if(cat.isTouching(beartrap33)){
    beartrap33.x=random(50,950)
    beartrap33.y=random(50,650)
    points = 0 
    localStorage.setItem("p", points)
  }

  if(cat.isTouching(beartrap22)){
    beartrap22.x=random(50,950)
    beartrap22.y=random(50,650)
    points = 0 
    localStorage.setItem("p", points)
  }
    
    if (keyDown("left")){
    cat.x = cat.x -  15;
    
    }

    if (keyDown("right")){
    cat.x = cat.x + 15;
    }

    if (keyDown("down")){
    cat.y = cat.y + 15;
    }
    
    if (keyDown("up")){
        cat.y = cat.y - 15;
    }

    cat.bounceOff(edges)
    mouse.bounceOff(edges)
}



// get bg and mouse image and add those to assets. 
// Make sprite for mouse add image and make it appear on the game screen
