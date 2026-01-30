import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "cart_items_v2";

const loadCartFromStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item) =>
          item &&
          item.id &&
          item.title &&
          typeof item.qty === "number" &&
          item.qty > 0
      );
    }
    return [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    
  }
};

const initialState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          qty: 1,
        });
      }
      saveCartToStorage(state.items);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      saveCartToStorage(state.items);
    },
    increaseQty(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.qty += 1;
        saveCartToStorage(state.items);
      }
    },
    decreaseQty(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }
        saveCartToStorage(state.items);
      }
    },
    clearCart(state) {
      state.items = [];
      saveCartToStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty, 0);

export const selectCartTotal = (state) => {
  return state.cart.items.reduce((sum, item) => {
    const price = parseFloat(
      String(item.price || "0").replace(/[^0-9.]/g, "")
    );
    const numPrice = isNaN(price) ? 0 : price;
    return sum + numPrice * item.qty;
  }, 0);
};

export default cartSlice.reducer;

