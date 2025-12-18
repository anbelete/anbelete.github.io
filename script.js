document.querySelector('header').addEventListener('click', function() {
  const colors = ['#0077b6', '#ff6f61', '#4caf50', '#ff9800'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('header').style.backgroundColor = randomColor;
});
