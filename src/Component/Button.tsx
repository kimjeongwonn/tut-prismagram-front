import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = styled.button<Omit<ButtonProps, 'text'>>`
  width: 100%;
  border: ${({theme, isActive}) => isActive ? `1px solid ${theme.lightGreyColor}`: 0};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({isActive, theme }) => isActive ? theme.blackColor : 'white'};
  font-weight: 700;
  background-color: ${({ theme, isActive }) => isActive ? 'white' : theme.blueColor};
  text-align: center;
  padding: 7px 0;
  font-size: 14px;
  cursor: pointer;

&:focus {
  outline: none;
}
`;

export default ({ text, isActive, onClick }: ButtonProps) => <Button isActive={isActive ?? false} onClick={onClick}>{text}</Button>;
