import React from 'react';
import { Root, A } from './styled';

const Footer = () => {
  return (
    <Root>
      <span>
        Built by {` `}
        <A target="blank" href="https://www.linkedin.com/in/paul-li-97381b3/">
          Paul Li
        </A>
        , © {new Date().getFullYear()}
      </span>
    </Root>
  );
};

export default Footer;
