import styled, { css } from 'styled-components'

type DropdownListProps = {
  position: 'left' | 'right'
}
export const Arrow = styled.div<DropdownListProps>`
  ${({ position }) => css`
    display: flex;
    position: absolute;
    bottom: 0;
    border: none;
    left: ${position === 'left' ? '0' : 'auto'};
    right: ${position === 'right' ? '0' : 'auto'};
    height: 100%;
    width: 10rem;
    z-index: 1;
    cursor: pointer;

    & button {
      background-color: transparent;
      border: none;
      width: 10rem;
      cursor: pointer;

      background: linear-gradient(
        ${position === 'left' ? '270deg' : '90deg'},
        rgba(16, 16, 16, 0.9) 13.16%,
        rgba(0, 0, 0, 0.7) 37.93%,
        rgba(0, 0, 0, 0) 100%
      );
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  `}
`
