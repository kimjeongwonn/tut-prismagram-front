import React from 'react';
import styled from 'styled-components';

const UserIcon =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptNy43NTMgMTguMzA1Yy0uMjYxLS41ODYtLjc4OS0uOTkxLTEuODcxLTEuMjQxLTIuMjkzLS41MjktNC40MjgtLjk5My0zLjM5My0yLjk0NSAzLjE0NS01Ljk0Mi44MzMtOS4xMTktMi40ODktOS4xMTktMy4zODggMC01LjY0NCAzLjI5OS0yLjQ4OSA5LjExOSAxLjA2NiAxLjk2NC0xLjE0OCAyLjQyNy0zLjM5MyAyLjk0NS0xLjA4NC4yNS0xLjYwOC42NTgtMS44NjcgMS4yNDYtMS40MDUtMS43MjMtMi4yNTEtMy45MTktMi4yNTEtNi4zMSAwLTUuNTE0IDQuNDg2LTEwIDEwLTEwczEwIDQuNDg2IDEwIDEwYzAgMi4zODktLjg0NSA0LjU4My0yLjI0NyA2LjMwNXoiLz48L3N2Zz4=';

const Image = styled.div<{ img: string | null; size: number; margin: string }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  margin: ${({ margin }) => margin};
  border-radius: 50%;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-image: url(${({ img }) => img || UserIcon});
  background-size: cover;
  background-position: center center;
`;

export default ({ img, size = 32, margin = '0' }: { img: string | null; size: number; margin?: string }) => {
  return <Image img={img} size={size} margin={margin} />;
};
