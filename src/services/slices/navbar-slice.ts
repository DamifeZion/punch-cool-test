import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NavbarSliceProps } from "@/types";

const initialState: NavbarSliceProps = {
   showMobileMenu: false,
};

export const navbarSlice = createSlice({
   name: "Navbar Slice",

   initialState,

   reducers: {
      setShowMainMenu: (state, action: PayloadAction<undefined | boolean>) => {
         if (action.payload === undefined) {
            state.showMobileMenu = !state.showMobileMenu;
         } else {
            state.showMobileMenu = action.payload;
         }
      },
   },
});

export const { setShowMainMenu } = navbarSlice.actions;
