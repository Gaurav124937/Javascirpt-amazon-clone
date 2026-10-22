import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProductsFetch } from "../data/products.js";
// import { loadCart } from "../data/cart.js";

//<------------ SIMPLE BACKEND INTEGRATION -------------->

// loadProducts(() => {
//     loadCart(()=>{
//         renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
//     })
// });

//import '../data/backend-practice.js';
//import '../data/cart-class.js';


//<---------- BACKEND INTEGRATION USING PROMISES ------------->

//<------- PROMISE ALL -------->
Promise.all([
    //fetch method
    loadProductsFetch(),
    
    // Simple promise
    // new Promise((resolve) => {
    //     loadProducts(() => {
    //         resolve('value 1');
    //     })

    // }),
    // new Promise((resolve) => {
    //     loadCart(() => {
    //         resolve('value 2');
    //     })
    // })

]).then((values) => {
        console.log(values);
        renderOrderSummary();
        renderPaymentSummary();
        renderCheckoutHeader();
    });

//<-----SIMPLE PROMISE ----->
// new Promise((resolve) => {
//     console.log('start promise');
//     loadProducts(() => {
//         console.log('finish loading');
//         resolve();
//     })

// }).then(() => {
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         })
//     })

// }).then(() => {

//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
// });


// renderOrderSummary();
// renderPaymentSummary();
// renderCheckoutHeader();