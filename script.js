let data = [
  {
    img: "img/1.png",
    title: "Cards",
    url: "/Day1/index.html",
  },
  {
    img: "img/1.png",
    title: "Cards",
    url: "/Day1/index.html",
  },
  {
    img: "img/1.png",
    title: "Cards",
    url: "/Day1/index.html",
  },
  {
    img: "img/1.png",
    title: "Cards",
    url: "/Day1/index.html",
  },
  {
    img: "img/1.png",
    title: "Cards",
    url: "/Day1/index.html",
  },
  {
    img: "img/1.png",
    title: "Cards",
    url: "/Day1/index.html",
  },
];

const cardSection = document.querySelector(".content");

for (let i = 0; i < data.length; i++) {
    cardSection.innerHTML += 
  `<div class="card">
     <div class="card-img">
        <img src="${data[i].img}" alt="${data[i].title}">
        <span class="card-number">${i + 1}</span>
    </div>

    <h5 class="card-title">${data[i].title}</h5>
    <hr>

    <div class="card-footer">
        <a href="${data[i].url}" target="_blank" class="btn btn-primary">View</a>
    </div>
  </div>`;
}
