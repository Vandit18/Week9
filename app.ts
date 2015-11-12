class Person
{
	private _name:string;
	//constrctor
	constructor(name:string)
	{
		
		this._name = name;
	}
	
	//public method
	public sayName():void{
		
		console.log("your name is:" + this._name);
	}
	
}

var van = new Person("V");
van.sayName();