import { configureStore } from "@reduxjs/toolkit";
import { navbarSlice } from "@/services/slices/navbar-slice";

const store = configureStore({
   reducer: {
      navbarSlice: navbarSlice.reducer,
   },
});

export default store;
