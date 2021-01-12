import './App.css';
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

const App = () => {
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
