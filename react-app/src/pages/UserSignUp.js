import React from 'react';
import '../styles/UserSignUp.css'
import UserSignUPForm from '../components/UserSignUpForm';

function UserSignUP() {
  return (
    <div className='signUp-page bg-ingo'>
      <div className='mt-5'>
        <div className='jumbotron'>
          <UserSignUPForm />
        </div>
      </div>
    </div>
  );
}

export default UserSignUP;
