import styled from 'styled-components'

export const Section = styled.section`
  margin: 0 auto;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`

export const Title = styled.h1`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin: 10px 0 0;
  font-size: 20px;
  text-transform: uppercase;
`

export const Image = styled.img`
  margin: 8px 16px;
  width: calc(100% - 32px);
  height: 200px;
  object-fit: cover;
`
