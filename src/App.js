import './App.css';
import Banner from './component/Banner';
import Network from './component/Network';
import Transition from './component/Transition';
import WOW from "wow.js";
import "animate.css";
import { useEffect } from 'react';



function App() {
    useEffect(() => {
        console.log("WOW effect");
        new WOW().init();
    }, []);
    return (
        <>
            <Banner/>
            <Network/>
            <Transition/>
        </>
    );
}

export default App;
