import styled from 'styled-components/macro';

export const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;

  @media all and (min-width: 800px) {
    height: 100%;
    min-height: 100%;
    display: grid;
    grid-gap: 0;
    grid-template-columns: 200px 5fr;
    grid-template-rows: 50px 1fr auto;
    grid-template-areas:
      'header header'
      'nav content'
      'nav footer';
  }
`;

export const HeaderContainer = styled.header`
  flex: 1 100%;
  background: #00d88f;
  height: 50px;

  @media all and (min-width: 800px) {
    grid-area: header;
  }
`;

export const NavContainer = styled.aside`
  flex: 1 100%;
  background: gold;
  font-weight: bold;

  @media all and (min-width: 800px) {
    grid-area: nav;
  }
`;

export const Content = styled.article`
  flex: 1 100%;
  text-align: left;
  background: #f1f4f6;

  @media all and (min-width: 800px) {
    grid-area: content;
  }
`;

export const FooterContainer = styled.footer`
  flex: 1 100%;
  background: #fafbfc;
  order: 3;

  @media all and (min-width: 800px) {
    grid-area: footer;
  }
`;
