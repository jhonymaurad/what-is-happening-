import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

function LoginPage (props) {
  const handleLogin = () => {
    props.dispatch(startLogin())
  }
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>What is Happening?</h1>
        <p>Find out events around the city</p>
        <button className='button' onClick={handleLogin}>Login with Google</button>
      </div>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//   startLogin: () => dispatch(startLogin())
// })

export default connect()(LoginPage);
