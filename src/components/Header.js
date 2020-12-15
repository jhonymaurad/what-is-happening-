import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogout } from '../actions/auth';

const Header = ({ title, startLogout }) => {
  return (
    <nav className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link className='header__title' to='/dashboard'>
            <h1>{title}</h1>
          </Link>
          <Link className='header__title' to='/create'>Create Event</Link>
          <button className='button button--link' onClick={startLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: 'What is Happening'
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
