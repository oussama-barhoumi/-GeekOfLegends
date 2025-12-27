class Character {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.stance = "normal";
  }

  setStance(stance) {
    this.stance = stance;
  }

  getAttack() {
    if (this.stance === "attack") return this.attack * 1.4;
    if (this.stance === "defense") return this.attack * 0.5;
    return this.attack;
  }

  getDamage(dmg) {
    if (this.stance === "defense") dmg *= 0.5;
    this.hp -= dmg;
    console.log(this.name + " loses " + dmg + " HP");
  }
}
class Warrior extends Character {
  constructor(name, hp, attack) {
    super(name, hp, attack);
    this.rage = 0;
  }

  attackBoss(boss) {
    this.rage++;
    let dmg = this.getAttack();

    if (this.rage === 4) {
      dmg *= 1.25;
      console.log(this.name + " enters RAGE MODE ");
      this.rage = 0;
    }

    boss.hp -= dmg;
    console.log(this.name + " DRAB " + boss.name + " BI " + dmg);
  }
}
class Mage extends Character{
    constructor(name , hp , attack){
        super(name , hp , attack);
        this.mana = [7 , 9 , 11 ][Math.floor(Math.random() * 3)];
    }
    attackBoss(boss){
        if (this. mana < 2){
            console.log(this.name + "t9adat lmana")
            this.mana += 7 
        }        
        this.mana -= 2;
        let dmg = this.getAttack();
        boss.hp -= dmg;
        console.log(this.name + "drab" + boss.name + " bi " + dmg);
    }

}
class Archer extends Character{
    constructor(name , hp , attack){
        super(name , hp , attack);
        this.arrows = [7 , 8 , 9 , 10 , 11 ][Math.floor(Math.random() * 5)];
    }

    attackBoss(boss){
        if (this.arrows < 2){
            console.log(this.name + "3ando sahem")
            this.arrows += 6;
            return
        }
        this.arrows -= 2
        this.arrows += 1
        let dmg = this.getAttack();
        console.log(this.name + "shooots " + boss.name + "for" + dmg)
    
    }
}

















