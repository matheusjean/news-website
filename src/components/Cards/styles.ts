import styled, { css } from "styled-components";

type ContainerProps = {
  type: "default" | "launch" | "banner" | "highlight";
  size?: string;
  border?: boolean;
  isMargin?: boolean;
  download?: boolean;
};

const containerMapper = {
  default: () => css`
    max-width: 37.5rem;
    width: 100%;
    height: auto;
    aspect-ratio: 3/2;
  `,
  launch: () => css`
    max-width: 115rem;
    width: 100%;
    aspect-ratio: 163/76;
  `,
  banner: () => css`
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
  `,
  highlight: () => css`
    max-width: 31rem;
    width: 100%;
    aspect-ratio: 50/90;
  `,
};
export const Image = styled.div`
  ${({ theme }) => css`
    & > img {
      /* border-radius: 1rem; */
      height: 400px !important;
      width: 730px !important;
    }
  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    z-index: 1;
    max-width: 25rem;
    text-align: start;
  `}
`;
export const Text = styled.h1`
  ${({ theme }) => css`
    font-size: clamp(1rem, 3.5vw, 2rem);
  `}
`;
type FavoriteProps = {
  favorite?: boolean;
};

export const Shadow = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 0.3rem;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 23.21%,
      rgba(0, 0, 0, 0.56) 65.59%,
      rgba(0, 0, 0, 0.98) 100%
    ),
    url(.jpg);
`;

export const Container = styled.div<ContainerProps>`
  ${({ type }) => css`
    ${!!type && containerMapper[type]}
  `}
`;
export const Card = styled.div.attrs((props: ContainerProps) => ({
  type: props.type,
  size: props.size,
  isMargin: props.isMargin,
}))`
  position: relative;
  color: white;
  cursor: pointer;
  border: 1rem;
  border-radius: 0.5rem;
  height: 100%;

  .bar {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
  }
  .button {
    z-index: 1;
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 4rem;

    span {
      margin-left: 5px;
    }
  }
`;
