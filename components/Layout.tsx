import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

interface PropsLayout {
    children:JSX.Element
}
const Layout: React.FC<PropsLayout>  = (props) => {
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
    );
};
export default Layout;