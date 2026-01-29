import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts, deleteProduct } from "../features/products/productsSlice";

function ProductsPage() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (product) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.title}"? This action cannot be undone.`
    );
    if (confirmed) {
      dispatch(deleteProduct(product.id));
    }
  };

  const filteredProducts = items.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.title?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2>Admin Products</h2>
        <Link
          to="/admin/products/new"
          style={{
            padding: "8px 16px",
            backgroundColor: "#1976d2",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Create New Product
        </Link>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Search by title or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      </div>

      {error && (
        <div style={{ color: "red", marginBottom: "16px" }}>Error: {error}</div>
      )}

      {loading && <div style={{ marginBottom: "16px" }}>Loading products...</div>}

      {!loading && !error && (
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th className="hide-mobile">Category</th>
                <th>Price</th>
                <th className="hide-mobile">Discount</th>
                <th className="hide-mobile">Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    style={{
                      padding: "24px",
                      textAlign: "center",
                      color: "#666",
                    }}
                  >
                    {searchQuery ? "No products match your search." : "No products found."}
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                        />
                      ) : (
                        <span style={{ color: "#999" }}>No image</span>
                      )}
                    </td>
                    <td>{product.title || "-"}</td>
                    <td className="hide-mobile">{product.category || "-"}</td>
                    <td>{product.price || "-"}</td>
                    <td className="hide-mobile">{product.discount || "-"}</td>
                    <td className="hide-mobile">{product.rating || "-"}</td>
                    <td>
                      <div className="actions">
                        <Link
                          to={`/admin/products/${product.id}/edit`}
                          style={{
                            padding: "4px 12px",
                            backgroundColor: "#1976d2",
                            color: "white",
                            textDecoration: "none",
                            borderRadius: "4px",
                            fontSize: "14px",
                          }}
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(product)}
                          disabled={loading}
                          style={{
                            padding: "4px 12px",
                            backgroundColor: "#d32f2f",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: loading ? "not-allowed" : "pointer",
                            fontSize: "14px",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;

