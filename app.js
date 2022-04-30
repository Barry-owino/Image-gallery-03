const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 910, 11, 12];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `/images/barry-${i}.jpg`;
  image.alt = `barry pic for ${i} of the image gallery`;
  image.classList.add('galleryImg');

  image.addEventListener('click', () => {
    //popup stuff
  });

  gallery.appendChild(image);
});