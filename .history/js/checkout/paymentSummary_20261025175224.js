//---------<MVC Architecture(Model--View---Controller)>-------------------
//Model: it means files which handle the data/infornation part of project
//View: it means the part of code/file which manages how the data wiil be shown and designed
//Controller: it means the part of code/file which makes the interaction possible(like addEventListener,buttons etc)
import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";
import { addOrder } from "../../data/orders.js";

export function renderPaymentSummary() {
  let totalProduct = 0;
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  cart.forEach((cartItem) => {
    totalProduct += cartItem.quantity;
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });
  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCent = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCent;

  const paymentSummaryHtml = `
        <div class="payment-summary-title">Order Summary</div>

        <div class="payment-summary-row">
        <div>Items (${totalProduct}):</div>
        <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatCurrency(taxCent)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary js-place-order">
        Place your order
        </button>`;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHtml;
  let orders = [];
  document
    .querySelector(".js-place-order")
    .addEventListener("click", async () => {
      try {
        const response = await fetch("https://supersimplebackend.dev/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: cart,
          }),
        });
        const order = await response.json();
        orders = addOrder(order);
        console.log(orders);
      } catch (error) {
        console.log("unexpected error, please try again later");
      }

      window.location.href = "orders.html";
    });

//   orders.forEach((order) => {
    document.querySelectorAll(".js-order-container").innerHTML = `
        <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>August 12</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$35.06</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
            </div>
          </div>

          <div class="order-details-grid">
            <div class="product-image-container">
              <img src="../images/products/athletic-cotton-socks-6-pairs.jpg" />
            </div>

            <div class="product-details">
              <div class="product-name">
                Black and Gray Athletic Cotton Socks - 6 Pairs
              </div>
              <div class="product-delivery-date">Arriving on: August 15</div>
              <div class="product-quantity">Quantity: 1</div>
              <button class="buy-again-button button-primary">
                <img
                  class="buy-again-icon"
                  src="../images/icons/buy-again.png"
                />
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>

            <div class="product-image-container">
              <img
                src="../images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
              />
            </div>

            <div class="product-details">
              <div class="product-name">
                Adults Plain Cotton T-Shirt - 2 Pack
              </div>
              <div class="product-delivery-date">Arriving on: August 19</div>
              <div class="product-quantity">Quantity: 2</div>
              <button class="buy-again-button button-primary">
                <img
                  class="buy-again-icon"
                  src="../images/icons/buy-again.png"
                />
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>
        `;
//   });
}
