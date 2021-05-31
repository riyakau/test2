class Box{

    constructor(){

        var op1= {

            restitution:0.8
            
            }

        this.box = Bodies.rectangle(200,100,50,50);
        World.add(world,this.box);

    }

    display(){
        var pos= this.box.position;
        push();
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,50,50);
        pop();



    }
    












}