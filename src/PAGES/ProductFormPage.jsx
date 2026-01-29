import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createProduct, updateProduct } from "../features/products/productsSlice";

function ProductFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.products);

  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    discount: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      const product = items.find((p) => p.id === id);
      if (product) {
        setFormData({
          title: product.title || "",
          image: product.image || "",
          category: product.category || "",
          price: product.price || "",
          discount: product.discount || "",
          rating: product.rating || "",
        });
      }
    }
  }, [id, isEditMode, items]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSaving(true);

    try {
      if (isEditMode) {
        await dispatch(updateProduct({ id, payload: formData })).unwrap();
      } else {
        await dispatch(createProduct(formData)).unwrap();
      }
      navigate("/admin/products");
    } catch (error) {
      console.error("Failed to save product:", error);
      alert(`Failed to save product: ${error.message || "Unknown error"}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "24px" }}>
        {isEditMode ? "Edit Product" : "Create New Product"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="title"
            style={{ display: "block", marginBottom: "4px", fontWeight: "500" }}
          >
            Title <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: errors.title ? "1px solid red" : "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          {errors.title && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.title}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="image"
            style={{ display: "block", marginBottom: "4px", fontWeight: "500" }}
          >
            Image URL <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: errors.image ? "1px solid red" : "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
          {errors.image && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.image}
            </div>
          )}
          {formData.image && (
            <div style={{ marginTop: "8px" }}>
              <img
                src={formData.image}
                alt="Preview"
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="category"
            style={{ display: "block", marginBottom: "4px", fontWeight: "500" }}
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="price"
            style={{ display: "block", marginBottom: "4px", fontWeight: "500" }}
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            htmlFor="discount"
            style={{ display: "block", marginBottom: "4px", fontWeight: "500" }}
          >
            Discount
          </label>
          <input
            type="text"
            id="discount"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label
            htmlFor="rating"
            style={{ display: "block", marginBottom: "4px", fontWeight: "500" }}
          >
            Rating
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="submit"
            disabled={saving || loading}
            style={{
              padding: "10px 20px",
              backgroundColor: saving || loading ? "#ccc" : "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: saving || loading ? "not-allowed" : "pointer",
              fontSize: "16px",
            }}
          >
            {saving ? "Saving..." : isEditMode ? "Save Changes" : "Create Product"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            disabled={saving}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f5f5f5",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: "4px",
              cursor: saving ? "not-allowed" : "pointer",
              fontSize: "16px",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductFormPage;

