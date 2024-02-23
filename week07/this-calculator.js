// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    read() {
        this.a = +prompt('a: ');
        this.b = +prompt('b: ');
    },

    sum() {
        return "Sum is " + (this.a + this.b);
    },

    mul() {
        return "Product is " + (this.a * this.b);
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());