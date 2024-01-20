import {useState} from 'react'

import ResultsSection from '../ResultsSection'
import InputSection from '../InputSection'
import {MainContainer, Container} from './styleComponents'

const CharacterCounter = () => {
  const [charactersInput, updateInput] = useState('')
  const [charactersList, updateList] = useState([])

  return (
    <MainContainer>
      <Container>
        <ResultsSection charactersList={charactersList} />
        <InputSection
          charactersInput={charactersInput}
          charactersList={charactersList}
          updateInput={updateInput}
          updateList={updateList}
        />
      </Container>
    </MainContainer>
  )
}

export default CharacterCounter
