import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Heading } from '../../components/Heading'
import { MainContainer } from '../../components/MainContainer'
import { PostContainer } from '../../components/PostContainer'
import { PostCover } from '../../components/PostCover'
import News from '../../models/news'
import { getNewsById } from '../../services/news'
import { PostDetails } from '../PostDetails'

type LoggedAreaEventParams = {
  id: string
}

export const Post = () => {
  const { id } = useParams<LoggedAreaEventParams>()

  const [news, setNews] = useState<News>()

  useEffect(() => {
    async function fetchData() {
      const response = await getNewsById(id as string)

      setNews(response)
      return response
    }
    fetchData()
  }, [id])

  return (
    <>
      <Heading>{news?.title}</Heading>
      <MainContainer>
        <PostCover coverUrl={news?.image} alt={news?.hat} />
        <PostDetails author={news?.author} date={news?.created_at} />
        <PostContainer content={news?.text} />
      </MainContainer>
    </>
  )
}
