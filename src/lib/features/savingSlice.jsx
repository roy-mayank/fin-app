const { createSlice } = require("@reduxjs/toolkit");

const savingSlice = createSlice({
    name: 'saving',
    initialState: {
        value: []
    },
    reducers: {
        updatedSavings: (state, action) => {
            state.value == action.payload;
        }
    }
})

export const { updatedSavings } = savingSlice.actions
export default savingSlice.reducer;