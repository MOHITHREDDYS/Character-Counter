import {
  MainContainer,
  Container,
  Heading,
  ResultsList,
  EachResult,
  Paragraph,
  ImageContainer,
  Image,
} from './styleComponents'

const ResultsSection = props => {
  const {charactersList} = props
  const listLength = charactersList.length > 0

  return (
    <MainContainer>
      <Container>
        <Heading>Count the characters like a Boss...</Heading>
      </Container>
      {listLength && (
        <ResultsList>
          {charactersList.map(eachCharacter => {
            const {id, characters, length} = eachCharacter
            return (
              <EachResult key={id}>
                <Paragraph>
                  {characters} : {length}
                </Paragraph>
              </EachResult>
            )
          })}
        </ResultsList>
      )}
      {!listLength && (
        <ImageContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        </ImageContainer>
      )}
    </MainContainer>
  )
}

export default ResultsSection
