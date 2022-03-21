import React from 'react';

import { global } from '../../../const';

export const Footer = () => (
  <footer className='site-footer'>
    <div className='container'>
      <div className='social-links'>
        <a href={ global['footer.linkedin'] } target='_blank' rel='noopener noreferrer' className='linkedin'><i className='fa fa-linkedin'></i></a>
        <a href={ global['footer.gmail'] } target='_blank' rel='noopener noreferrer' className='google-plus'><i className='fa fa-google-plus'></i></a>
        <a href={ global['footer.facebook'] } target='_blank' rel='noopener noreferrer' className='facebook'><i className='fa fa-facebook'></i></a>
      </div>
      <p>{ global['footer.copyright'] }</p>
    </div>
  </footer>
);
