import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
body { 
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.blackColor};
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
}
a {
  color: ${({ theme }) => theme.blueColor};
  text-decoration: none;
}
input:focus {
  outline: none;
}
`;
