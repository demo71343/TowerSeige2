
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygonImage = loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600, 750, 1200, 20);
    

    stand1 = new Ground(605, 390, 255, 20);

    box1 = new Box(500, 360, 30, 40);
    box2 = new Box(530, 360, 30, 40);
    box3 = new Box(560, 360, 30, 40);
    box4 = new Box(590, 360, 30, 40);
    box5 = new Box(620, 360, 30, 40);
    box6 = new Box(650, 360, 30, 40);
    box7 = new Box(680, 360, 30, 40);
    box8 = new Box(710, 360, 30, 40);

    //layer 2
    fill("lightpink");
    box9 = new Box(515, 320, 30, 40);
    box10 = new Box(545, 320, 30, 40);
    box11 = new Box(575, 320, 30, 40);
    box12 = new Box(605, 320, 30, 40);
    box13= new Box(635, 320, 30, 40);
    box14= new Box(665, 320, 30, 40);
    box15= new Box(695, 320, 30, 40);

    box16 = new Box(530, 280, 30, 40);
    box17 = new Box(560, 280, 30, 40);
    box18= new Box(590, 280, 30, 40);
    box19 = new Box(620, 280, 30, 40);
    box20 = new Box(650, 280, 30, 40);
    box21 = new Box(680, 280, 30, 40);

    polygon = Bodies.circle(50,200,20); 
    World.add(world,polygon);


    sling = new Rope(this.polygon , {x:100,y:200} );

    console.log(sling);
}
    function draw(){
        
        background("lightpink");
        
        Engine.update(engine);
        
        ground1.display();
        
        
        stand1.display();

        fill("blue");
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();

        //
        fill("lightblue");
        box9.display();
        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();
        box15.display();
        //
        fill("lightgreen");
        box16.display();
        box17.display();
        box18.display();
        box19.display();
        box20.display();
        box21.display();


        imageMode(CENTER);
        image(polygonImage, polygon.position.x,polygon.position.y, 40,40);

        sling.display();
        fill("BLUE");
        textSize(20);
        text("Drag the hexagon Stone and Release it, to launch it towards the block",20,50);
    }

    function mouseDragged(){
        Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY})
         
     }
     function mouseReleased(){
        sling.fly();
         
     }

     function keyPressed(){
         if(keyCode === 32)
        sling.attach(this.polygon);
         
     }
     