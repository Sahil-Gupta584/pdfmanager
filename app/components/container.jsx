import "../globals.css"
import FAQs from "./FAQs";
import Footer from "./footer";
import { ToolCardBox } from "./toolCardBox";

function Container() {
    return (
        <>
            <div className="home-container">
                <div className="intro">
                    <h1>Effortless PDF Tools</h1>
                    <span>simplify your pdf tasks!</span>
                </div>
                <div className="tools-container">
                    <h2>Powerfull PDF Tools</h2>
                    <p className="home-desc">"Unlock the full potential of your PDF files with out versatile tools"</p>
                    <ToolCardBox />
                </div>
            </div>
            <FAQs />
            <Footer />

        </>
    );
};

export default Container;