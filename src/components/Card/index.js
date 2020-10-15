import React from 'react'
import { Section, Title, Image } from './styles/card'

export const Card = ({image, name}) => {
  return (
    <Section>
      <Title>{ name }</Title>
      <Image src={ image } alt={ name } />
    </Section>
  )
}