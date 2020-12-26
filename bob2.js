class bob2
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;		

			push()       
			rectMode(CENTER)
			strokeWeight(5);
			fill(255,0,255)
			ellipse(287,400,this.r, this.r);
			pop()
			
	}

}