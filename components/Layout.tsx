import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import Modal from "@/components/Modal/Modal";
import FormSubscribe from "@/components/FormSubscribe/FormSubscribe";

interface PropsLayout {
    children:JSX.Element
}
const Layout: React.FC<PropsLayout>  = (props) => {
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>
            <Modal>
                <FormSubscribe/>
            </Modal>
        </>
    );
};
export default Layout;