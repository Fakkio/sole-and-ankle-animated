/* eslint-disable no-unused-vars */
import React from "react";
import styled, {keyframes} from "styled-components/macro";
import {DialogOverlay, DialogContent} from "@reach/dialog";

import {QUERIES, WEIGHTS} from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({isOpen, onDismiss}) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
from {background: var(--color-backdrop-closed);}
  to {background: var(--color-backdrop);}
`;

const slideIn = keyframes`
  from {transform: translateX(100%)}
  to {transform: translateX(0%)}
`;

const linkFadeIn = keyframes`
  from {transform: translateX(20px); opacity: 0}
  to {transform: translateX(0px); opacity:1 }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: -16px;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 0.8s;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 316px;
  height: 100%;
  padding: 24px 48px 24px 32px;
  display: flex;
  flex-direction: column;

  @media ${QUERIES.nonReducedAnimation} {
    animation: ${slideIn} 0.5s 0.2s cubic-bezier(0.11, 0.62, 0.29, 1.22);
    animation-fill-mode: both;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 16px;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media ${QUERIES.nonReducedAnimation} {
    animation: ${linkFadeIn} 0.5s 0.7s;
    animation-fill-mode: both;
    &:nth-child(1) {
      animation-delay: calc((0 * 0.05s) + 0.4s);
    }
    &:nth-child(2) {
      animation-delay: calc((1 * 0.05s) + 0.4s);
    }
    &:nth-child(3) {
      animation-delay: calc((2 * 0.05s) + 0.4s);
    }
    &:nth-child(4) {
      animation-delay: calc((3 * 0.05s) + 0.4s);
    }
    &:nth-child(5) {
      animation-delay: calc((4 * 0.05s) + 0.4s);
    }
    &:nth-child(6) {
      animation-delay: calc((5 * 0.05s) + 0.4s);
    }
    &:nth-child(7) {
      animation-delay: calc((6 * 0.05s) + 0.4s);
    }
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
