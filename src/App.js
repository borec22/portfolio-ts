import './App.css';
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {useEffect} from "react";

const App = () => {
    useEffect(() => {
        const threeScript = document.createElement('script');
        threeScript.setAttribute('id', 'threeScript');
        threeScript.setAttribute(
            "src",
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        );
        document.getElementsByTagName('head')[0].appendChild(threeScript);
        return () => {
            if (threeScript) {
                threeScript.remove();
            }
        }
    }, []);

    return (
        <div className="App">
            <Header/>
            <Home/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
