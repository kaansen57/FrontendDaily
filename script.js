let data = [
  {
    img: "img/1.png",
    title: "Cards",
    url: "/Day1/index.html",
  },
  {
    img: "img/2.png",
    title: "Google Clone",
    url: "/Day2/index.html",
  },
  {
    img: "img/3.png",
    title: "Search-Filter Components",
    url: "/Day3/index.html",
  },
  {
    img: "img/4.png",
    title: "LinkedIn ReDesign",
    url: "/Day4/index.html",
  },
  {
    img: "img/5.png",
    title: "Wallet App",
    url: "/Day5/index.html",
  },
];

const cardSection = document.querySelector(".content");
const mobileMenuButton = document.querySelector(".nav-icon");
const mobileMenuItems = document.querySelector(".nav-desktop");
cardData(data);

mobileMenuButton.addEventListener("click", () => {
  if (mobileMenuItems.classList.value === "nav-desktop show") {
        mobileMenuItems.className = "nav-desktop";
  } else {
     mobileMenuItems.className = "nav-desktop show";
  }
});

function cardData(data) {
  for (let i = 0; i < data.length; i++) {
    cardSection.innerHTML += `<div class="card">
     <div class="card-img">
        <img src="${data[i].img}" alt="${data[i].title}">
        <span class="card-number">${i + 1}</span>
    </div>

    <h5 class="card-title">${data[i].title}</h5>
    <hr>

     <div class="card-footer">
        <a href="${
          data[i].url
        }" target="_blank" class="btn btn-primary">View</a>
      </div>
    </div>`;
  }
  return cardSection;
}
