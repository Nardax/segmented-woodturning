import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header';
import Visualizer from './components/visualizer';
import ControlPanel from './components/controlPanel';
import Footer from './components/footer';
import './app.scss';
import Auth from './components/auth';
import Login from './components/login';

const App = () => {
    return (
        <Provider store={store}>
            {/* <Auth />  */}
            <Header />
            {/* <Login /> */}
            <Visualizer />
            <ControlPanel />
            <Footer />
        </Provider>
    );
}

export default App; 
