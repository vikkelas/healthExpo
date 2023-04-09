import {createSlice} from "@reduxjs/toolkit";

export interface ModalState {
    statusModal: boolean;
}

const modalState:ModalState = {
    statusModal: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: modalState,
    reducers: {
        changeModal: (state, action)=>{
            state.statusModal=action.payload
        }
    },
});
export const {changeModal} = modalSlice.actions;
export default modalSlice.reducer;