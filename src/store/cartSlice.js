import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "cart_items";

const loadCartFromStorage = () => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};

    const itemsById = {};
    Object.entries(parsed).forEach(([key, value]) => {
      const id = Number(key);
      const qty = value && typeof value.qty === "number" ? value.qty : 0;
      if (!Number.isNaN(id) && qty > 0) {
        itemsById[id] = { qty };
      }
    });
    return itemsById;
  } catch {
    return {};
  }
};

const saveCartToStorage = (itemsById) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsById));
  } catch {
    
  }
};

const initialState = {
  itemsById: loadCartFromStorage(),
  pendingById: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOneOptimistic(state, action) {
      const id = action.payload;
      const current = state.itemsById[id]?.qty ?? 0;
      state.itemsById[id] = { qty: current + 1 };
      saveCartToStorage(state.itemsById);
    },
    removeOptimistic(state, action) {
      const id = action.payload;
      if (state.itemsById[id]) {
        delete state.itemsById[id];
        saveCartToStorage(state.itemsById);
      }
    },
    setCartPending(state, action) {
      const { id, pending } = action.payload;
      if (pending) {
        state.pendingById[id] = pending;
      } else {
        delete state.pendingById[id];
      }
    },
  },
});

export const {
  addOneOptimistic,
  removeOptimistic,
  setCartPending,
} = cartSlice.actions;

export const selectQty = (state, id) =>
  state.cart.itemsById[id]?.qty ?? 0;

export const selectInCart = (state, id) =>
  !!state.cart.itemsById[id];

export const selectCartPendingById = (state) =>
  state.cart.pendingById;

export default cartSlice.reducer;


