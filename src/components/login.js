import React, { useState } from 'react';
import Auth from '../components/auth';
import Modal from 'react-modal';

function Login () {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className='Login'>
            <button onClick={() => setModalIsOpen(true)}>Login</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Login</h2>
                <p>Sign in buttons</p>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default Login;