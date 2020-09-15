import React, { useState } from 'react';
import Auth from '../components/auth';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
<<<<<<< HEAD
      transform             : 'translate(-50%, -50%)',
      width                 : '15%',
      height                : '19%',
      borderColor           : 'grey',
      borderWidth           : '8px',
      borderRadius          : '5%',
=======
      transform             : 'translate(-50%, -50%)'
>>>>>>> 82de9fbfdd25780ef85eab2f127c898b93d94740
    }
  };

function Login () {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className='Login'>
            <button onClick={() => setModalIsOpen(true)}>Login</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
<<<<<<< HEAD
                {/* <h2>Select Login</h2> */}
=======
                <h2>Login</h2>
>>>>>>> 82de9fbfdd25780ef85eab2f127c898b93d94740
                <Auth >
                </Auth>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default Login;