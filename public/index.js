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

















