import React from 'react';
import './brand.css';

import { google, slack, atlassian, dropbox, shopfy  } from './imports';

const Brand = () => {
  return (
    <div className='gpt__brand section__padding'>
      <dir>
        <img src={google} alt="google" />
      </dir>
      <dir>
        <img src={slack} alt="slack" />
      </dir>
      <dir>
        <img src={atlassian} alt="atlassian" />
      </dir>
      <dir>
        <img src={dropbox} alt="dropbox" />
      </dir>
      <dir>
        <img src={shopfy} alt="shopfy" />
      </dir>
    </div>
  )
}

export default Brand