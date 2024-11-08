const dmgBtns = document.querySelectorAll('.dmg');
const progress = document.querySelector('.progress');
const heal = document.querySelector('.heal');
const revive = document.querySelector('.revive');

//Attach number value to health bar.
let health = 100;

//Event for the buttons to take off a valued percentage from the life bar.
dmgBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    health -= Number(btn.value);
    health < 0 && (health = 0);
    progress.style.width = health + '%';
  });
});

//Restore the health bar to 100% only if it above 0.
heal.addEventListener('click', () => {
  if (health <= 0) {
    health = 0;
  } else {
    progress.style.width = '100%';
    health = 100;
  }
});

revive.addEventListener('click', () => {
  if (health === 0) {
    progress.style.width = '100%';
    health = 100;
  }
});
