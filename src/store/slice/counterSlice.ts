import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counterSlice"
    ,initialState: {
        count: 0
    }
    ,reducers:{
        increment: (state, action : {payload: {num: number, num1: number}})=>{
            state.count += action.payload.num1;
        },
        decrement: (state)=>{
            state.count -=1;
        },
        reset: (state)=>{
            state.count = 0;

        }
    },
    extraReducers: (builder)=>{
        builder.addCase(incrementAsync.fulfilled, (state, action)=>{
            state.count += action.payload;
        }).addCase(incrementAsync.pending,()=>{
            console.log('incrementAsync pending');
        }).addCase(incrementAsync.rejected,()=>{
           console.log('incrementAsync rejected');
        });
    }
})

export const incrementAsync = createAsyncThunk(
    "counterSlice/incrementAsync",
    async (amount: number) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        //throw new Error('error');
        return amount;
    }
);

export default counterSlice.reducer;
export const {increment, decrement, reset} = counterSlice.actions;