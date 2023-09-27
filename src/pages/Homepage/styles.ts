import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`

export const Category = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 1.8rem 0;
`
