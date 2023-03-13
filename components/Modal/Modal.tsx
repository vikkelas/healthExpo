import style from '../styles/Modal.module.sass'
import {NextPage} from "next";

interface PropsModal {
    children:
}

const Modal:NextPage<PropsModal> = (props) => {

    return (
        <div
            onClick={()=>{

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