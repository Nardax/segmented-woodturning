import React from 'react';
import Header from './components/header/header';
import Visualizer from './components/visualizer/visualizer';
import ControlPanel from './components/controlPanel/controlPanel';
import Footer from './components/footer/footer';
import './app.css';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="flex-row">
                <Visualizer />
                <ControlPanel />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
