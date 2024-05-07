import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./components/hooks/UseTelegram";

function App() {

    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close()
    }
    return (
        <div className="App">
            <Header/>
            <button onClick={onToggleButton}>
                Toggle
            </button>
        </div>
    );
}

export default App;
