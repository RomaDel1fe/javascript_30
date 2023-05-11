const secondHand = document.querySelector('.second__hand');
const minHand = document.querySelector('.min__hand');
const hourHand = document.querySelector('.hour__hand');
const clock = document.querySelector('.clock');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

clock.onmouseover = clock.onmouseout = function(event) {
  if (event.type == 'mouseover') {
    // If a timeout is already set, clear it
    if (secondHand.timeout) clearTimeout(secondHand.timeout);
    secondHand.classList.add('show');
  }
  if (event.type == 'mouseout') {
    // Set a timeout to remove the class
    secondHand.timeout = setTimeout(function() {
      secondHand.classList.remove('show');
    }, 5000); // Затримка в 500 мс (пів секунди)
  }
};