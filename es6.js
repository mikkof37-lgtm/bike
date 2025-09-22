// ES6
class Bike {
    constructor(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    displayInfo() {
        console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
    }

    drive() {
        console.log("Driving");
        this.miles += 10;
    }

    reverse() {
        console.log("Reversing");
        this.miles = Math.max(0, this.miles - 5);
    }
}

const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(500, "40mph");
const bike3 = new Bike(1000, "60mph");

//bike 1
bike1.drive();
bike1.drive();
bike1.drive();
bike1.reverse();
bike1.displayInfo();

//bike 2
bike2.drive();
bike2.drive();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();

//bike 3
bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();

// // gumawa po ako ng class bike with price, max_speed, miles that starts at 0
// // then nag add po ako ng methods na displayInfo, drive, reverse
// // driving adds ng 10 miles, reversing minus ng 5 miles, na hindi po bababa ng 0