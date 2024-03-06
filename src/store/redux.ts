import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./playerSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    playerNum: playerSlice,
    theme: themeSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
