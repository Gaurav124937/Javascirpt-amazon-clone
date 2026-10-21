import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//simple backend integration

loadProducts(() => {
    loadCart(()=>{
        renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
    })
});

//import '../data/backend-practice.js';
//import '../data/cart-class.js';


//backend integration using PROMISES
new Promise((resolve)=>{
    console.log('start promise');
    loadProducts(()=>{
        console.log('finish loading');
        resolve();
    })
}).then(()=>{
    console.log('next step');
})


// renderOrderSummary();
// renderPaymentSummary();
// renderCheckoutHeader();