import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/products/productsSlice";

function DashboardPage() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (items.length === 0 && !loading) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length, loading]);

  const totalProducts = items.length;

  const uniqueCategories = new Set(
    items.map((item) => item.category).filter(Boolean)
  ).size;

  const latestProduct = items.length > 0 ? items[items.length - 1] : null;

  const categoryCounts = {};
  items.forEach((item) => {
    if (item.category) {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
    }
  });

  const topCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([category, count]) => ({ category, count }));

  const latestProducts = items.slice(-5).reverse();

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1>Admin Dashboard</h1>
        <div className="dashboard__actions">
          <Link to="/admin/products/new" className="btn btn-primary">
            Create Product
          </Link>
          <Link to="/admin/products" className="btn btn-secondary">
            View Products
          </Link>
        </div>
      </div>

      {error && (
        <div className="dashboard__error">Error loading products: {error}</div>
      )}

      {loading && items.length === 0 ? (
        <div className="dashboard__loading">Loading dashboard...</div>
      ) : (
        <>
      

          <div className="dashboard__section">
            <h2>Latest Products</h2>
            {latestProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <div className="latest-products">
                {latestProducts.map((product) => (
                  <div key={product.id} className="latest-product">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="latest-product__image"
                      />
                    )}
                    <div className="latest-product__info">
                      <div className="latest-product__title">
                        {product.title || "Untitled"}
                      </div>
                      <div className="latest-product__meta">
                        {product.category && (
                          <span className="latest-product__category">
                            {product.category}
                          </span>
                        )}
                        {product.price && (
                          <span className="latest-product__price">
                            {product.price}
                          </span>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/admin/products/${product.id}/edit`}
                      className="btn btn-small"
                    >
                      Edit
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardPage;

