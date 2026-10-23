import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
//import { loadProducts, loadProductsFetch } from "../data/products.js";


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
// Promise.all([
//     //<--------- FETCH METHOD ---------->
//     loadProductsFetch(),

//     // Simple promise
//     // new Promise((resolve) => {
//     //     loadProducts(() => {
//     //         resolve('value 1');
//     //     })

//     // }),
//     // new Promise((resolve) => {
//     //     loadCart(() => {
//     //         resolve('value 2');
//     //     })
//     // })

// ]).then((values) => {
//         console.log(values);
//         renderOrderSummary();
//         renderPaymentSummary();
//         renderCheckoutHeader();
//     });

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



//<------------------ ASYNC AWAIT ----------------->
//.>async await is a better way of handling asynchronous operations than promises
//async function always returns a promise
//await can only be used inside an async function
//await makes the function wait for the promise to resolve or reject before moving on to the next line of code
//async await is syntactic sugar over promises


async function loadPage() {
    await loadProductsFetch();
    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value 2');
        })
    });

    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
}

loadPage();

renderOrderSummary();
renderPaymentSummary();
renderCheckoutHeader();

