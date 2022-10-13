class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`
    }
}

class Dog extends Pet {
    bark() {
        return "WOOOOF!!"
    }

    eat() {
        return `${this.name} is happy with the food!`
    }
}

class Cat extends Pet{
    constructor(name, age, livesleft = 9) {
        // Super will reference value on the inherited class
        super(name, age);
        this.livesleft = livesleft;
    }
    meow() {
        return "MEOOOOW!!"
    }
}