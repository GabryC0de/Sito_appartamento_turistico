document.addEventListener('DOMContentLoaded', () => {

  let files = [];

  const jsonData = async () => {
    const response = await fetch('http://localhost:3000/get-filenames');
    const data = await response.json();
    return data;
  };

  jsonData().then((data) => {

    let infos = [{
      "name": "Camera",
      "description": "Una accogliente camera da letto che si affaccia sulla campagna.",
    }];

    let slide = document.querySelector(".slide");

    for (let i = 0; i < data.files.length; i++) {
      let item = `<div class="item" style="background: url('./Immagini sito/${data.files[i]}');">
                    <div class="content">
                      <div class="name">${infos[0].name}</div>
                        <div class="description">
                          ${infos[0].description}
                        </div>
                        <button>
                          See More
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>`;
      slide.innerHTML += item;
    }

    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    next.addEventListener('click', function () {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    })

    prev.addEventListener('click', function () {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    });












  });
});
