
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
    console.log(this.name + " 5hsar " + dmg + " HP");
  }

  isAlive() {
    return this.hp > 0;
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
      console.log(this.name + " d5hole li max power mood");
      this.rage = 0;
    }

    boss.hp -= dmg;
    console.log(this.name + " drabe " + boss.name + " b " + dmg);
  }
}


class Mage extends Character {
  constructor(name, hp, attack) {
    super(name, hp, attack);
    this.mana = [7, 9, 11][Math.floor(Math.random() * 3)];
  }

  attackBoss(boss) {
    if (this.mana < 2) {
      console.log(this.name + " has no mana, skipi 3abed samad");
      this.mana += 7;
      return;
    }

    this.mana -= 2;
    let dmg = this.getAttack();
    boss.hp -= dmg;
    console.log(this.name + "  tfal  3la " + boss.name + " ou daye3 lih " + dmg);
  }
}


class Archer extends Character {
  constructor(name, hp, attack) {
    super(name, hp, attack);
    this.arrows = [7, 8, 9, 10, 11][Math.floor(Math.random() * 5)];
  }

  attackBoss(boss) {
    if (this.arrows < 2) {
      console.log(this.name + " mafi da5hira la t9awes ou bta3id");
      this.arrows += 6;
      return;
    }

    this.arrows -= 2;
    this.arrows += 1;

    let dmg = this.getAttack();
    boss.hp -= dmg;
    console.log(this.name + " 9awas 3ala " + boss.name + " bi " + dmg);
  }
}


class Boss {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.attack = attack;
  }

  attackHeroes(heroes) {
    let alive = heroes.filter(h => h.isAlive());
    let target = alive[Math.floor(Math.random() * alive.length)];
    console.log(this.name + " hjam 3la " + target.name);
    target.getDamage(this.attack);
  }

  needRiddle() {
    return this.hp <= this.maxHp * 0.2;
  }
}


const riddles = [
  { q: "Once spoken, I no longer exist. Who am I?", a: "silence" },
  { q: "What does Math.floor(1.3 * 10)?", a: "13" },
  { q: "What is the index of first 'i' in this question?", a: "18" }
];

function askRiddle() {
  let r = riddles[Math.floor(Math.random() * riddles.length)];
  let tries = 3;

  while (tries > 0) {
    let user = prompt(r.q)
      .toLowerCase()
      .replaceAll(" ", "");

    if (user.includes(r.a)) {
      console.log(" haydara 9awess!");
      return true;
    }
    tries--;
  }
  return false;
}


let bosses = [
  new Boss("mehdi", 300, 25),
  new Boss("sara", 280, 30),
  new Boss("ayoub", 260, 28)
];

let boss = bosses[Math.floor(Math.random() * bosses.length)];
console.log("👹 Boss Appears: " + boss.name);

let heroes = [
  new Warrior("oussama", 150, 25),
  new Mage("hfsa", 120, 30),
  new Archer("chourouk", 130, 22)
];


while (boss.hp > 0 && heroes.some(h => h.isAlive())) {

  console.log(" 9ital agian");


  heroes.forEach(hero => {
    if (!hero.isAlive()) return;

    let choice = prompt(
      hero.name + " choose stance: attack / defense / normal"
    ).toLowerCase();

    if (["attack", "defense", "normal"].includes(choice)) {
      hero.setStance(choice);
    } else {
      hero.setStance("normal");
    }
  });


  heroes.forEach(hero => {
    if (hero.isAlive() && boss.hp > 0) {
      hero.attackBoss(boss);
    }
  });


  if (boss.needRiddle()) {
    console.log(" wa9et lhasem");
    if (!askRiddle()) {
      console.log(" Heroes failed mkl5hine");
      break;
    } else {
      console.log("booss skipana");
      break;
    }
  }


  if (boss.hp > 0) {
    boss.attackHeroes(heroes);
  }

  console.log("👹 Boss HP:", boss.hp);
  console.log(" 9awiso mra ou5hra ==========");
}

console.log("🏁 GAME END");