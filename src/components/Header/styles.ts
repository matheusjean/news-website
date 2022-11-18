import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    background: #ede72d;
    color: white;
    font-size: 1.5rem;
    padding: 2rem;
    text-align: center;
  `}

  a {
    color: white;
    text-decoration: none;
  }
`
