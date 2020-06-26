import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header';
import Visualizer from './components/visualizer';
import ControlPanel from './components/controlPanel';
import Footer from './components/footer';
import './app.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <div className="flex-row">
                <Visualizer />
                <ControlPanel />
            </div>
            <Footer />
        </Provider>
    );
}

export default App; 
