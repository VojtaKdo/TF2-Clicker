//start
const Start = document.getElementById("Start");
const Sponsors = document.getElementById("Sponsors");
const backSponsors = document.getElementById("backSponsors");
const carska = document.getElementById("carska");
const filip = document.getElementById("filip");
const adamek = document.getElementById("adamek");
const ondra = document.getElementById("ondra");
const dan = document.getElementById("dan");
const kostecky = document.getElementById("kostecky");
const hry =  document.getElementById("hry");

const Sazka = document.getElementById("Sazka");
const MineBlock = document.getElementById("MineBlock");
const Yasuo = document.getElementById("Yasuo");
const Payday = document.getElementById("Payday");
const Cat = document.getElementById("Cat");
const Roguelike = document.getElementById("Roguelike");

//spawn
const shop = document.getElementById("shop");
const battle = document.getElementById("battle");
const debug = document.getElementById("debug");
const killCounter = document.getElementById("killCounter");
const spySpawn = document.getElementById("spySpawn");
const obalSpawn = document.getElementById("obalSpawn");
const musicSpawn = document.getElementById("musicSpawn");
const songSpawn = document.getElementById("songSpawn");
const muteSpawn = document.getElementById("muteSpawn");

//battlefield

//tlačítka
const back = document.getElementById("back");
const shoot = document.getElementById("shoot");
const cancelShoot = document.getElementById("cancelShoot");
const songBattle = document.getElementById("songBattle");

//counters
const hpCounterEnemy = document.getElementById("hpCounterEnemy");
const hpCounterSpy = document.getElementById("hpCounterSpy");
const hpCounterBoss1 = document.getElementById("hpCounterBoss1");
const moneyCounter = document.getElementById("moneyCounter");

//characters
const Enemy = document.getElementById("Enemy");
const heavy = document.getElementById("heavy");
const heavyDead = document.getElementById("heavyDead");
const DeathSFX = document.getElementById("DeathSFX");
const ShotgunSFX = document.getElementById("ShotgunSFX");

const Boss1 = document.getElementById("Boss1");
const bossImage = document.getElementById("bossImage");

const spy = document.getElementById("spy");
const SpyShoot = document.getElementById("SpyShoot");
const SpyBattle = document.getElementById("SpyBattle");
const RevolverSFX = document.getElementById("RevolverSFX");
const characters = document.getElementById("characters");

//Shop

//tlačítka
const backShop = document.getElementById("backShop");
const backUpgrade = document.getElementById("backUpgrade");

//muzika
const songShop = document.getElementById("songShop");

//obrázky
const upgrade = document.getElementById("upgrade");
const upgradeList = document.getElementById("upgradeList");
const spyMoney = document.getElementById("spyMoney");

//Upgrades
const damageUpgrade = document.getElementById("damageUpgrade");
const damageCounter = document.getElementById("damageCounter");
const hpUpgrade = document.getElementById("hpUpgrade");
const hpCounter = document.getElementById("hpCounter");
const hokUpgrade = document.getElementById("hokUpgrade");
const hokCounter = document.getElementById("hokCounter");

//životy
let hpSpy = 125;
let hpMaxSpy = 125;
let hpEnemy = 300;
let hpMaxEnemy = 300;
let kill = 0;
let hpBoss1 = 1000;
let hpMaxBoss1 = 1000;

//damage
let damageSpy = 20;
let hok = 0;
let heavyDeath = 0;
let enemyDamage;
let enemyNotDamage;
let boss1Damage;

//money
let money = 0;

const changeColor = (button, color) => {
  button.style.backgroundColor = color;
};

shop.onmouseenter = () => {
  changeColor(shop, "darkred");
};

shop.onmouseleave = () => {
  changeColor(shop, "red");
};

battle.onmouseenter = () => {
  changeColor(battle, "darkred");
};

battle.onmouseleave = () => {
  changeColor(battle, "red");
};

Start.onmouseenter = () => {
  changeColor(Start, "darkred");
};

Start.onmouseleave = () => {
  changeColor(Start, "red");
};

backShop.onmouseenter = () => {
  changeColor(backShop, "darkred");
};

backShop.onmouseleave = () => {
  changeColor(backShop, "red");
};

upgrade.onmouseenter = () => {
  changeColor(upgrade, "#BDBB36");
};

upgrade.onmouseleave = () => {
  changeColor(upgrade, "yellow");
};

backUpgrade.onmouseenter = () => {
  changeColor(backUpgrade, "darkred");
};

backUpgrade.onmouseleave = () => {
  changeColor(backUpgrade, "red");
};

damageUpgrade.onmouseenter = () => {
  changeColor(damageUpgrade, "grey");
};

damageUpgrade.onmouseleave = () => {
  changeColor(damageUpgrade, "white");
};

hpUpgrade.onmouseenter = () => {
  changeColor(hpUpgrade, "grey");
};

hpUpgrade.onmouseleave = () => {
  changeColor(hpUpgrade, "white");
};

hokUpgrade.onmouseenter = () => {
  changeColor(hokUpgrade, "grey");
};

hokUpgrade.onmouseleave = () => {
  changeColor(hokUpgrade, "white");
};

backSponsors.onmouseenter = () => {
  changeColor(backSponsors, "darkred");
};

backSponsors.onmouseleave = () => {
  changeColor(backSponsors, "red");
};

back.onmouseenter = () => {
  changeColor(back, "darkred");
};

back.onmouseleave = () => {
  changeColor(back, "red");
};

Sazka.onmouseenter = () => {
  document.body.style.background = "url(./res/img/sazka.png)";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

Sazka.onmouseleave = () => {
  document.body.style.background = "url(./res/img/money.gif";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

Payday.onmouseenter = () => {
  document.body.style.background = "url(./res/img/payday.png)";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

Payday.onmouseleave = () => {
  document.body.style.background = "url(./res/img/money.gif";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

MineBlock.onmouseenter = () => {
  document.body.style.background = "url(./res/img/mineblock.png)";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

MineBlock.onmouseleave = () => {
  document.body.style.background = "url(./res/img/money.gif)";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

Cat.onmouseenter = () => {
  document.body.style.background = "url(./res/img/catfight.png)";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

Cat.onmouseleave = () => {
  document.body.style.background = "url(./res/img/money.gif)";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

Yasuo.onmouseenter = () => {
  document.body.style.background = "url(./res/img/yasuo.png)";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

Yasuo.onmouseleave = () => {
  document.body.style.background = "url(./res/img/money.gif)";
  document.body.style.transition = "0.3s"
  backgroundFixed();
}

function enemyAttack() {
  enemyDamage = setInterval(() => {
    if (Enemy.style.display == "block") {
      let damageHeavy = Math.random() * 60;
      damageHeavy = parseInt(damageHeavy);
      console.log(damageHeavy);
      hpSpy -= damageHeavy;
      hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
      ShotgunSFX.play();
      ShotgunSFX.volume = 0.04;
      ShotgunSFX.currentTime = 0;
    }
  }, 1300);
}

function enemyNotAttack() {
  enemyNotDamage = setTimeout(() => {
    if (hpEnemy <= 0) {
      enemyAttack();
      hpEnemy += 300;
      money += 50;
      heavyDeath += 1;
      console.log(heavyDeath);
      moneyCounter.innerHTML = `💰 Money: ${money}`;
      shoot.style.pointerEvents = "all";
      cancelShoot.style.display = "none";
      shoot.style.display = "block";
      heavy.style.transform = "rotate(0deg)";
    }
  }, 3000);
}

function boss1Attack() {
  boss1Damage = setInterval(() => {
    if (Boss1.style.display == "block") {
      let damageBoss1 = 50;
      hpSpy -= damageBoss1;
      hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
      money += 500;
      moneyCounter.innerHTML = `💰 Money: ${money}`;
    }
  }, 2500);
}

function backgroundFixed(){
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
}

Start.onclick = () => {
  songSpawn.play();
  songSpawn.volume = 0.04;

  Start.style.display = "none";
  Sponsors.style.display = "none";
  spySpawn.style.display = "block";
  battle.style.display = "block";
  shop.style.display = "block";
  musicSpawn.style.display = "block";
  debug.style.display = "block";
  killCounter.style.display = "block";

  document.body.style.background = "url(./res/img/spawn.jpg)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};

Sponsors.onclick = () => {
  Start.style.display = "none";
  Sponsors.style.display = "none";
  backSponsors.style.display = "block";
  hry.style.display = "block";
  Sazka.style.display = "block";
  Yasuo.style.display = "block";
  Cat.style.display = "block";
  Roguelike.style.display = "block";
  MineBlock.style.display = "block";
  Payday.style.display = "block";

  carska.style.display = "block";
  kostecky.style.display = "block";
  filip.style.display = "block";
  dan.style.display = "block";
  adamek.style.display = "block";
  ondra.style.display = "block";

  document.body.style.background = "url(./res/img/money.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};

backSponsors.onclick = () => {
  Start.style.display = "block";
  Sponsors.style.display = "block";
  backSponsors.style.display = "none";
  hry.style.display = "none";
  Sazka.style.display = "none";
  Yasuo.style.display = "none";
  Cat.style.display = "none";
  Roguelike.style.display = "none";
  MineBlock.style.display = "none";
  Payday.style.display = "none";

  carska.style.display = "none";
  kostecky.style.display = "none";
  filip.style.display = "none";
  dan.style.display = "none";
  adamek.style.display = "none";
  ondra.style.display = "none";

  document.body.style.background = "url(./res/img/TF2.png)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
};

musicSpawn.onclick = () => {
  musicSpawn.style.display = "none";
  muteSpawn.style.display = "block";
  if (spySpawn.style.display == "block") {
    songSpawn.pause();
    songSpawn.currentTime = 0;
  }
  if (Enemy.style.display == "block") {
    songBattle.pause();
    songBattle.currentTime = 0;
  }
  if (backShop.style.display == "block") {
    songShop.pause();
    songShop.currentTime = 0;
  }
  if (upgradeList.style.display == "block") {
    songShop.pause();
    songShop.currentTime = 0;
  }
};

debug.onclick = () => {
  hpSpy -= hpSpy;
  hpSpy += hpMaxSpy;
  hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
};

muteSpawn.onclick = () => {
  musicSpawn.style.display = "block";
  muteSpawn.style.display = "none";
  if (spySpawn.style.display == "block") {
    songSpawn.play();
  }
  if (Enemy.style.display == "block") {
    songBattle.play();
  }
  if (backShop.style.display == "block") {
    songShop.play();
  }
  if (upgradeList.style.display == "block") {
    songShop.play();
  }
};

//Shop
shop.onclick = () => {
  spySpawn.style.display = "none";
  shop.style.display = "none";
  debug.style.display = "none";
  killCounter.style.display = "none";
  battle.style.display = "none";
  upgrade.style.display = "block";
  spyMoney.style.display = "block";
  moneyCounter.style.display = "block";

  document.body.style.background = "url(./res/img/shop.png)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";

  backShop.style.display = "block";
  songSpawn.pause();
  songShop.play();
  songShop.volume = 0.04;
  songShop.currentTime = 0;
  musicSpawn.style.display = "block";
  muteSpawn.style.display = "none";
};

upgrade.onclick = () => {
  backShop.style.display = "none";
  upgrade.style.display = "none";
  spyMoney.style.display = "none";
  upgradeList.style.display = "block";
  backUpgrade.style.display = "block";
  damageUpgrade.style.display = "block";
  damageCounter.style.display = "block";
  hpUpgrade.style.display = "block";
  hpCounter.style.display = "block";
  hokUpgrade.style.display = "block";
  hokCounter.style.display = "block";
};

damageUpgrade.onclick = () => {
  if (money >= 200) {
    damageSpy += 10;
    money -= 200;
    moneyCounter.innerHTML = `💰 Money: ${money}`;
    damageCounter.innerHTML = `Damage: ${damageSpy}`;
  }
};

hpUpgrade.onclick = () => {
  if (money >= 200) {
    hpSpy += 10;
    hpMaxSpy += 10;
    money -= 200;
    moneyCounter.innerHTML = `💰 Money: ${money}`;
    hpCounter.innerHTML = `Health: ${hpSpy}`;
    hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
  }
};

hokUpgrade.onclick = () => {
  if (money >= 100) {
    money -= 100;
    hok += 5;
    hokCounter.innerHTML = `Health on kill: ${hok}`;
    moneyCounter.innerHTML = `💰 Money: ${money}`;
  }
};

backUpgrade.onclick = () => {
  upgradeList.style.display = "none";
  backUpgrade.style.display = "none";
  damageUpgrade.style.display = "none";
  damageCounter.style.display = "none";
  hpUpgrade.style.display = "none";
  hpCounter.style.display = "none";
  hokUpgrade.style.display = "none";
  hokCounter.style.display = "none";
  backShop.style.display = "block";
  upgrade.style.display = "block";
  spyMoney.style.display = "block";
};

backShop.onclick = () => {
  spySpawn.style.display = "block";
  shop.style.display = "block";
  battle.style.display = "block";
  debug.style.display = "block";
  killCounter.style.display = "block";
  upgrade.style.display = "none";
  spyMoney.style.display = "none";
  moneyCounter.style.display = "none";
  document.body.style.background = "url(./res/img/spawn.jpg)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";

  backShop.style.display = "none";
  songSpawn.play();
  songShop.pause();
  songSpawn.currentTime = 0;
  musicSpawn.style.display = "block";
  muteSpawn.style.display = "none";
};

battle.onclick = () => {
  if (cancelShoot.style.display == "block") {
    cancelShoot.style.pointerEvents = "none";
    shoot.style.pointerEvents = "none";
    clearInterval(enemyNotDamage);
  }

  if (cancelShoot.style.display == "none") {
    shoot.style.pointerEvents = "all";
    clearInterval(enemyNotDamage);
  }

  //Spawn
  spySpawn.style.display = "none";
  shop.style.display = "none";
  debug.style.display = "none";
  killCounter.style.display = "none";
  battle.style.display = "none";

  //battlefield
  document.body.style.background = "url(./res/img/2fort.png)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";

  //muzika
  songSpawn.pause();
  songBattle.play();
  songBattle.volume = 0.04;
  musicSpawn.style.display = "block";
  muteSpawn.style.display = "none";
  songBattle.currentTime = 0;

  spy.style.display = "block";
  characters.style.display = "flex";
  shoot.style.display = "block";
  back.style.display = "block";

  //útočení Heavyho
  if (kill != 10) {
    enemyAttack();
    heavy.style.transform = "rotate(0deg)";
    Enemy.style.display = "block";
  }

  //útočení Boss1
  else if (kill == 10) {
    clearInterval(enemyDamage);
    boss1Attack();
    Enemy.style.display = "none";
    heavy.style.display = "none";
    hpCounterEnemy.style.display = "none";
    Boss1.style.display = "block";
    hpCounterBoss1.style.display = "block";
    hpCounterBoss1.innerHTML = `${hpBoss1}/${hpBoss1} HP`;
  }
};

back.onclick = () => {
  clearInterval(enemyDamage);
  clearInterval(enemyNotDamage);
  clearInterval(boss1Damage);
  spySpawn.style.display = "block";
  SpyShoot.style.display = "none";
  shop.style.display = "block";
  debug.style.display = "block";
  killCounter.style.display = "block";
  battle.style.display = "block";
  document.body.style.background = "url(./res/img/spawn.jpg)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";

  spy.style.display = "none";
  characters.style.display = "none";
  shoot.style.display = "none";
  cancelShoot.style.display = "none";
  back.style.display = "none";

  hpSpy -= hpSpy;
  hpSpy += hpMaxSpy;
  hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;

  //muzika
  songSpawn.play();
  songBattle.pause();
  DeathSFX.pause();
  DeathSFX.currentTime = 0;
  musicSpawn.style.display = "block";
  muteSpawn.style.display = "none";
  songSpawn.currentTime = 0;

  if (kill != 10) {
    Enemy.style.display = "none";

    hpEnemy -= hpEnemy;
    hpEnemy += 300;
    hpCounterEnemy.innerHTML = `${hpEnemy}/300 HP`;
  } else if (kill == 10) {
    Boss1.style.display = "none";

    hpBoss1 -= hpBoss1;
    hpBoss1 += hpMaxBoss1;
    hpCounterBoss1.innerHTML = `${hpBoss1}/1000 HP`;
  }
};

// útočení Spy
shoot.onclick = () => {
  hpBoss1 -= damageSpy;
  hpEnemy -= damageSpy; 
  hpCounterEnemy.innerHTML = `${hpEnemy}/300 HP`;
  hpCounterBoss1.innerHTML = `${hpBoss1}/${hpMaxBoss1} HP`;
  enemyNotAttack();

  if (hpEnemy <= 0 && Enemy.style.display == "block") {
    clearInterval(enemyDamage);
    heavy.style.transform = "rotate(90deg)";
    DeathSFX.play();
    DeathSFX.volume = 0.2;
    DeathSFX.currentTime = 0;
    cancelShoot.style.display = "block";
    shoot.style.display = "none";
    cancelShoot.style.pointerEvents = "none";
    kill++;
    killCounter.innerHTML = `Kill counter: ${kill}`;
  } 
  else if (hpBoss1 <= 0 && Boss1.style.display == "block") {
    clearInterval(boss1Damage);
    bossImage.style.transform = "rotate(90deg)";
    cancelShoot.style.display = "block";
    shoot.style.display = "none";
    cancelShoot.style.pointerEvents = "none";
    kill++;
    killCounter.innerHTML = `Kill counter: ${kill}`;

    spySpawn.style.display = "block";
    SpyShoot.style.display = "none";
    shop.style.display = "block";
    debug.style.display = "block";
    killCounter.style.display = "block";
    battle.style.display = "block";
    document.body.style.background = "url(./res/img/spawn.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    spy.style.display = "none";
    Boss1.style.display = "none";
    characters.style.display = "none";
    shoot.style.display = "none";
    cancelShoot.style.display = "none";
    back.style.display = "none";

    hpSpy -= hpSpy;
    hpSpy += hpMaxSpy;
    hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
  }

  if (hpEnemy <= 0 || hokCounter > 0) {
    hpSpy += hok;
    hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
  }

  if (hpSpy >= hpMaxSpy) {
    hpSpy = hpMaxSpy;
  }

  spy.style.display = "none";
  SpyShoot.style.display = "block";
  RevolverSFX.play();
  RevolverSFX.currentTime = 0;
  RevolverSFX.volume = 0.04;

  setTimeout(() => {
    spy.style.display = "block";
    SpyShoot.style.display = "none";
  }, 1000);
};

window.onload = () => {
  setInterval(() => {
    if (hpSpy <= 0) {
      clearInterval(enemyDamage);
      spySpawn.style.display = "block";
      shop.style.display = "block";
      battle.style.display = "block";
      debug.style.display = "block";
      killCounter.style.display = "block";
      document.body.style.background = "url(./res/img/spawn.jpg)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";

      Enemy.style.display = "none";
      spy.style.display = "none";
      characters.style.display = "none";
      back.style.display = "none";
      shoot.style.display = "none";
      moneyCounter.style.display = "none";
      muteSpawn.style.display = "none";
      musicSpawn.style.display = "block";
      songBattle.pause();
      songSpawn.play();
      songSpawn.currentTime = 0;

      hpSpy += hpMaxSpy;
      hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
      hpEnemy -= hpEnemy;
      hpEnemy += 300;
      hpCounterEnemy.innerHTML = `${hpEnemy}/300 HP`;
      killCounter.innerHTML = `Kill counter: ${kill}`;
    } else if (kill < 0) {
      kill++;
      killCounter.innerHTML = `Kill counter: ${kill}`;
    }
  }, 10);
};

// útočení nepřítele
