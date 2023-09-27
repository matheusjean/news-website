import styled, { css } from 'styled-components'

export const Container = styled.div`
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export const PostCardCover = styled.div`
  margin-bottom: 1rem;

  img {
    max-width: 350px;
    display: block;
  }
`

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: 1.6rem;

    a {
      text-decoration: none;
      color: #33333333;
    }
  `}
`
