// Define an object named person
let person = {
    firstName: "Shawn",
    lastName: "Yang",
    // fullName: function () {
    //     return this.firstName + " " + this.lastName;
    // Shorthand 
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

// Access the object method
console.log(person.fullName()); // Output: Shawn Yang