import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
  --danger-color: #F5365C;
  --info-color: #11CDEF;
  --warning-color: #FB6340;
  --success-color: #2DCE89;
}

  *{
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    padding: 0;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

`

export default GlobalStyles
