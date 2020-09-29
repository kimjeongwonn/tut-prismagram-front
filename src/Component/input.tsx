import React from 'react';
import styled from 'styled-components';

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Container = styled.input`
  border: ${({ theme }) => theme.boxBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.bgColor};
  height: 40px;
  padding: 0 15px;
  font-size: 12px;
`;

export default (props: inputProps) => <Container {...props} />;
