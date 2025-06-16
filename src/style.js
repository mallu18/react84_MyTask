import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

export const TaskInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 35vw;
  background-color: #1a171d;
`

export const TaskDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 65vw;
  background-color: #000000;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 20px;
`

export const LabelText = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  height: 40px;
  font-family: 'Roboto';
  font-size: 20px;
  padding: 10px;
  outline: none;
  margin-bottom: 15px;
`

export const Select = styled.select`
  height: 45px;
  font-family: 'Roboto';
  font-size: 20px;
  padding: 10px;
  outline: none;
  margin-bottom: 15px;
`

export const AddButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  height: 45px;
  width: 150px;
  border-radius: 5px;
  border: none;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`

export const TagsHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`

export const NoTaskText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
`

export const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0 20px 0;
  list-style-type: none;
`

export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 5px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`

export const TagListItem = styled.li`
  list-style-type: none;
`

export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
`
