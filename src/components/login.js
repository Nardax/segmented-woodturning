import React, { useState } from 'react';
import Auth from '../components/auth';
import Modal from 'react-modal';
import { LOGIN } from '../redux/actionTypes';

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
            <button onClick={() => setModalIsOpen(true)}>Login</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                {/* <h2>Select Login</h2> */}
                <Auth >
                </Auth>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
                <div>
                    <button onClick={logout}>Logout</button>
                </div>
            </Modal>
        </div>
    )
}

export default Login;