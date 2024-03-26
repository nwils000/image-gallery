const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

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

for (let i = 0; i < images.length; i++) {
  let img = document.createElement('img');
  img.setAttribute('src', `images/${images[i]}`);
  altIdentifier = `pic${i + 1}`;
  img.setAttribute('alt', altText[altIdentifier]);
  thumbBar.appendChild(img);
}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

// Loop through the array of filenames, and for each one, insert an <img>
// element inside the thumb-bar <div> that embeds that image in the page along with its alternative text.

// Add a click event listener to each <img> inside the thumb-bar <div> so that,
// when they are clicked, the corresponding image and alternative text are displayed in the displayed-img <img> element.

// Add a click event listener to the <button> so that when it is clicked, a
// darken effect is applied to the full-size image. When it is clicked again, the darken effect is removed again.
