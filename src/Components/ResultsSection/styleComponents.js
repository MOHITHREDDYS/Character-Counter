import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 50%;
  background-color: #ffc533;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  height: 30%;
  padding: 15px;
  background-color: #ffbf1f;
  display: flex;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #334155;
`

export const ResultsList = styled.ul`
  flex: 1;
  list-style-type: none;
  padding-left: 0px;
  padding: 15px;
  overflow: auto;
`

export const EachResult = styled.li`
  color: #334155;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Roboto';
`

export const Paragraph = styled.p``

export const ImageContainer = styled.div`
  height: 70%;
  padding: 15px;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`
