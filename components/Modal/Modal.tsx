import style from './Modal.module.sass'
import {NextPage} from "next";
import {Dispatch, ReactNode, SetStateAction} from "react";

interface ModalProps {
    modalStatus: boolean;
    setModalStatus: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}

const Modal:NextPage<ModalProps>= ({modalStatus, setModalStatus, children}) => {

    return (
        <div
            onClick={()=>{
                setModalStatus(false)
            }}
            className={modalStatus?style.modalActive:style.modal}>
            <div
                onClick={(e)=>e.stopPropagation()}
                className={modalStatus?style.contentActive:style.content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;