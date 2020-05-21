import React from 'react';
import Header from './components/header/header';
import Visualizer from './components/visualizer/visualizer';
import ControlPanel from './components/controlPanel/controlPanel';
import Footer from './components/footer/footer';

const App = () => {
    return (
        <div>
            <Header />
            <Visualizer />
            <ControlPanel />
            <Footer />
        </div>
    );
}

export default App;
