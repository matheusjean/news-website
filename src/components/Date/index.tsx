import { formatDate } from '../../utils/format-date'
import { Container } from './styles'

export type DateProps = {
  date?: Date | any
}

export const Date = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>
}
