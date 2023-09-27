import { useState } from 'react'

import * as S from './styles'

type CardsProps = {
  text: string
  type?: 'default' | 'launch' | 'banner' | 'highlight'
  border?: boolean
  image: string
  favorite?: boolean
  progress?: boolean
  download?: boolean
  isMargin?: boolean
}

export default function Cards({ text, type = 'default', image }: CardsProps) {
  return (
    <S.Container type={type} aria-label="card">
      <S.Card aria-label="banner">
        <S.Image>
          <img src={image} alt="qqr" />
          <S.TextContainer>
            <S.Text>{text}</S.Text>
          </S.TextContainer>
        </S.Image>
        {/* <S.Shadow /> */}
      </S.Card>
    </S.Container>
  )
}
