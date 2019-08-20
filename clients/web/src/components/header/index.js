import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  Root,
  H1,
  SettingContainer,
  ProfileImg,
  IconContainer,
} from './styled';
import profilePicture from './images/profile.jpg';

const Header = () => {
  return (
    <Root>
      <H1>
        <IconContainer>
          <FontAwesomeIcon icon={faCoffee} />
        </IconContainer>
        Energy Dashboard
      </H1>
      <SettingContainer>
        <a target="blank" href="https://www.linkedin.com/in/paul-li-97381b3/">
          <ProfileImg src={profilePicture} alt="Profile" />
        </a>
      </SettingContainer>
    </Root>
  );
};

export default Header;
