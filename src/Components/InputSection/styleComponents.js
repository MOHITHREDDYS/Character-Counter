import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 50%;
  background-color: #0f172a;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
`

export const Heading = styled.h1`
  color: #ffbf1f;
  font-size: 30px;
  text-align: center;
  font-family: 'Roboto';
`

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
  font-family: 'Roboto';
  padding: 8px;
  color: #272c47;
  background-color: #ffffff;
  border-radius: 5px;
  flex: 1;
  margin-bottom: 15px;
`

export const Button = styled.button`
  background-color: #ffbf1f;
  color : #475569;
  font-size : 12px;
  font-weight : bold;
  font-family : "Roboto"
  outline : none;
  cursor : pointer;
  padding : 8px 20px;
  border:none;
  border-radius : 5px;
  margin-left : 10px;
  margin-bottom: 15px;
`
