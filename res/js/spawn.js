//start
const Start = document.getElementById("Start");

//spawn
const shop = document.getElementById("shop");
const battle = document.getElementById("battle");
const spySpawn = document.getElementById("spySpawn");
const obalSpawn = document.getElementById("obalSpawn");
const musicSpawn = document.getElementById("musicSpawn");
const songSpawn = document.getElementById("songSpawn");
const muteSpawn = document.getElementById("muteSpawn");

//battlefield

//tlačítka
const back = document.getElementById("back");
const shoot = document.getElementById("shoot");
const hpCounterSpy = document.getElementById("hpCounterSpy");
const songBattle = document.getElementById("songBattle");

//counters
const hpCounterEnemy = document.getElementById("hpCounterEnemy");
const moneyCounter = document.getElementById("moneyCounter");

//characters
const Enemy = document.getElementById("Enemy");
const DeathSFX = document.getElementById("DeathSFX");
const ShotgunSFX = document.getElementById("ShotgunSFX");

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

//damage
let damageSpy = 25;
let damageHeavy = 25;
let hok = 0;

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

Start.onclick = () => {
  songSpawn.play();
  songSpawn.volume = 0.04;

  Start.style.display = "none";
  spySpawn.style.display = "block";
  battle.style.display = "block";
  shop.style.display = "block";
  musicSpawn.style.display = "block";

  document.body.style.background = "url(./res/img/spawn.jpg)";
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
  if (Enemy.style.display == "none") {
    songBattle.pause();
    songBattle.currentTime = 0;
  }
  if (backShop.style.display == "block") {
    songShop.pause();
    songShop.currentTime = 0;
  }
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
};

//Shop
shop.onclick = () => {
  spySpawn.style.display = "none";
  shop.style.display = "none";
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
  if (battle.innerHTML != "Back →") {
    //Spawn
    spySpawn.style.display = "none";
    shop.style.display = "none";
    //battlefield
    document.body.style.background = "url(./res/img/2fort.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    Enemy.style.display = "block";
    spy.style.display = "block";
    characters.style.display = "flex";
    shoot.style.display = "block";

    //muzika
    songSpawn.pause();
    songBattle.play();
    songBattle.volume = 0.04;
    musicSpawn.style.display = "block";
    muteSpawn.style.display = "none";
    songBattle.currentTime = 0;

    battle.innerHTML = "Back →";
    battle.style.float = "right";
    battle.style.marginTop = "-300px";
  } 
  
  else if (battle.innerHTML != "← Battlefield") {
    spySpawn.style.display = "block";
    SpyShoot.style.display = "none";
    shop.style.display = "block";
    document.body.style.background = "url(./res/img/spawn.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    Enemy.style.display = "none";
    spy.style.display = "none";
    characters.style.display = "none";
    shoot.style.display = "none";

    hpSpy -= hpSpy;
    hpSpy += hpMaxSpy;
    hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;

    hpEnemy -= hpEnemy;
    hpEnemy += 300;
    hpCounterEnemy.innerHTML = `${hpEnemy}/300 HP`;

    //muzika
    songSpawn.play();
    songBattle.pause();
    musicSpawn.style.display = "block";
    muteSpawn.style.display = "none";
    songSpawn.currentTime = 0;

    battle.innerHTML = "← Battlefield";
    battle.style.float = "left";
    battle.style.margin = "0";
  }
};

// útočení Spy
shoot.onclick = () => {
  hpEnemy -= damageSpy;
  hpCounterEnemy.innerHTML = `${hpEnemy}/300 HP`;
  setTimeout(() => {
    if (hpEnemy <= 0) {
      hpEnemy += 300;
      money += 50;
      moneyCounter.innerHTML = `💰 Money: ${money}`;
      DeathSFX.play();
      DeathSFX.volume = 0.2;
      DeathSFX.currentTime = 0;
    }
  }, 1);

  if (hpEnemy <= 0 || hokCounter > 0) {
    hpSpy += hok;
    hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
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
  const enemyDamage = setInterval(() => {
    if (Enemy.style.display == "block") {
      hpSpy -= damageHeavy;
      hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
      ShotgunSFX.play();
      ShotgunSFX.volume = 0.04;
      ShotgunSFX.currentTime = 0;
    }
  }, 2000);

  setInterval(() => {
    if (hpSpy <= 0) {
      spySpawn.style.display = "block";
      shop.style.display = "block";
      battle.style.display = "block";
      document.body.style.background = "url(./res/img/spawn.jpg)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";

      Enemy.style.display = "none";
      spy.style.display = "none";
      characters.style.display = "none";
      shoot.style.display = "none";
      moneyCounter.style.display = "none";
      songBattle.pause();
      songSpawn.play();
      songSpawn.currentTime = 0;

      hpSpy += hpMaxSpy;
      hpCounterSpy.innerHTML = `${hpSpy}/${hpMaxSpy} HP`;
      hpEnemy -= hpEnemy;
      hpEnemy += 300;
      hpCounterEnemy.innerHTML = `${hpEnemy}/300 HP`;

      battle.innerHTML = "← Battlefield";
      battle.style.float = "left";
      battle.style.margin = "0";
    }
  }, 1);
};

// útočení nepřítele
