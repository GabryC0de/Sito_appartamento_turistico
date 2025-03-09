
document.addEventListener('DOMContentLoaded', () => {

  async function fetchFilenames() {
    try {
      const response = await fetch('/get-filenames');
      const data = await response.json();
      const soggiorno = document.querySelector('.soggiorno');
      const cucina = document.querySelector('.cucina');
      const camere = document.querySelector('.camere');
      const bagno = document.querySelector('.bagno');
      const esterno = document.querySelector('.esterno');
      console.log(data.files.length);
      for (let i = 0; i < data.files.length; i++) {
        const image = document.createElement('img');
        const imageContainer = document.createElement('div');
        imageContainer.appendChild(image);
        imageContainer.classList.add('image-container');
        image.src = `../Immagini sito/${data.files[i]}`;
        if (data.files[i][0] == "a") {
          soggiorno.querySelector('.immagini').appendChild(imageContainer);
          console.log("cont è malato");
        }
        if (data.files[i][0] == "b") {
          cucina.querySelector('.immagini').appendChild(imageContainer);
        }
        if (data.files[i][0] == "c") {
          camere.querySelector('.immagini').appendChild(imageContainer);
        }
        if (data.files[i][0] == "d") {
          bagno.querySelector('.immagini').appendChild(imageContainer);
        }
        if (data.files[i][0] == "e") {
          esterno.querySelector('.immagini').appendChild(imageContainer);
        }
        if (data.files[i] == "logo.png") {
          continue;
        }
      }
    }
    catch (error) {
      console.error('Error fetching filenames:', error);
    }
  }
  fetchFilenames();
});