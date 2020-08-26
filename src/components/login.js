import React from 'react';
import Dialog from 'react-dialog';


 
    const openDialog = () => this.setState({ isDialogOpen: true })
 
    const handleClose = () => this.setState({ isDialogOpen: false })
 
    const Login = () => { 
        return (
            <div className="container">
                <button type="button" onClick={this.openDialog}>Login</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog
                        title="Login"
                        modal={true}
                        onClose={this.handleClose}
                        buttons={
                            [{
                                text: "Close",
                                onClick: () => this.handleClose()
                            }]
                        }>
                        <h1>Dialog Content</h1>
                        <p>More Content. Anything goes here</p>
                    </Dialog>
                }
            </div>
        );
    }

export default Login;