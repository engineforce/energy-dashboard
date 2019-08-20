import styled from 'styled-components/macro';

export const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  margin: 10px 10px;

  @media all and (min-width: 800px) {
    margin: 10px 20px;
  }
`;

export const H1 = styled.h1`
  flex: 1;
  text-align: left;
  font-size: 18px;
`;

export const SettingContainer = styled.div`
  font-size: 12px;
`;

export const IconContainer = styled.span`
  margin-right: 10px;
`;

export const ProfileImg = styled.img`
  width: 30px;
  border-radius: 15px;
`;
