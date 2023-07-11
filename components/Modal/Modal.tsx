import style from './Modal.module.sass'
import {NextPage} from "next";
import {ReactNode} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "@/store/reducer/modalSlice";
import {AppState} from "@/store/reducer/rootReducer";

interface ModalProps {

    children: ReactNode;
}

const Modal:NextPage<ModalProps>= ({ children}) => {
    const dispatch = useDispatch()
    const {statusModal} = useSelector((state:AppState) => state.modal)
    return (
        <div
            onClick={()=>{
                dispatch(closeModal())
            }}
            className={statusModal?style.modalActive:style.modal}>
            <div
                onClick={(e)=>e.stopPropagation()}
                className={statusModal?style.contentActive:style.content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;