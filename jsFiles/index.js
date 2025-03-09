document.addEventListener("DOMContentLoaded", () => {
  const jsonData = async () => {
    const response = await fetch("/get-filenames");
    const data = await response.json();
    return data;
  };

  jsonData().then((data) => {
    let infos = [
      {
        name: "Via Verdi 9",
        description: "Una casa nel verde.",
      },
    ];

    let slide = document.querySelector(".slide");

    for (let i = 0; i < data.files.length; i++) {
      let item = `<div class="item" style="background: url('./Immagini sito/${data.files[i]}');">
                    <div class="content">
                      <div class="name">${infos[0].name}</div>
                        <div class="description">
                          ${infos[0].description}
                        </div>
                          <a href="galleria.html" class="gallery-link">

<button class="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Galleria</span>
  <span class="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

                          </a>
                        </div>
                      </div>
                    </div>
                  </div>`;
      slide.innerHTML += item;
    }

    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");

    next.addEventListener("click", function () {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    });

    prev.addEventListener("click", function () {
      let items = document.querySelectorAll(".item");
      document.querySelector(".slide").prepend(items[items.length - 1]);
    });
  });
});
