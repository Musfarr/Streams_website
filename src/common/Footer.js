import React from 'react';

const Footer = () => {
  return (
    <div className="uk-section uk-section-small uk-background-secondary">
      <div className="uk-container">
        {/* <img src='images/logo.jpeg' /> */}
        <div className='uk-text-center uk-light'>
          <h1 className='uk-margin-remove'>Contact Us</h1>
          <p className='uk-margin-remove'>Email: info@example.com</p>
          <p className='uk-margin-remove'>Phone: +1 123-456-7890</p>
        </div>
        <div className='uk-flex uk-flex-center uk-margin-top'>
          <div>
            Follow us on social media:
            <ul className='uk-list uk-list-horizontal uk-margin-remove-bottom'>
              <li><a className='uk-icon-link' href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" uk-icon="twitter"></a></li>
              <li><a className='uk-icon-link' href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" uk-icon="facebook"></a></li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
