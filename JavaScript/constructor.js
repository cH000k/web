// Creating the Constructor Function
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// Adding methods to Constructor
// This will add the function under __proto__ instead of creating it as an object inside the constructor function
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
};

Color.prototype.rgba = function (a=1.0) {
    const { r, g, b } = this;
    return `rgba(${r},${g},${b},${a})`;
}

// Calling the Constructor using 'new' operator
const color1 = new Color(40, 50, 60);

console.log(color1.rgb(40, 255, 60));
console.log(color1.rgba(40, 255, 60, 0.5));



// Class

class Color2 {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    greet() {
        return `HELLO FROM ${this.name}`;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    
}

const c1 = new Color2(255, 67, 89, 'tomato');
console.log(c1.greet());