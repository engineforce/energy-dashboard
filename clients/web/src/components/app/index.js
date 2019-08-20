import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Root,
  HeaderContainer,
  Content,
  NavContainer,
  FooterContainer,
} from './styled';

import { makeI18nFormatter, I18nContext } from '../../libs/i18n';
import Nav from '../nav';
import Dashboard from '../dashboard-page';
import About from '../about-page';
import Footer from '../footer';
import Header from '../header';

const i18nFormatter = makeI18nFormatter({ locale: 'en-AU' });

function App() {
  return (
    <I18nContext.Provider value={i18nFormatter}>
      <Router>
        <Root>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <Content>
            <Route exact path="/" component={Dashboard} />
            <Route path="/about" component={About} />
          </Content>
          <NavContainer>
            <Nav />
          </NavContainer>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Root>
      </Router>
    </I18nContext.Provider>
  );
}

export default App;
