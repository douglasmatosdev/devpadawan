import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
  }
  * {
    font-family: sans-serif;
    color: #333;
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5
  a {
    color: var(--primary);
  }
 
`