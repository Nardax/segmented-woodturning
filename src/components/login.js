import React from 'react';
import ReactModalLogin from 'react-modal-login';
import {facebookConfig, googleConfig} from "social-config";

function Sample() {
  // replace constructor w/ a `useState`-ish
  const [
    shouldShowModal,
    setShouldShowModal,
    isLoading,
    setIsLoading,
    error,
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
        visible={this.state.showModal}
        onCloseModal={this.closeModal.bind(this)}
        loading={this.state.loading}
        error={this.state.error}
        tabs={{
          onChange: this.onTabsChange.bind(this)
        }}
        loginError={{
          label: "Couldn't sign in, please try again."
        }}
        registerError={{
          label: "Couldn't sign up, please try again."
        }}
        startLoading={this.startLoading.bind(this)}
        finishLoading={this.finishLoading.bind(this)}
        providers={{
          facebook: {
            config: facebookConfig,
            onLoginSuccess: this.onLoginSuccess.bind(this),
            onLoginFail: this.onLoginFail.bind(this),
            label: "Continue with Facebook"
          },
          google: {
            config: googleConfig,
            onLoginSuccess: this.onLoginSuccess.bind(this),
            onLoginFail: this.onLoginFail.bind(this),
            label: "Continue with Google"
          }
        }}
      />
    </div>
  )
}

export default Login;