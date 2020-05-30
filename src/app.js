import React from 'react';
import Header from './components/header';
import Visualizer from './components/visualizer';
import ControlPanel from './components/controlPanel';
import Footer from './components/footer';
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
