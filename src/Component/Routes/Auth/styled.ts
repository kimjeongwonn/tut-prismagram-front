import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Box = styled.div`
  ${({ theme }) => theme.whiteBox}
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
`;

export const Form = styled(Box)`
  width: 100%;
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

export const Link = styled.span`
  color: ${({ theme }) => theme.blueColor};
  font-weight: 700;
  cursor: pointer;
`;

export const NotificationContainer = styled.div`
  height: 100%;
`;

export const AlertText = styled.div`
  color: ${({ theme }) => theme.redColor};
  font-size: 12px;
  text-align: center;
`;
