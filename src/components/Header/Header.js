import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileItems>
          <UnstyledButton>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" />
          </UnstyledButton>
      </MobileItems>
      <Filler/>
      </MainHeader>
      <MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)}/>

    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;

  border-bottom: 1px solid ${COLORS.gray[300]};
  border-top: 4px solid ${COLORS.gray[900]};

  @media (max-width: 59.375rem) {
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 37.5rem) {
    padding-left:16px;
    padding-right:16px;
  }
`;



const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem,
    8.1vw - 4rem,
    3rem);;
  margin: 0px 48px;

  @media (max-width: 59.375rem) {
    display: none;
  }

`;

const Side = styled.div`
  flex: 1;

  @media (max-width: 59.375rem) {
    flex: revert;
  }

`;

const Filler = styled.div`
flex: 1;

@media (max-width: 59.375rem) {
  display: none;
}
`



const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const MobileItems = styled.div`
  display: none;

  @media (max-width: 59.375rem){
    display: flex;
    gap: 30px;
  }

  @media (max-width: 37.5rem){
    display: flex;
    gap: 16px;
  }

`

export default Header;
