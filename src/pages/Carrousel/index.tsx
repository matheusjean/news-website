import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Cards from '../../components/Cards/index'
import News from '../../models/news'
import { getNews } from '../../services/news'
import { CarrousselSettings } from '../../utils/carrousselSettings'
import * as S from './styles'

export default function Carrossel() {
  const [news, setNews] = useState([] as any)

  useEffect(() => {
    async function fetchData() {
      const response = await getNews()
      setNews(response)
      return response
    }
    fetchData()
  }, [])

  return (
    <S.Container aria-label="CarrosselContainer">
      <Slider autoplay={false} {...CarrousselSettings}>
        {news.map((image: News) => (
          <Cards text={image.title} image={image.image} key={image.id} />
        ))}
      </Slider>
    </S.Container>
  )
}
