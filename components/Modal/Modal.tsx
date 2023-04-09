import style from './Modal.module.sass'
import {NextPage} from "next";
import {ReactNode} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeModal, ModalState} from "@/store/reducer/modalSlice";

interface ModalProps {

    children: ReactNode;
}

const Modal:NextPage<ModalProps>= ({ children}) => {
    const dispatch = useDispatch()
    const selectIsOn = (state: {modal: ModalState}) => state.modal
    const {statusModal} = useSelector(selectIsOn)
    return (
        <div
            onClick={()=>{
                dispatch(changeModal(false))
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