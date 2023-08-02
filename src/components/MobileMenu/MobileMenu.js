/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import Dialog, { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
      <CloseButton onClick={onDismiss}>
        <Icon id="close"/>
        <VisuallyHidden>
          Dismiss Menu
        </VisuallyHidden>
      </CloseButton>
      <Filler/>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
position:fixed;
inset: 0;
background: hsl(220deg 5% 40% / 0.8);

display: flex;
justify-content: flex-end;
`

const Content = styled(DialogContent)`
background: white;
height: 100%;
width: 300px;
display: flex;
flex-direction: column;
padding: 32px;
`

const Filler = styled.div`
flex: 1;
`

const NavLink = styled.a`
color: ${COLORS.gray[900]};
font-weight: ${WEIGHTS.medium};
text-decoration: none;
font-size: 1.125rem;
text-transform: uppercase;

&:first-of-type {
  color: ${COLORS.secondary}
}
`

const CloseButton = styled(UnstyledButton)`
 position: absolute;
 top: 10px;
 right: 0px;
 padding: 16px;
`


const Nav = styled.nav`
display: flex;
gap: 16px;
flex-direction: column;
`

const Footer = styled.footer`
flex: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
`


export default MobileMenu;
