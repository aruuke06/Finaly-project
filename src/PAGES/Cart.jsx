import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "../STYLES/cart.css";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Pistachios",
      price: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRx_29nGBqqif0N5yqR3k0GpJjOVOL-PkC5w&s",
      qty: 1,
    },
    {
      id: 2,
      title: "Walnut",
      price: 8.49,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/W_Nuss_Gr_99.jpg/500px-W_Nuss_Gr_99.jpg",
      qty: 2,
    },
  ]);

  const increase = (id) => {
    setItems(items.map(i =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const decrease = (id) => {
    setItems(items.map(i =>
      i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

        <div className="cart-wrapper">
          {/* LEFT */}
          <div className="cart-items">
            {items.map(item => (
              <div className="cart-card" key={item.id}>
                <img src={item.img} alt={item.title} />

                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p className="price">${item.price.toFixed(2)}</p>

                  <div className="qty-box">
                    <button onClick={() => decrease(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increase(item.id)}>+</button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="cart-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
