// ES5 (no prototype)
function Bike(price, max_speed) {
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;

    this.displayInfo = function() {
        console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Miles: " + this.miles);
    };

    this.drive = function() {
        console.log("Driving");
        this.miles += 10;
    };

    this.reverse = function() {
        console.log("Reversing");
        this.miles = Math.max(0, this.miles - 5);
    };
}

// instances
var bike1 = new Bike(200, "25mph");
var bike2 = new Bike(500, "40mph");
var bike3 = new Bike(1000, "60mph");

// actions
bike1.drive(); bike1.drive(); bike1.drive(); bike1.reverse(); bike1.displayInfo();
bike2.drive(); bike2.drive(); bike2.reverse(); bike2.reverse(); bike2.displayInfo();
bike3.reverse(); bike3.reverse(); bike3.reverse(); bike3.displayInfo();

// // // Dito naman po sa ES5 (no prototype), gumawa ako ng class using function constructor, then nilagay ko
// // // po yung methods sa loob ng constructor para sa lahat po ng bikes. Same lang naman po ata ng output sa ES6 version