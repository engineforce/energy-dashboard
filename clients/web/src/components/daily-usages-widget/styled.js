import styled from 'styled-components/macro';

export const Root = styled.div`
  flex: 1 100%;
  padding: 10px;
  font-size: 90%;

  display: flex;
  flex-flow: row wrap;
`;

export const H3 = styled.h3`
  font-size: 12px;
  margin-bottom: 5px;
  text-align: center;
  flex: 1 auto;
`;

export const IconContainer = styled.a`
  flex: 0 1 auto;
  margin-right: 10px;
  border: 0;
  background-color: inherit;

  color: ${props => (props.active ? 'blue' : 'inherit')};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 0;
  }
`;

export const HR = styled.hr`
  border-top: 1px solid lightgray;
  margin-bottom: 10px;
  flex: 1 1 100%;
`;

export const DataContainer = styled.div`
  flex: 1 1 100%;
`;
