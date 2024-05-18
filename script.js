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

// In the cart.html script:
window.onload = () => {
    const cartItemsContainer = document.querySelector(".products");

    // Retrieve cart items from local storage (if available)
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems) {
        itemsInCart = storedItems; // Update global array
    }

    // Display cart items based on itemsInCart array
    if (itemsInCart.length === 0) {
        cartItemsContainer.innerHTML = "<p>無購物商品</p>";
    } else {
        let cartItemsHTML = "";
        for (const productId of itemsInCart) {
          // Find product data in "data" array based on productId
          const product = data.find(item => item.id === parseInt(productId));
          if (product) {
            cartItemsHTML += `
            <div class="product">
            <a href=${product.link} target="_blank">
            <img
            src=${product.img}
            alt=""
            />
            </a>
          </div>
            `;
          } else {
            console.warn(`Product with ID ${productId} not found in data.`);
          }
        }
    
        // Replace the entire content of cartItemsContainer with cartItemsHTML
        cartItemsContainer.innerHTML = cartItemsHTML;
      }
    };
