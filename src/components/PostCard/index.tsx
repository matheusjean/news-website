/* eslint-disable @typescript-eslint/no-unused-vars */

import { Container, PostCardCover, PostCardHeading } from './styles'

export type PostCardProps = {
  hat: string
  title: string
  cover: string
  id: string
}

export const PostCard = ({ cover, hat, title, id }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <a href={`/news/${id}`}>
          <img src={cover} alt={title} />
        </a>
      </PostCardCover>

      <PostCardHeading>
        <a href={`/news/${id}`}>{title}</a>
      </PostCardHeading>
    </Container>
  )
}

// href={`/posts/${slug}`}
// href="/post/[slug]" as={`/post/${slug}`}
