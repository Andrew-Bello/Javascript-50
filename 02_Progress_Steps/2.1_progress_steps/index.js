'use strict';

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const rects = document.querySelectorAll('.rect');

let currentActive = 1;

function update() {
  rects.forEach((rect, idx) => {
    if (idx < currentActive) {
      rect.classList.add('done');
    } else {
      rect.classList.remove('done');
    }

    rect.classList.toggle('active', idx === currentActive - 1);

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === rects.length + 1;
  });
}

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > rects.length) currentActive = rects.length + 1;
  update();
});
