const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const fullImage = document.querySelector('.full-img');
const darkenButton = document.querySelector('.dark');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const altText = {
  pic1: 'Human eyeball.',
  pic2: 'Rock formation.',
  pic3: 'Purple flowers',
  pic4: 'Egyptian hyrogliphs',
  pic5: 'Butterfly on leaf',
};

/* Looping through images */
for (let i = 0; i < images.length; i++) {
  let img = document.createElement('img');

  img.setAttribute('src', `images/${images[i]}`);

  altIdentifier = `pic${i + 1}`;
  img.setAttribute('alt', altText[altIdentifier]);

  img.addEventListener('click', () => {
    let imgSource = img.getAttribute('src');
    let imgAlt = img.getAttribute('alt');
    displayedImage.setAttribute('src', imgSource);
    displayedImage.setAttribute('alt', imgAlt);
  });

  thumbBar.appendChild(img);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  overlay.className === 'overlay'
    ? (overlay.className = 'overlay-darkened')
    : (overlay.className = 'overlay');
});

darkenButton.addEventListener('click', () => {
  darkenButton.innerHTML === 'Darken'
    ? (darkenButton.innerHTML = 'Lighten')
    : (darkenButton.innerHTML = 'Darken');
});

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
