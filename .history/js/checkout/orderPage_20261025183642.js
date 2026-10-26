import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { orders } from "./paymentSummary.js";
const today = dayjs();
const todayDate = today.format('dddd MM');


let ordersHTML = ``;
orders.forEach((order) => {

    ordersHTML += `
    <div class="order-container">
        <div class="order-header">
                <div class="order-header-left-section">
                <div class="order-date">
                    <div class="order-header-label">Order Placed:</div>
                    <div>${todayDate}</div>
                </div>
                <div class="order-total">
                    <div class="order-header-label">Total:</div>
                    <div>$35.06</div>
                </div>
                </div>

                <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>${order.id}</div>
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
                </div>

                <div class="product-actions">
                <a href="tracking.html">
                    <button class="track-package-button button-secondary">
                    Track package
                    </button>
                </a>
                </div>
            </div>
    </div>        
        `;
});

document.querySelector(".js-order-container").innerHTML = ordersHTML;
