import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        homeData: []
    },
    reducers:{
        resetHomeData: (state) => {
            state.homeData = []
        }
    }
})

export const { resetHomeData} = homeSlice.actions;
export default homeSlice.reducer

