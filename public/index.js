class Characters{
    constructor(name , hp , attack){
        this.name = name ; 
        this.hp = hp ;
        this.attack = attack;
        this.stance ="normal"
    }
    Setstance(stance){
        this.stance = stance;
    }
    getattack(){
        if (this.stance ==="attack")
            return this.attack * 1.5;
        else if ( this.stance ==="defense")
            return this.attack * 0.5;
        else 
            return this.attack;
    }
    getdamage(damage){
        if (this.stance ==="defense") damage = damage * 0.5;
        this.hp -= damage;
        console.log(`${this.name} received ${damage} damage, remaining HP: ${this.hp}`);
    }
}let hero = new Characters("oussama", 100, 20);

console.log("Normal attack:", hero.getattack());

hero.Setstance("attack");
console.log("Attack stance:", hero.getattack());

hero.Setstance("defense");
hero.getdamage(40);
console.log("HP after defense:", hero.hp);

