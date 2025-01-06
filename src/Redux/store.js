// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as the default storage
import { projectsSlice } from "./slice/ProjectSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, projectsSlice.reducer);

const store = configureStore({
  reducer: {
    projects: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
