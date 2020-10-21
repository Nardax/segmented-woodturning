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
      height                : '35%',
      borderColor           : 'grey',
      borderWidth           : '8px',
      borderRadius          : '5%',
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/logout";
  }



function Login () {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    // const onClose = e => {
    //   <button onClick={() => modalIsOpen(true)}>Lougout</button>
    // }


        return (
        <div className='Login'>

            <button  onClick={() => setModalIsOpen(true)}>Login</button>
         

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                
                <div>

                <Auth>
                {/* <input onChange={onClose} value={Login.modalIsOpen}/> */}
                <input isOpen={modalIsOpen} />
                </Auth>

                
                {/* <button id='Logout' onClick={logout}>Logout</button> */}
                <button id='Cancel' onClick={() => setModalIsOpen(false)}>Cancel</button>

                </div>

            </Modal>
            
        </div>
    )
}


export default Login;