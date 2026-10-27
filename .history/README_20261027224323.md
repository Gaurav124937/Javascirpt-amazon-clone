# 🛒 Amazon Clone — JavaScript E-Commerce Project

A functional **Amazon-inspired e-commerce web application** built using **HTML, CSS, and JavaScript**.  
The project recreates the core shopping flow of Amazon, including product browsing, cart management, checkout, delivery options, order placement, and an orders page.

> This project was built for learning and practicing modern JavaScript concepts such as **ES Modules, OOP, async/await, Fetch API, Local Storage, MVC-style code organization, and testing**.

---

## 🌐 Live Demo

### 👉 [Click here to open the Amazon Clone](https://gaurav124937.github.io/Javascirpt-amazon-clone/html/amazon.html)

//////////// VISIT THE SITE BESIDE SECURITY WARNING ON WEB BROWSER, IT IS SAFE TO USE. BUT STILL BE CAREFUL DONT ADD ANY PERSONAL INFORMATION ////////////

---

## ✨ Features

- 🛍️ Product listing with images, ratings, prices, and quantity selection
- 🛒 Add products to cart
- 🔢 Real-time cart quantity update
- 💾 Cart data stored using **Local Storage**
- 🧾 Checkout page with complete order summary
- 🗑️ Remove products from checkout cart
- 🚚 Multiple delivery options with calculated delivery dates
- 💵 Automatic calculation of:
  - Product total
  - Shipping cost
  - Total before tax
  - Estimated tax
  - Final order total
- 📦 Place order using an external orders API
- 🧾 Orders stored locally and displayed on the **Orders** page
- 📍 Order tracking UI page
- 📱 Responsive Amazon-style interface
- ✅ Added-to-cart confirmation message
- 🧪 Jasmine test files for cart, checkout, and money utility logic

---

## 🧠 JavaScript Concepts Used

This project helped me practice:

- DOM Manipulation
- Event Listeners
- ES6 Modules (`import` / `export`)
- `async / await`
- Promises
- Fetch API
- Local Storage
- Object-Oriented Programming
- Classes and inheritance
- Polymorphism
- Private class fields
- MVC-style project organization
- Array methods
- Template literals
- Error handling with `try...catch`
- External libraries using ES modules
- Unit testing with Jasmine

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Application logic and interactivity |
| Local Storage | Cart and order persistence |
| Fetch API | Loading products and placing orders |
| Day.js | Delivery date calculations |
| Jasmine | JavaScript testing |

---

## 📂 Project Structure

```text
Javascirpt-amazon-clone/
│
├── backend/
│   └── products.json
│
├── data/
│   ├── cart.js
│   ├── cart-class.js
│   ├── cart-oops.js
│   ├── deliveryOptions.js
│   ├── orders.js
│   └── products.js
│
├── html/
│   ├── amazon.html
│   ├── checkout.html
│   ├── orders.html
│   └── tracking.html
│
├── images/
│   ├── icons/
│   ├── products/
│   └── ratings/
│
├── js/
│   ├── amazon.js
│   ├── checkout.js
│   ├── checkout/
│   │   ├── checkoutHeader.js
│   │   ├── orderPage.js
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   └── utils/
│       └── money.js
│
├── styles/
│   ├── pages/
│   └── shared/
│
└── tests/
    ├── checkout/
    ├── data/
    └── utils/
```

---

## 🔄 Application Flow

```text
Products Page
     ↓
Add to Cart
     ↓
Checkout Page
     ↓
Choose Delivery Option
     ↓
Review Payment Summary
     ↓
Place Order
     ↓
Orders Page
     ↓
Tracking Page
```

---

## 🚀 How to Run Locally

Because the project uses **JavaScript ES modules**, it is best to run it using a local development server instead of directly opening the HTML file.

### Using VS Code Live Server

1. Clone the repository:

```bash
git clone https://github.com/Gaurav124937/javascript-amazon-clone.git
```

2. Open the project folder in VS Code.

3. Install the **Live Server** extension if needed.

4. Open:

```text
html/amazon.html
```

5. Click **Open with Live Server**.

---

## 🌐 APIs Used

The project uses the **SuperSimpleDev backend API** for loading product data and creating orders.

```text
Products API:
https://supersimplebackend.dev/products

Orders API:
https://supersimplebackend.dev/orders
```

---

## 🧪 Testing

The project contains Jasmine tests for important JavaScript functionality, including:

- Cart operations
- Order summary behavior
- Currency formatting utility

Test files are available inside the `tests/` directory.

---

## 🎯 What I Learned

Building this project helped me understand how different parts of a real e-commerce application work together. Instead of keeping all JavaScript in one file, I practiced separating **data, UI rendering, utilities, and user interactions into modules**.

I also gained practical experience with asynchronous API calls, browser storage, reusable functions, OOP concepts, checkout calculations, and basic JavaScript testing.

---

## 🔮 Future Improvements

- Add working product search
- Add authentication/login system
- Make the tracking page fully dynamic
- Add product filtering and categories
- Add a real backend and database
- Add user-specific order history
- Improve mobile responsiveness further
- Add loading and error states for API requests

---

## ⚠️ Disclaimer

This project is created **for educational purposes only**.  
It is not affiliated with, endorsed by, or connected to Amazon.

---

## 👨‍💻 Author

**Gaurav Singh**  
B.Tech Computer Science & Engineering

If you liked this project, consider giving the repository a ⭐.
