import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  Heading,
  Container,
  Input,
  Button,
} from './styleComponents'

const InputSection = props => {
  const {charactersInput, updateInput, charactersList, updateList} = props
  const onSubmittingInput = event => {
    event.preventDefault()
    const charLength = charactersInput.length
    if (charLength !== 0) {
      const newObject = {
        id: uuidv4(),
        characters: charactersInput,
        length: charLength,
      }

      updateList([...charactersList, newObject])
      updateInput('')
    }
    return null
  }

  const onChangingInput = event => {
    updateInput(event.target.value)
  }

  return (
    <MainContainer>
      <Heading>Character Counter</Heading>
      <Container onSubmit={onSubmittingInput}>
        <Input
          type="text"
          placeholder="Enter the Characters here"
          value={charactersInput}
          onChange={onChangingInput}
        />
        <Button type="submit" /* onClick={onClickingAddButton} */> Add</Button>
      </Container>
    </MainContainer>
  )
}

export default InputSection
