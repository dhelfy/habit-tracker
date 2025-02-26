import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    currentUser: string | null;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    currentUser: null,
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
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        }
    },
})

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;