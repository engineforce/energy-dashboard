import styled from 'styled-components/macro';

export const Root = styled.div`
  flex: 1;
  padding: 0;
  display: flex;
  flex-flow: row wrap;

  @media all and (min-width: 800px) {
    padding: 20px 20px 50px 20px;
  }
`;

export const Container = styled.div`
  /* margin: 1px; */

  @media all and (min-width: 800px) {
    margin: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const GridContainer = styled(Container)`
  flex: 1 100%;
  border-radius: 5px;
`;

export const TileContainer = styled(Container)`
  flex: 1 1;
  border-radius: 5px;
`;
