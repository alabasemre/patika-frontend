const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let categories = ["All"];
let btnContainer = document.querySelector(".btn-container");
let sectionCenter = document.querySelector(".section-center");
let currentCategory = "All";

getCategories();
createButtons(categories);
createMenuItem(menu);

function getCategories() {
  menu.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  })
}

// Menu buttons start
function createButtons(categories) {
  let filtered = []
  let cache = {};
  let category;

  categories.forEach(item => {
    let btn = document.createElement("button");
    btn.textContent = item;
    btn.className = "btn btn-item btn-outline-dark";
    btn.name = item;

    btn.addEventListener("click", (e) => {
      category = e.target.name;
      if (category == currentCategory) {
        return;
      }
      currentCategory = category;
      if (category === "All") {
        sectionCenter.innerHTML = "";
        createMenuItem(menu);
      } else {
        if (category in cache) { // I did not filtered menu if cached before.
          sectionCenter.innerHTML = "";
          createMenuItem(cache[category]);
          console.log("Came from cache");
        } else { // 
          filtered = menu.filter(item => item.category == category);
          sectionCenter.innerHTML = "";
          createMenuItem(filtered);
          cache[category] = filtered;
          console.log(cache);
        }
      }
    })
    btnContainer.appendChild(btn);
  })
}
// Menu buttons end

// Menu items start
function createMenuItem(menu) {
  dom = menu.forEach(item => {
    let divMenuItem = document.createElement("div");
    let img = document.createElement("img");
    let divInfo = document.createElement("div");
    let divTitle = document.createElement("div");
    let divText = document.createElement("div");
    let h4title = document.createElement("h4");
    let h4price = document.createElement("h4");

    divMenuItem.className = "menu-items col-lg-6 col-sm-12";
    img.className = "photo";
    divInfo.className = "menu-info";
    divTitle.className = "menu-title";
    divText.className = "menu-text";
    h4price.className = "price";

    img.src = item.img;
    h4title.innerHTML = item.title;
    h4price.innerHTML = item.price;
    divText.innerHTML = item.desc;

    divTitle.appendChild(h4title); // divMenuItem > img + (divInfo > divText + (divTitle > h4 + h4))
    divTitle.appendChild(h4price);

    divInfo.appendChild(divTitle);
    divInfo.appendChild(divText);

    divMenuItem.appendChild(img);
    divMenuItem.appendChild(divInfo);
    sectionCenter.appendChild(divMenuItem);
  })
}
// Menu items end