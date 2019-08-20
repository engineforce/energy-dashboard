import styled from 'styled-components/macro';

export const Root = styled.div`
  flex: 1 50%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: white;
  background-image: radial-gradient(
    circle 248px at center,
    #16d9e3 0%,
    #30c7ec 47%,
    #46aef7 100%
  );
  color: white;
  padding: 10px;

  @media all and (min-width: 800px) {
    min-width: 200px;
    min-height: 200px;
  }
`;

export const IconContainer = styled.div`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const H3 = styled.h3`
  font-size: 11px;
  font-weight: normal;
`;

export const P = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
