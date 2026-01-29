import React from "react";
import { Link } from "react-router-dom";
import "./checkout.css";

function CheckoutSuccess() {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-success">
          <div className="checkout-success-icon">✓</div>
          <h1 className="checkout-success-title">Заказ успешно оформлен!</h1>
          <p className="checkout-success-message">
            Спасибо за ваш заказ. Мы обработаем его в ближайшее время.
          </p>
          <div className="checkout-success-actions">
            <Link to="/home" className="checkout-success-btn checkout-success-btn--primary">
              На главную
            </Link>
            <Link to="/shop" className="checkout-success-btn checkout-success-btn--secondary">
              Перейти в магазин
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;

