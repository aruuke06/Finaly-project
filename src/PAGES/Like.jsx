import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./like.css";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/products/productsSlice";
import {
  removeFromWishlist,
  clearWishlist,
  selectWishlistIds,
} from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";

export default function Like() {
  const dispatch = useAppDispatch();
  const { items: allProducts, loading, error } = useAppSelector(
    (state) => state.products
  );
  const wishlistIds = useAppSelector(selectWishlistIds);

  useEffect(() => {
    if (allProducts.length === 0 && !loading) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts.length, loading]);

  const wishlistItems = allProducts.filter((product) =>
    wishlistIds.includes(Number(product.id))
  );

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleClear = () => {
    if (window.confirm("Clear all items from wishlist?")) {
      dispatch(clearWishlist());
    }
  };

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: Number(product.id),
        title: product.title || "Untitled Product",
        image: product.image || "",
        price: product.price || "0",
      })
    );
  };

  return (
    <section className="wl">
      <div className="wl__container">
        <div className="wl__head">
          <h1 className="wl__title">Wishlist</h1>
          {wishlistItems.length > 0 && (
            <button
              type="button"
              className="wl__btn wl__btn--danger"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
        </div>

        {error && (
          <div className="wl__error">Error loading products: {error}</div>
        )}

        {loading && wishlistItems.length === 0 ? (
          <div className="wl__loading">Loading wishlist...</div>
        ) : wishlistItems.length === 0 ? (
          <div className="wl__empty">
            <p>Wishlist is empty</p>
            <Link to="/shop" className="wl__btn wl__btn--primary">
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="wl__grid">
            {wishlistItems.map((product) => (
              <div key={product.id} className="wl__card">
                <div className="wl__imgWrap">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title || "Product"}
                      className="wl__img"
                    />
                  ) : (
                    <div
                      className="wl__img"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#999",
                      }}
                    >
                      No image
                    </div>
                  )}
                </div>

                <div className="wl__body">
                  <h3 className="wl__name">
                    {product.title || "Untitled Product"}
                  </h3>
                  {product.category && (
                    <span className="wl__cat">{product.category}</span>
                  )}
                  {product.price && (
                    <p className="wl__price">{product.price}</p>
                  )}

                  <div className="wl__actions">
                  <button
                    type="button"
                    className="wl__btn wl__btn--primary"
                    onClick={() => handleAddToCart(product)}
                  >
                      <FaShoppingCart style={{ marginRight: "6px" }} />
                      Добавить в корзину
                    </button>
                    <button
                      type="button"
                      className="wl__btn wl__btn--danger"
                      onClick={() => handleRemove(Number(product.id))}
                      aria-label="Remove from wishlist"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
