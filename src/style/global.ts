import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: 'Roboto';
  src: local('Roboto'), url(/font/Roboto.ttf) format('truetype');
}

:root {
    --primary-color:#5d8cc5;
    --secondary-color: #84b4ef;
    --tertiary-color: #446793;
    --grey-0: #f5f7fa;
    --grey-1: #f7f9fa;
    --grey-3: #656565;
    --grey-4: #9f9f9f;
    --white: #ffffff;
    --black: #000000;
    --transparent: transparent;
    
  html, body, #root {
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
    background-color: var(--grey-0);
  }
  *::selection {
    background-color: var(--tertiary-color);
    color: var(--white);
    text-shadow: none;
  }
  a {
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
}
  `;

export const ResetCSS = createGlobalStyle`

  html,main, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: 'Roboto', sans-serif;
    vertical-align: baseline;
    scroll-behavior: smooth;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  *::-webkit-scrollbar {
    width: 15px;
  }
  *::-webkit-scrollbar-track {
    background: var(--grey-0);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 20px;
    border: 3px solid var(--grey-0);
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
