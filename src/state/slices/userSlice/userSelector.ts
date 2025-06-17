import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const root = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(root, (root) => root.currentUser)
export const selectUserID = createSelector(root, (root) => root.userID)
export const selectIsAuthenticated = createSelector(root, (root) => root.isAuthenticated)