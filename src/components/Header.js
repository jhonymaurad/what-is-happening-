import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = ({ title }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className='header'>
        <div className='header__logo'>{title}</div>
        <ul className='header__links' style={{ transform: open ? 'translateX(0px)' : '' }}>
          <li><a>Events</a></li>
          <li><a>Profile</a></li>
          <li><a>About</a></li>
        </ul>

        <AiOutlineMenu className='header__burger' onClick={() => setOpen(!open)} />
      </nav>

    </div>
  );
};

Header.defaultProps = {
  title: 'What is Happening'
};

export default Header;
