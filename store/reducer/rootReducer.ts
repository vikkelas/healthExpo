import { combineReducers } from '@reduxjs/toolkit'
import modalSlice from "@/store/reducer/modalSlice";
const rootReducer = combineReducers({
    modal: modalSlice,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;