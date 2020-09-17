import React, { useState } from 'react';
import Auth from '../components/auth';
import Modal from 'react-modal';
import { LOGIN } from '../redux/actionTypes';
import './login.scss';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '15%',
      height                : '19%',
      borderColor           : 'grey',
      borderWidth           : '8px',
      borderRadius          : '5%',
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  }

function Login () {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className='Login'>
            <href onClick={() => setModalIsOpen(true)}>Login</href>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                {/* <h2>Select Login</h2> */}
                <Auth >
                </Auth>
                <div>
                    <href onClick={() => setModalIsOpen(false)}>Cancel</href>
                </div>
                <div>
                    <href onClick={logout}>Logout</href>
                </div>
            </Modal>
        </div>
    )
}

export default Login;