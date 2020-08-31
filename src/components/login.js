import React from 'react';
import ReactModalLogin from 'react-modal-login';
import Auth from '../components/auth';

function Sample() {
  // replace constructor w/ a `useState`-ish
  const [
    // shouldShowModal,
    setShouldShowModal,
    // isLoading,
    setIsLoading,
    // error,
    setError,
  ] = useLogin(null);

  // so each individual useEffect can list the props is subscribes to as its second arg (after the closure)
  // alternatively, you could probably combine these into one effect
  useEffect(() => {
    function openModal() {
      setShouldShowModal(true);
    }
  });

  useEffect(() => {
    function closeModal() {
      setShouldShowModal(false);
      setError(null);
    }
  });
    
  useEffect(() => {
    function onLoginSuccess(method) {
      console.log('logged successfully with ' + method);
    }
  });

  useEffect(() => {
    function onLoginFail(method, response) {
      console.log('logging failed with ' + method);
      setError(response);
    }
  });

  useEffect(() => {
    function startLoading() {
      setIsLoading(true);
    }
  });

  useEffect(() => {
    function finishLoading() {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    function onTabsChange() {
      setError(null);
    }
  });

  // I think something is wrong w/ this return syntax
  return (
    <div>

      <button
        onClick={() => this.openModal()}
      >
        Open Modal
      </button>

      <ReactModalLogin
        visible={showModal}
        onCloseModal={closeModal}
        loading={loading}
        error={error}
        tabs={{onChange: onTabsChange}}
        loginError={{
          label: "Couldn't sign in, please try again."
        }}
        registerError={{
          label: "Couldn't sign up, please try again."
        }}
        startLoading={startLoading}
        finishLoading={finishLoading}
        providers={{
          facebook: {
            config: {FacebookLogin},
            onLoginSuccess: {onLoginSuccess},
            onLoginFail: {onLoginFail},
            label: "Continue with Facebook"
          },
          google: {
            config: {GoogleLogin},
            onLoginSuccess: {onLoginSuccess},
            onLoginFail: {onLoginFail},
            label: "Continue with Google"
          }
        }}
      />
    </div>
  )
}

export default Login;