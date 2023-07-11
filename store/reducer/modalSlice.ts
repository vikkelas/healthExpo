
import {createSlice} from "@reduxjs/toolkit";

export interface ModalState {
    statusModal: boolean;
    typeModal: ModalType | null,
}

export enum ModalType {
    DEFAULT="default_form",
    PARTICIPANTS="participants"
}

const modalState:ModalState = {
    statusModal: false,
    typeModal: null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: modalState,
    reducers: {
        closeModal: (state)=>{
            state.statusModal=false
            state.typeModal = null
        },
        openModal: (state, action)=>{
            state.statusModal=true
            state.typeModal = action.payload
        }
    },
});
export const {closeModal, openModal} = modalSlice.actions;
export default modalSlice.reducer;