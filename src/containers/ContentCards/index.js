import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Section, Title, SectionGrid } from './styles/contentCards'
import { Card } from '../../components/Card'
import { fetchCharacters } from '../../redux'

export const ContentCards = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  return (
    <Section>
      <Title>Persons</Title>
      <SectionGrid>
        {
          characters.characters && 
            characters.characters.map(card => (
                <Card key={card.id} {...card} />
              )
            )
        }
      </SectionGrid>
    </Section>
  )
}
