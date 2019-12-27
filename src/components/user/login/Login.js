import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.scss';

const LogIn = () => {
  return (
    <div className="log-in">
      <div className="log-in__heading">
        <h1>Log In</h1>
      </div>
      <Button type="button" variant="outlined" color="primary" className="log-in__google-log-in">
        Login With Google
    </Button>
      <div className="log-in__separator-text">OR Log in in using email id</div>
      <form>
        <TextField
          id="userId"
          name="userId"
          label='User Name'
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: 'log-in__user-name-label',
          }}
          className="log-in__input-user-nam"
          value={''}
        />
        <TextField
          id="password"
          name="password"
          label='Password'
          type="password"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: 'log-in__password-label',
          }}
          className="log-in__input-password"
          value={''}
        />
        <Button type="button" variant="outlined" color="primary" className="log-in__btn">
          Sign In
    </Button>
      </form>
    </div>)
}

export default LogIn;