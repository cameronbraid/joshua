class Dog {
    constructor(name, energy) {
        this.name = name
        this.energy = energy;
    }
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount;
        setTimeout(() => {
            console.log(`Energy: ${this.energy}.`)
        }, 1000)
    }
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length;
        setTimeout(() => {
            console.log(`Energy: ${this.energy}.`)
        }, 1000)
    }
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length;
        setTimeout(() => {
            console.log(`Energy: ${this.energy}.`)
        }, 1000)
    }
}

let rodger = new Dog(`Rodger`, 10)
console.log(rodger)