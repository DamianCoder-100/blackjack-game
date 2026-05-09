function createStars() {
  const starsBg = document.getElementById('stars-bg');
  for (let i = 0; i < 350; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    star.style.animationDuration = (Math.random() * 3 + 1) + 's';
    starsBg.appendChild(star);
  }
}
createStars(); // call this once on load