import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import Modal from "@/components/Modal/Modal";
import FormSubscribe from "@/components/FormSubscribe/FormSubscribe";
import {useSelector} from "react-redux";
import {ModalState, ModalType} from "@/store/reducer/modalSlice";
import {AppState} from "@/store/reducer/rootReducer";
import FormParticipants from "@/components/FormParticipants/FormParticipants";

interface PropsLayout {
    children:JSX.Element
}
const Layout: React.FC<PropsLayout>  = (props) => {
    const modal: ModalState = useSelector((state:AppState)=>state.modal)
    return (
        <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Header/>
                {props.children}
            <Footer/>
            <Modal>
                {modal.typeModal===ModalType.PARTICIPANTS&&<FormParticipants/>}
                {modal.typeModal===ModalType.DEFAULT&&<FormSubscribe/>}
            </Modal>
        </div>
    );
};
export default Layout;