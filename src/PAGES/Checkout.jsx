import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/products/productsSlice";
import {
  clearCart,
  selectCartItems,
  selectCartTotal,
} from "../features/cart/cartSlice";
import "./checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items: allProducts, loading } = useAppSelector(
    (state) => state.products
  );
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  useEffect(() => {
    if (allProducts.length === 0 && !loading) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts.length, loading]);

  const parsePrice = (price) => {
    const num = parseFloat(String(price || "0").replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const isEmpty = cartItems.length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty) return;

  
    let message = "Новый заказ\n\n";
    message += `ФИО: ${formData.name}\n`;
    message += `Телефон: ${formData.phone}\n`;
    message += `Адрес: ${formData.address}\n`;
    if (formData.note.trim()) {
      message += `Комментарий: ${formData.note}\n`;
    }
    message += "\nТовары:\n";
    cartItems.forEach((item) => {
      const price = parsePrice(item.price);
      message += `- ${item.title} x ${item.qty}, $${price.toFixed(2)}\n`;
    });
    message += `\nИтого: $${total.toFixed(2)}`;

    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/996550219237?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    
    dispatch(clearCart());
    navigate("/checkout/success");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1 className="checkout-title">Оформление заказа</h1>

        <div className="checkout-wrapper">
          <div className="checkout-form-section">
            <h2 className="checkout-section-title">Информация о доставке</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="checkout-field">
                <label htmlFor="name">ФИО</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ФИО"
                  required
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="phone">Номер телефона</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Введите номер телефона"
                  required
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="address">Адрес</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Введите адрес"
                  rows={4}
                  required
                />
              </div>

              <div className="checkout-field">
                <label htmlFor="note">Комментарий к заказу (необязательно)</label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Напишите комментарий"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="checkout-submit-btn"
                disabled={isEmpty}
              >
                {isEmpty ? "Корзина пуста" : "Оформить заказ"}
              </button>
            </form>
          </div>

          <div className="checkout-summary-section">
            <h2 className="checkout-section-title">Сводка заказа</h2>
            <div className="checkout-summary-card">
              {isEmpty ? (
                <div className="checkout-empty-msg">
                  <p>Ваша корзина пуста</p>
                  <Link to="/cart" className="checkout-back-btn">
                    Вернуться в корзину
                  </Link>
                  <Link to="/shop" className="checkout-shop-btn">
                    Перейти в магазин
                  </Link>
                </div>
              ) : (
                <>
                  <div className="checkout-items">
                    {cartItems.map((item) => (
                      <div key={item.id} className="checkout-item">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="checkout-item-img"
                          />
                        )}
                        <div className="checkout-item-info">
                          <h4 className="checkout-item-title">{item.title}</h4>
                          <p className="checkout-item-price">
                            ${parsePrice(item.price).toFixed(2)} x {item.qty}
                          </p>
                        </div>
                        <p className="checkout-item-total">
                          ${(parsePrice(item.price) * item.qty).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="checkout-totals">
                    <div className="checkout-total-row checkout-total-row--final">
                      <span>Итого</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

