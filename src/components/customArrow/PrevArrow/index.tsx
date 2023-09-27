import { ArrowForwardIos } from '@styled-icons/material-rounded/'

import * as S from '../styles'

interface PrevButtonProps {
  onClick?: () => void
}

export default function PrevArrow({ onClick }: PrevButtonProps) {
  return (
    <S.Arrow position="left">
      <button
        type="button"
        className="next-button"
        onClick={onClick}
        aria-label="PrevArrow"
      >
        <span className="icon">
          <ArrowForwardIos size="2.5rem" color="#fff" />
        </span>
      </button>
    </S.Arrow>
  )
}
