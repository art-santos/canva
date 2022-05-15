import { configureStore } from "@reduxjs/toolkit";

import contentReducer from "./features/content.slice";

//The responsible for the management of all the global redux states
export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
