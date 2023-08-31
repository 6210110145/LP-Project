import React from 'react';
import '../styles/UserSignUp.css'
import UserLogInForm from '../components/UserLogInForm'

function UserLogIn() {
  return (
    <div className='logIn-page'>
      <div className='mt-5'>
        <div class="jumbotron">
          <UserLogInForm />
        </div>
      </div>
      
    </div>
  );
}

export default UserLogIn;