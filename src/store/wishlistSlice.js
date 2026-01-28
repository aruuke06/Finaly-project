import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "wishlist";

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
    
  }
};

const initialState = {
  ids: loadWishlistFromStorage(),
  pendingById: {},
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlistOptimistic(state, action) {
      const id = action.payload;
      const exists = state.ids.includes(id);
      if (exists) {
        state.ids = state.ids.filter((itemId) => itemId !== id);
      } else {
        state.ids.push(id);
      }
      saveWishlistToStorage(state.ids);
    },
    setWishlistPending(state, action) {
      const { id, pending } = action.payload;
      if (pending) {
        state.pendingById[id] = true;
      } else {
        delete state.pendingById[id];
      }
    },
  },
});

export const {
  toggleWishlistOptimistic,
  setWishlistPending,
} = wishlistSlice.actions;

export const selectIsInWishlist = (state, id) =>
  state.wishlist.ids.includes(id);

export const selectWishlistPendingById = (state) =>
  state.wishlist.pendingById;

export default wishlistSlice.reducer;


