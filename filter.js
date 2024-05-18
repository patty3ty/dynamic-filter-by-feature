const data = [
    {
      id: 1,
      name: "Student&Swim",
      img: "./年輕小白入門款.png",
      price: 74,
      occupation: "學生",
      link: "./年輕小白入門款保障內容.html"
  },

    {
      id: 11,
      name: "Single&Eatout",
      img: "./少動外食族.png",
      price: 74,
      marital: "單身",
      diet:"經常外食",
    },
    {
      id: 2,
      name: "Children&healthy",
      img: "./登山基本型保險.png",
      price: 40,
      activity: "戶外運動",
      health:"良好",
    },
    {
      id: 3,
      name: "HaveHouse",
      img: "./青壯年壽險顧家方案.png",
      price: 200,
      house: "有買房",
    },
    {
      id: 4,
      name: "Motor",
      img: "./騎士基本保障組.png",
      price: 16,
      transportation: "騎機車",
    },
    {
      id: 5,
      name: "Car",
      img: "./路跑基本型保險.png",
      price: 74,
      activity: "戶外運動",
    },
];

//set parameters
const productsContainer = document.querySelector(".products");
//const transportationContainer = document.querySelector(".transportations");
//const activityContainer = document.querySelector(".activities");
//const searchInput = document.querySelector(".search");
//const priceRange = document.querySelector(".priceRange");
//const priceValue = document.querySelector(".priceValue");

//function to display products 
const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
       <div class="product">
          <a href=${product.link} target="_blank">
          <img
          src=${product.img}
          alt=""
          />
          </a>
          <button class="add-to-cart" data-product-id="${product.id}">+</button>
        </div>
    `
    )
    .join("");
};

//search by text
/*searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});*/

//set category
// const setCategories = () => {
//   const alltransportation = data.map((item) => item.cat);
//   const categories = [
//     /*"All",
//     */...alltransportation.filter((item, i) => {
//       return alltransportation.indexOf(item) === i;
//     }),
//   ];

//   transportationContainer.innerHTML = categories
//     .map(
//       (cat) =>
//         `
//       <button class="cat-option" data-value="${cat}">${cat}</button>
//     `
//     )
//     .join("");

//   transportationContainer.addEventListener("click", (e) => {
//     const selectedCat = e.target.textContent;

//     selectedCat === "All"
//       ? displayProducts(data)
//       : displayProducts(data.filter((item) => item.cat === selectedCat));
//   });
// };

//set gender
// const setGenders = () => {
//   const allGenders = data.map((item) => item.gender);
//   const genders = [
//     /*"All",
//     */...allGenders.filter((item, i) => {
//       return allGenders.indexOf(item) === i;
//     }),
//   ];

//   activityContainer.innerHTML = genders
//     .map(
//       (gender) =>
//       //<span class="gender">${gender}</span>
//         `
//       <button class="gender-option" data-value="${gender}">${gender}</button>
//     `
//     )
//     .join("");

//     genderContainer.addEventListener("click", (e) => {
//       const selectedGender = e.target.textContent;

//       selectedGender === "All"
//         ? displayProducts(data)
//         : displayProducts(data.filter((item) => item.gender === selectedGender));
//     });
// };

//Search by filters
function updateFilters() {
  // const selectedCategories = [];
  // document.querySelectorAll(".cat-option.active").forEach((option) => {
  //   selectedCategories.push(option.dataset.value); // Assuming you store the category value in a `data-value` attribute
  // });

  // const selectedGenders = [];
  // document.querySelectorAll(".gender-option.active").forEach((option) => {
  //   selectedGenders.push(option.dataset.value);
  // });

  // const filteredData = data.filter((item) => {
  //   // Filter based on category (if any selected)
  //   const categoryMatch = selectedCategories.length > 0 ? selectedCategories.includes(item.cat) : true;

  //   // Filter based on gender (if any selected)
  //   const genderMatch = selectedGenders.length > 0 ? selectedGenders.includes(item.gender) : true;

  //   // Show items matching any selected category or gender (or both)
  //   return categoryMatch || genderMatch;
  // });

  // Option types array (modify based on your actual class names)
  
  const optionActiveTypes = [
    "occupation",
"marital",
"children",
"house",
"transportation",
"activity",
"diet",
"health" ];

const getSelectedOptions = (type = "") => {
  // Combine selected options from a specific type or all types
  const selector = `.${type}-option.active`;
  const selectedOptions = [...document.querySelectorAll(selector)].map(option => option.dataset.value);
  return selectedOptions;
};

const filteredData = data.filter((item) => {
  // Efficiently retrieve and filter selected options for each type
  const selectedOccupation = getSelectedOptions(optionActiveTypes[0]);
  const occupationMatch = selectedOccupation.includes(item.occupation);

  const selectedMarital = getSelectedOptions(optionActiveTypes[1]);
  const maritalMatch = selectedMarital.includes(item.marital);

  const selectedChildren = getSelectedOptions(optionActiveTypes[2]);
  const childrenMatch = selectedChildren.includes(item.children);

  const selectedHouses = getSelectedOptions(optionActiveTypes[3]);
  const houseMatch = selectedHouses.includes(item.house);

  const selectedTransportation = getSelectedOptions(optionActiveTypes[4]);
  const transportationMatch = selectedTransportation.includes(item.transportation);

  const selectedActivitiy = getSelectedOptions(optionActiveTypes[5]);
  const activitiyMatch = selectedActivitiy.includes(item.activity);

  const selectedDiet = getSelectedOptions(optionActiveTypes[6]);
  const dietMatch = selectedDiet.includes(item.diet);

  const selectedHealth = getSelectedOptions(optionActiveTypes[7]);
  const healthMatch = selectedHealth.includes(item.health);

  // Show items matching any selected option from any type (or both)
  return occupationMatch || maritalMatch || childrenMatch || houseMatch || transportationMatch || activitiyMatch || dietMatch || healthMatch;
});
  
  displayProducts(filteredData);

  // Update addToCartButtons after filtering
  const updatedAddToCartButtons = document.querySelectorAll('.add-to-cart');
  updatedAddToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productId = this.dataset.productId; // Get product ID from button
      itemsInCart.push(productId); // Add product ID to cart array
      cartItems.textContent = itemsInCart.length; // Update item count
      console.log(itemsInCart)
    });
  });
}


  
  // Get references to all button options
  //const occupationOptions = document.querySelectorAll(".occupation-option");

  const optionTypes = [
    ".occupation-option",
    ".marital-option",
    ".children-option",
    ".house-option",
    ".transportation-option",
    ".activity-option",
    ".diet-option",
    ".health-option"
  ];

  const addOptionListeners = () => {
    optionTypes.forEach((selector) => {
      const options = document.querySelectorAll(selector);

      options.forEach((option) => {
        option.addEventListener("click", () => {
          option.classList.toggle("active");
          updateFilters();
        });
      });
    });
  };


//Render 
displayProducts(data);
addOptionListeners(); 

//cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');

let itemsInCart = []; // Array to store product IDs

addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productId = this.dataset.productId; // Get product ID from button
    itemsInCart.push(productId); // Add product ID to cart array
    cartItems.textContent = itemsInCart.length; // Update item count
    console.log(itemsInCart)
  });
});

// Add event listener to cart link
const cartLink = document.querySelector(".cart-link");
cartLink.addEventListener("click", () => {
  // Navigate to cart page (cart.html)
  window.location.href = "cart.html";

  // Store cart items in local storage (optional, for persistence across page reloads)
  localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
});

//set price and search by price
/*const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};*/


