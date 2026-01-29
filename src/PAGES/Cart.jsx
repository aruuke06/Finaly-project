import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  selectCartItems,
  selectCartTotal,
} from "../features/cart/cartSlice";
import "../STYLES/cart.css";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  const isEmpty = items.length === 0;

  const handleIncrease = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const parsePrice = (price) => {
    const num = parseFloat(String(price || "0").replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

        <div className="cart-wrapper">
          <div className="cart-items">
            {isEmpty ? (
              <div className="cart-empty">
                <p>Корзина пустая</p>
              </div>
            ) : (
              items.map((item) => (
                <div className="cart-card" key={item.id}>
                  {item.image && (
                    <img src={item.image} alt={item.title} />
                  )}

                  <div className="cart-info">
                    <h4>{item.title}</h4>
                    <p className="price">
                      ${parsePrice(item.price).toFixed(2)}
                    </p>

                    <div className="qty-box">
                      <button onClick={() => handleDecrease(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleIncrease(item.id)}>+</button>
                    </div>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>

          {!isEmpty && (
            <div className="cart-summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
                disabled={isEmpty}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
