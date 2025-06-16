import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  background-color: #1a171d;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 5px;
`

export const TaskName = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 18px;
`

export const TagsCategory = styled.p`
  background-color: #f3aa4e;
  border-radius: 20px;
  padding: 10px;
  margin: 5px;
  color: #131213;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`
