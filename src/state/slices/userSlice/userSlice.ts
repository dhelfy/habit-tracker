import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    currentUser: string | null;
    isAuthenticated: boolean;
    userID: string | null;
}

const initialState: UserState = {
    currentUser: null,
    userID: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ user: string }>) => {
            state.currentUser = action.payload.user;
            state.isAuthenticated = true;
        },
        setUserID: (state, action: PayloadAction<{ id: string }>) => {
            state.userID = action.payload.id;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        }
    },
})

export const { setUser, logout, setUserID } = userSlice.actions;
export default userSlice.reducer;