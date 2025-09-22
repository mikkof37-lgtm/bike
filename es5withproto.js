// ES5 with prototype
function Bike(price, max_speed) {
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;
}

Bike.prototype.displayInfo = function() {
    console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Miles: " + this.miles);
};

Bike.prototype.drive = function() {
    console.log("Driving");
    this.miles += 10;
};

Bike.prototype.reverse = function() {
    console.log("Reversing");
    this.miles = Math.max(0, this.miles - 5);
};

// instances
var bike1 = new Bike(200, "25mph");
var bike2 = new Bike(500, "40mph");
var bike3 = new Bike(1000, "60mph");

// actions
bike1.drive(); bike1.drive(); bike1.drive(); bike1.reverse(); bike1.displayInfo();
bike2.drive(); bike2.drive(); bike2.reverse(); bike2.reverse(); bike2.displayInfo();
bike3.reverse(); bike3.reverse(); bike3.reverse(); bike3.displayInfo();

// Ang difference lang po nito sa ES5 (No prototype) is every bike object ay may own copy po sila ng functions which uses more memory,
// while dito po sa prototype, lahat po ng bikes ay share lang po sila ng functions para mas efficient po sa memory usage.
