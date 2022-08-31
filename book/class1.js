class Planet {
	constructor(name, radius) {
		this.name = name;
		this.radius = radius;
	}

	getSurfaceArea() {
		let SurfaceArea = 4 * Math.PI * Math.pow(this.radius, 2);
		console.log(SurfaceArea + "square km!");
		return SurfaceArea;
	}
}

let myPlanet = new Planet("Земля", 6378);
console.log(myPlanet.name);
