import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

const Button = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  font-weight: 700;
  background-color: ${({ theme }) => theme.blueColor};
  text-align: center;
  padding: 7px 0;
  font-size: 14px;
`;

export default ({ text }: ButtonProps) => <Button>{text}</Button>;
