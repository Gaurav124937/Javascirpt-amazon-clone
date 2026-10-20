import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

//backend integration
import { loadProducts } from "../data/products.js";

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

// renderOrderSummary();
// renderPaymentSummary();
// renderCheckoutHeader();