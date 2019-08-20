import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';
import { contains } from 'ramda';

describe('Header', () => {
  describe('when render header', () => {
    const header = renderer.create(<Header />);

    it('renders profile image that link to my linkedin', () => {
      const profileLink = header.root.findByProps({
        href: 'https://www.linkedin.com/in/paul-li-97381b3/',
      });
      profileLink.findByProps({ src: 'profile.jpg' });
    });
  });
});
