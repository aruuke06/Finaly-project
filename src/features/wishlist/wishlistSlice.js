import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "wishlist_ids_v1";

const loadWishlistFromStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map((id) => Number(id)).filter((id) => !Number.isNaN(id));
    }
    return [];
  } catch {
    return [];
  }
};

const saveWishlistToStorage = (ids) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // ignore storage errors
  }
};

const initialState = {
  ids: loadWishlistFromStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action) {
      const id = Number(action.payload);
      const exists = state.ids.includes(id);
      if (exists) {
        state.ids = state.ids.filter((itemId) => itemId !== id);
      } else {
        state.ids.push(id);
      }
      saveWishlistToStorage(state.ids);
    },
    removeFromWishlist(state, action) {
      const id = Number(action.payload);
      state.ids = state.ids.filter((itemId) => itemId !== id);
      saveWishlistToStorage(state.ids);
    },
    clearWishlist(state) {
      state.ids = [];
      saveWishlistToStorage(state.ids);
    },
  },
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export const selectWishlistIds = (state) => state.wishlist.ids;

export const selectIsWishlisted = (state, id) =>
  state.wishlist.ids.includes(Number(id));

export default wishlistSlice.reducer;

