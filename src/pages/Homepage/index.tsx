/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'

import { MainContainer } from '../../components/MainContainer'
import { PostCard } from '../../components/PostCard'
import News from '../../models/news'
import { getNews } from '../../services/news'
import Carrousel from '../Carrousel'
import { Container } from './styles'

export default function HomePage() {
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
    <MainContainer>
      <Carrousel />
      <Container>
        {news.map((post: News) => (
          <PostCard
            key={post.id}
            cover={post.image}
            hat={post.hat}
            title={post.title}
            id={post.id}
          />
        ))}
      </Container>
    </MainContainer>
  )
}
