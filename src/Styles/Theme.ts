import { DefaultTheme } from 'styled-components';

const BOX_BORDER = '1px solid #e6e6e6';
const BORDER_RADIUS = '4px';

const theme: DefaultTheme = {
  maxWidth: '935px',
  bgColor: '#FAFAFA',
  blackColor: '#262626',
  darkGreyColor: '#999',
  lightGreyColor: '#c7c7c7',
  redColor: '#ED4956',
  blueColor: '#3897f0',
  darkBlueColor: '#003569',
  boxBorder: '1px solid #e6e6e6',
  borderRadius: '4px',
  whiteBox: `
  border-radius :${BORDER_RADIUS};
  border: ${BOX_BORDER};
  background-color: white;
  `,
};

export default theme;
