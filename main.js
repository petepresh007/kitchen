//setting the nav-button
const nav_Button = document.querySelector(".nav-btn");
const link_container = document.querySelector(".link-container");

nav_Button.addEventListener("click", nav_button_func);
function nav_button_func() {
  if (link_container.classList.contains("link-container-height")) {
    link_container.classList.remove("link-container-height");

  } else {
    link_container.classList.add("link-container-height");
  }

}

//Gallery start
const gallery_images = document.querySelector(".gallery-images");

const images = [
  "./img/fd1.jpg",
  "./img/fd2.jpg",
  "./img/fd3.jpg",
  "./img/fd4.jpg",
  "./img/fd5.jpg",
  "./img/fd6.jpg",
  "./img/fd7.jpg",
  "./img/g-1.jpg",
  "./img/g-2.jpg",
]
images.map((singleImg) => {
  const img = document.createElement("img");
  img.classList.add("singleImage");
  img.src = singleImg;
  gallery_images.appendChild(img)
});
//gallery end

//nav disapear
const links = document.querySelectorAll(".link li");
for (x = 0; x < links.length; x++) {
  links[x].addEventListener("click", (e) => {
    // e.currentTarget.style.color = "yellow";
    link_container.classList.remove("link-container-height");
  })
}
//nav disapear end

//home image
let homeLoad = 0;
const homeImage = document.querySelector(".image");
window.addEventListener("DOMContentLoaded", function () {
  setInterval(homeimageload, 4000);
});
function homeimageload() {
  const homeItem = images[homeLoad];
  homeImage.src = homeItem;
  if (homeLoad === images.length - 1) {
    homeLoad = 0;
  }
  homeLoad++
}
//end home image


//specialty section
//specialty array
const specialtyArray = [
  {
    id: 1,
    mainImage: "./img/s-img-1.jpg",
    pngImg: "./img/s-1.png",
    name: "Taste the greatness",
    desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quisquam labore laboriosam alias, tempore ad praesentium. 
        Error qui fugit labore quod!
        `
  },
  {
    id: 2,
    mainImage: "./img/s-img-2.jpg",
    pngImg: "./img/s-2.png",
    name: "Pizza",
    desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quisquam labore laboriosam alias, tempore ad praesentium. 
        Error qui fugit labore quod!
        `
  },
  {
    id: 3,
    mainImage: "./img/s-img-3.jpg",
    pngImg: "./img/s-3.png",
    name: "Cakes",
    desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quisquam labore laboriosam alias, tempore ad praesentium. 
        Error qui fugit labore quod!
        `
  },
  {
    id: 4,
    mainImage: "./img/s-img-4.jpg",
    pngImg: "./img/s-4.png",
    name: "Drinks",
    desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quisquam labore laboriosam alias, tempore ad praesentium. 
        Error qui fugit labore quod!
        `
  },
  {
    id: 5,
    mainImage: "./img/s-img-5.jpg",
    pngImg: "./img/s-5.png",
    name: "Sweets",
    desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quisquam labore laboriosam alias, tempore ad praesentium. 
        Error qui fugit labore quod!
        `
  },
  {
    id: 6,
    mainImage: "./img/s-img-6.jpg",
    pngImg: "./img/s-6.png",
    name: "Breakfast",
    desc: `
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Quisquam labore laboriosam alias, tempore ad praesentium. 
        Error qui fugit labore quod!
        `
  },
];
let load = 1;
const mainFoodImage = document.querySelector(".IMAGE");
const pngFoodImage = document.querySelector(".cont");
const foodName = document.querySelector(".name")
const foodDesc = document.querySelector(".desc")
const windowWidth = 749;
//DOMContentLoaded
if (window.innerWidth <= windowWidth) {
  window.addEventListener("DOMContentLoaded", specialtyFunction);
  function specialtyFunction() {
    setInterval(loadFunction, 5000);
  }

  function loadFunction() {
    const item = specialtyArray[load];
    mainFoodImage.src = item.mainImage;
    pngFoodImage.src = item.pngImg;
    foodName.innerText = item.name;
    foodDesc.innerText = item.desc;

    if (load === specialtyArray.length - 1) {
      return load = 0;
    }
    load++;
  }

}
//mainFoodImage.src= specialtyArray[0].mainImage

//Specialty end

const footerDate = document.querySelector(".date")
const date = new Date().getFullYear();
footerDate.innerHTML = date + "."


//close button
const clBtn = document.querySelector(".cl-btn");
clBtn.addEventListener("click", function () {
  if (link_container.classList.contains("link-container-height")) {
    link_container.classList.remove("link-container-height");

  } else {
    link_container.classList.add("link-container-height");
  }
})

//setting the nice scroll
// window.addEventListener("scroll", function(){
//     const scrollHeight = window.pageYOffset;
//     const navHeight = this.document.querySelector("header").getBoundingClientRect().height;


// })

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    //prevent default behavior
    e.preventDefault();
    //navigate to specifics
    const id = e.currentTarget.getAttribute("href").slice(1);
    //gettng the elements by id
    const element = document.getElementById(id);
    //position of element 

    const navHeight = document.querySelector("header").getBoundingClientRect().height;
    const containerHeight = document.querySelector(".link-container").getBoundingClientRect().height;



    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    })


  })
})