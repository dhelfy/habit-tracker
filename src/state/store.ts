import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import userReducer from "./slices/userSlice/userSlice";

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;