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

//životy
let hpSpy = 125;
let hpEnemy = 300;

//damage
let damageSpy = 50;
let damageHeavy = 25;

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

back.onmouseenter = () => {
  changeColor(back, "darkred");
};

back.onmouseleave = () => {
  changeColor(back, "red");
};

Start.onmouseenter = () => {
  changeColor(Start, "darkred");
};

Start.onmouseleave = () => {
  changeColor(Start, "red");
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
  if (spySpawn.style.display == "none") {
    songBattle.pause();
    songBattle.currentTime = 0;
  }
};

muteSpawn.onclick = () => {
  musicSpawn.style.display = "block";
  muteSpawn.style.display = "none";
  if (spySpawn.style.display == "block") {
    songSpawn.play();
  }
  if (spySpawn.style.display == "none") {
    songBattle.play();
  }
};

battle.onclick = () => {
  //Spawn
  spySpawn.style.display = "none";
  shop.style.display = "none";
  battle.style.display = "none";
  //battlefield
  document.body.style.background = "url(./res/img/2fort.png)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";

  Enemy.style.display = "block";
  spy.style.display = "block";
  characters.style.display = "flex";
  back.style.display = "block";
  shoot.style.display = "block";
  moneyCounter.style.display = "block";

  //muzika
  songSpawn.pause();
  songBattle.play();
  songBattle.volume = 0.04;
  musicSpawn.style.display = "block";
  muteSpawn.style.display = "none";
  songBattle.currentTime = 0;
};

back.onclick = () => {
  spySpawn.style.display = "block";
  SpyShoot.style.display = "none";
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
  back.style.display = "none";
  shoot.style.display = "none";
  moneyCounter.style.display = "none";

  hpSpy -= hpSpy;
  hpSpy += 125;
  hpCounterSpy.innerHTML = `${hpSpy}/125 HP`;

  hpEnemy -= hpEnemy;
  hpEnemy += 300;
  hpCounterEnemy.innerHTML = `${hpEnemy}/300 HP`;

  //muzika
  songSpawn.play();
  songBattle.pause();
  musicSpawn.style.display = "block";
  muteSpawn.style.display = "none";
  songSpawn.currentTime = 0;
};

// útočení Spy
shoot.onclick = () => {
  hpEnemy -= damageSpy;
  hpCounterEnemy.innerHTML = `${hpEnemy}/300 HP`;
  setTimeout(() => {
    if (hpEnemy <= 0) {
      hpEnemy += 300;
      money += 10;
      moneyCounter.innerHTML = `Money: ${money}`;
      DeathSFX.play();
      DeathSFX.volume = 0.2;
      DeathSFX.currentTime = 0;
    }
  }, 1);

  spy.style.display = "none";
  SpyShoot.style.display = "block";
  RevolverSFX.play();
  RevolverSFX.currentTime = 0;
  RevolverSFX.volume = 0.04;

  setTimeout(() =>{
    spy.style.display = "block";
    SpyShoot.style.display = "none";
  },1000)
};

window.onload = () => {
  setInterval(() => {
    if (spySpawn.style.display == "none") {
      hpSpy -= damageHeavy;
      hpCounterSpy.innerHTML = `${hpSpy}/125 HP`;
      ShotgunSFX.play();
      ShotgunSFX.volume = 0.04;
      ShotgunSFX.currentTime = 0;
    }
  }, 10000);

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
      back.style.display = "none";
      shoot.style.display = "none";
      moneyCounter.style.display = "none";
      songBattle.pause();
      songSpawn.play();

      hpSpy += 125;
      hpCounterSpy.innerHTML = `${hpSpy}/125 HP`;
    }
  }, 1);
};

// útočení nepřítele
