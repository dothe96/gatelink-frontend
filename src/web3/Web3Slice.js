import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    web3Instance: null,
    chainId: 0,
    accountInfo: {
        address: "0x",
        balance: 0
    }
}

const web3Slice = createSlice({
    name: "web3",
    initialState,
    reducers: {
        web3InstanceChange: (state, action) => {
            state.web3Instance = action.payload;
        },
        accountInfoChange: (state, action) => {
            state.accountInfo.address = action.payload.address || "0x";
            state.accountInfo.balance = action.payload.balance || 0;
        },
        chainIdChange: (state, action) => {
            state.chainId = action.payload || 0;
        },
        web3ResetState: () => initialState
    }
});

export const { web3InstanceChange, accountInfoChange, chainIdChange, web3ResetState } = web3Slice.actions;
export default web3Slice;