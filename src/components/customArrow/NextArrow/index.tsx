import { ArrowBackIosNew } from '@styled-icons/material-rounded/'

import * as S from '../styles'

interface PrevButtonProps {
  onClick?: () => void
}

export default function NextArrow({ onClick }: PrevButtonProps) {
  return (
    <S.Arrow position="right" aria-label="NextArrow">
      <button type="button" className="next-button" onClick={onClick}>
        <span className="icon">
          <ArrowBackIosNew size="2.5rem" color="#fff" />
        </span>
      </button>
    </S.Arrow>
  )
}
