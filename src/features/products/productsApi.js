const API_BASE = "https://69770ebd5b9c0aed1e853949.mockapi.io/list";

export const apiGetProducts = async () => {
  const response = await fetch(API_BASE);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
};

export const apiCreateProduct = async (payload) => {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Failed to create product: ${response.statusText}`);
  }
  return response.json();
};

export const apiUpdateProduct = async (id, payload) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Failed to update product: ${response.statusText}`);
  }
  return response.json();
};

export const apiDeleteProduct = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete product: ${response.statusText}`);
  }
  return response.json();
};

