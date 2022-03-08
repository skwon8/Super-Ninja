class Ninja {
    constructor(nameInput){
        this.name = nameInput;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Name: ${this.name}`)
    }

    showStats(){
        console.log(`Ninja info: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`)
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();




