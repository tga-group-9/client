import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SignUp.scss'

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up__heading">
        <h1>Sign UP</h1>
      </div>
      <form className="sign-up-form">
        <TextField
          id="firstName"
          name="firstName"
          label='First Name'
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: 'sign-up__first-name-label',
          }}
          className="sign-up__input-first-name"
          value={''}
        />

        <TextField
          id="lastName"
          name="lastName"
          label='Last Name'
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: 'sign-up__last-name-label',
          }}
          className="sign-up__input-last-name"
          value={''}
        />
        <TextField
          id="userId"
          name="userId"
          label='User Name'
          type="text"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: 'sign-up__user-name-label',
          }}
          className="sign-up__input-user-nam"
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
            className: 'sign-up__password-label',
          }}
          className="sign-up__input-password"
          value={''}
        />
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label='Confirm Password'
          type="password"
          margin="dense"
          autoFocus
          InputLabelProps={{
            className: 'sign-up__confirm-password-label',
          }}
          className="sign-up__input-confirm-password"
          value={''}
        />
        <Button type="submit" variant="outlined" color="primary" className="sign-up__button">
          Sign Up
        </Button>

        <a href="#" className="sign-up__existing-user">
          Alrady Member
        </a>
      </form>
    </div>
  )
}

export default SignUp;