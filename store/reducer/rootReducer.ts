import { combineReducers } from '@reduxjs/toolkit'
import modalSlice, {ModalState} from "@/store/reducer/modalSlice";

export type AppState = {
    modal: ModalState;
}

const rootReducer = combineReducers<AppState>({
    modal: modalSlice,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;