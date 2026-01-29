import React, { useEffect } from "react";
import "./Homemain.css";

import { GoArrowRight } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import dow from "../../SVG/dow.svg";
import do1 from "../../SVG/do1.svg";
import bro4 from "../../SVG/bro4.svg";

import {
  toggleWishlist,
  selectWishlistIds,
} from "../../features/wishlist/wishlistSlice";

import {
  addOneOptimistic,
  setCartPending,
  selectQty,
  selectInCart,
  selectCartPendingById,
} from "../../store/cartSlice";

import { fetchProducts } from "../../features/products/productsSlice";

function Homemain() {
  const dispatch = useAppDispatch();
  const { items: allProducts, loading, error } = useAppSelector(
    (state) => state.products
  );
  const cartPendingById = useAppSelector(selectCartPendingById);

  useEffect(() => {
    if (allProducts.length === 0 && !loading) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts.length, loading]);

  const products = allProducts.slice(0, 4);

  const wishlistIds = useAppSelector(selectWishlistIds);
  const cartState = useAppSelector((state) => state.cart);

  return (
    <>
      <section
        className="testimonial"
        style={{ backgroundImage: `url(${dow})` }}
      >
        <div className="container">
          <div className="testimonial-box">
            <span className="label">Testimonial</span>
            <h2>What Our Customer Saying?</h2>

            <img src={do1} alt="user" className="avatar" />

            <div className="stars">
              <IoStarSharp /><IoStarSharp /><IoStarSharp />
              <IoStarSharp /><IoStarSharp />
            </div>

            <p>
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard.
            </p>

            <h5>Sara Taylor</h5>
            <small>Consumer</small>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>100%</h3>
              <p>Organic</p>
            </div>
            <div className="stat">
              <h3>285</h3>
              <p>Active Product</p>
            </div>
            <div className="stat">
              <h3>350+</h3>
              <p>Organic Orchads</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Years of Farming</p>
            </div>
          </div>
        </div>
      </section>

      <section className="offer">
        <div className="container">
          <div className="offer-head">
            <div>
              <span className="label">Offer</span>
              <h2>We Offer Organic For You</h2>
            </div>
            <button>
              View All Product <GoArrowRight />
            </button>
          </div>

          {error && (
            <div style={{ color: "red", marginBottom: "16px", textAlign: "center" }}>
              Error loading products: {error}
            </div>
          )}

          {loading && products.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
              Loading products...
            </div>
          ) : (
            <div className="products">
              {products.map((product) => {
                const id = Number(product.id);
                const inWishlist = wishlistIds.includes(id);

                const inCart = !!cartState.itemsById[id];
                const qty = cartState.itemsById[id]?.qty ?? 0;
                const cartPending = !!cartPendingById[id];

                const handleWishlistClick = () => {
                  dispatch(toggleWishlist(id));
                };

                const handleAddToCartClick = () => {
                  dispatch(setCartPending({ id, pending: "add" }));
                  dispatch(addOneOptimistic(id));
                  dispatch(setCartPending({ id, pending: null }));
                };

                return (
                  <div className="product-card" key={id}>
                    {product.category && (
                      <span className="tag">{product.category}</span>
                    )}

                    <button
                      type="button"
                      className={`product-wishlist-btn ${inWishlist ? "active" : ""}`}
                      onClick={handleWishlistClick}
                    >
                      {inWishlist ? (
                        <FaHeart className="product-wishlist-icon" />
                      ) : (
                        <FaRegHeart className="product-wishlist-icon" />
                      )}
                    </button>

                    {product.image ? (
                      <img src={product.image} alt={product.title || "product"} />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "220px",
                          background: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#999",
                        }}
                      >
                        No image
                      </div>
                    )}
                    <h6>{product.title || "Organic Product"}</h6>
                    <p>
                      {product.discount && (
                        <span style={{ textDecoration: "line-through", color: "#b8b8b8", marginRight: "10px" }}>
                          {product.discount}
                        </span>
                      )}
                      {product.price || "$0.00"}
                    </p>
                    {product.rating && (
                      <div className="rating">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <CiStar key={i} />
                        ))}
                      </div>
                    )}

                    <button
                      type="button"
                      className="product-cart-btn"
                      onClick={handleAddToCartClick}
                      disabled={cartPending}
                    >
                      <FaShoppingCart className="product-cart-icon" />
                      {inCart ? "В корзине ✓" : "Добавить в корзину"}
                      {inCart && qty > 1 && (
                        <span className="product-cart-qty">
                          x{qty}
                        </span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="eco">
        <div className="container eco-wrap">
          <img src={bro4} alt="eco" />
          <div className="eco-text">
            <span className="label">Eco Friendly</span>
            <h2>Econis is a Friendly Organic Store</h2>

            <h6>Start with Our Company First</h6>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <h6>Learn How to Grow Yourself</h6>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <h6>Farming Strategies of Today</h6>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homemain;
