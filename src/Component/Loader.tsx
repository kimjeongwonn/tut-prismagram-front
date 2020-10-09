import React from 'react';
import { Logo } from './Icons';
import styled, { keyframes } from 'styled-components';

const blinkAnimations = keyframes`
  from{
    opacity:0
  }
  to {
    opacity:1
  }
`;

const Loader = styled.div`
  animation: ${blinkAnimations} 0.75s ease infinite alternate;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Loader>
    <Logo />
  </Loader>
);
