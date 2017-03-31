var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', function() {	
	var newSrc = this.getAttribute('src');
	displayedImage.setAttribute('src', newSrc);
});
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {	
	(btn.textContent === 'Darken') ? buttonChange('Lighten','rgba(0,0,0,0.5)') : buttonChange('Darken','rgba(0,0,0,0)');
});

function buttonChange(text, color) {
	overlay.style.backgroundColor = color;
	btn.textContent = text;
}
