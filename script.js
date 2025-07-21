document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('actionBtn');
  const message = document.getElementById('message');

  button.addEventListener('click', function() {
    message.textContent = 'Button was clicked! Enjoy your interactive experience.';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = '#fff';
  });
});