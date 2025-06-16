// import {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'

// const tagsList = [
//   {optionId: 'HEALTH', displayText: 'Health'},
//   {optionId: 'EDUCATION', displayText: 'Education'},
//   {optionId: 'ENTERTAINMENT', displayText: 'Entertainment'},
//   {optionId: 'SPORTS', displayText: 'Sports'},
//   {optionId: 'TRAVEL', displayText: 'Travel'},
//   {optionId: 'OTHERS', displayText: 'Others'},
// ]

// class App extends Component {
//   state = {
//     inputTask: '',
//     selectTag: tagsList[0].optionId,
//     myTaskList: [],
//     activeTag: '',
//   }

//   onChangeInputTask = event => {
//     this.setState({inputTask: event.target.value})
//   }

//   onChangeSelectTag = event => {
//     this.setState({selectTag: event.target.value})
//   }

//   onSubmitForm = event => {
//     event.preventDefault()
//     const {inputTask, selectTag} = this.state
//     if (inputTask.trim() !== '') {
//       const newTask = {
//         id: uuidv4(),
//         taskName: inputTask,
//         taskCategory: selectTag,
//       }
//       this.setState(prevState => ({
//         myTaskList: [...prevState.myTaskList, newTask],
//         inputTask: '',
//         selectTag: tagsList[0].optionId,
//       }))
//     }
//   }

//   onClickTagButton = optionId => {
//     this.setState(prevState => ({
//       activeTag: prevState.activeTag === optionId ? '' : optionId,
//     }))
//   }

//   render() {
//     const {inputTask, selectTag, myTaskList, activeTag} = this.state
//     const filteredTasks =
//       activeTag === ''
//         ? myTaskList
//         : myTaskList.filter(task => task.taskCategory === activeTag)

//     return (
//       <div>
//         <form onSubmit={this.onSubmitForm}>
//           <h1>Create a task</h1>
//           <div>
//             <label htmlFor='taskInput'>Task</label>
//             <input
//               id='taskInput'
//               type='text'
//               placeholder='Enter the task here'
//               value={inputTask}
//               onChange={this.onChangeInputTask}
//             />
//           </div>
//           <div>
//             <label htmlFor='tagSelect'>Tags</label>
//             <select
//               id='tagSelect'
//               value={selectTag}
//               onChange={this.onChangeSelectTag}
//             >
//               {tagsList.map(tag => (
//                 <option key={tag.optionId} value={tag.optionId}>
//                   {tag.displayText}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button type='submit'>Add Task</button>
//         </form>

//         <h1>Tags</h1>
//         <ul>
//           {tagsList.map(tag => (
//             <li key={tag.optionId}>
//               <button
//                 type='button'
//                 onClick={() => this.onClickTagButton(tag.optionId)}
//               >
//                 {tag.displayText}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <h1>Tasks</h1>
//         <ul>
//           {filteredTasks.length === 0 ? (
//             <p>No Tasks Added Yet</p>
//           ) : (
//             filteredTasks.map(task => (
//               <li key={task.id}>
//                 <p>{task.taskName}</p>
//                 <p>{task.taskCategory}</p>
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainContainer,
  TaskInputContainer,
  TaskDisplayContainer,
  Heading,
  InputContainer,
  LabelText,
  Input,
  Select,
  AddButton,
  TagsHeading,
  NoTaskText,
  TagsContainer,
  TagsButton,
  TagListItem,
  TasksContainer,
} from './style'

const tagsList = [
  {optionId: 'HEALTH', displayText: 'Health'},
  {optionId: 'EDUCATION', displayText: 'Education'},
  {optionId: 'ENTERTAINMENT', displayText: 'Entertainment'},
  {optionId: 'SPORTS', displayText: 'Sports'},
  {optionId: 'TRAVEL', displayText: 'Travel'},
  {optionId: 'OTHERS', displayText: 'Others'},
]

class App extends Component {
  state = {
    inputTask: '',
    selectTag: tagsList[0].optionId,
    myTaskList: [],
    activeTag: '',
  }

  onChangeInputTask = event => {
    this.setState({inputTask: event.target.value})
  }

  onChangeSelectTag = event => {
    this.setState({selectTag: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {inputTask, selectTag} = this.state
    if (inputTask.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        taskName: inputTask,
        taskCategory: selectTag,
      }
      this.setState(prevState => ({
        myTaskList: [...prevState.myTaskList, newTask],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onClickTagButton = optionId => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === optionId ? '' : optionId,
    }))
  }

  render() {
    const {inputTask, selectTag, myTaskList, activeTag} = this.state
    const filteredTasks =
      activeTag === ''
        ? myTaskList
        : myTaskList.filter(task => task.taskCategory === activeTag)

    return (
      <MainContainer>
        <TaskInputContainer onSubmit={this.onSubmitForm}>
          <Heading>Create a task</Heading>
          <InputContainer>
            <LabelText htmlFor="taskInput">Task</LabelText>
            <Input
              id="taskInput"
              type="text"
              placeholder="Enter the task here"
              value={inputTask}
              onChange={this.onChangeInputTask}
            />
          </InputContainer>
          <InputContainer>
            <LabelText htmlFor="tagSelect">Tags</LabelText>
            <Select
              id="tagSelect"
              value={selectTag}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(tag => (
                <option key={tag.optionId} value={tag.optionId}>
                  {tag.displayText}
                </option>
              ))}
            </Select>
          </InputContainer>
          <AddButton type="submit">Add Task</AddButton>
        </TaskInputContainer>

        <TaskDisplayContainer>
          <TagsHeading>Tags</TagsHeading>
          <TagsContainer>
            {tagsList.map(tag => (
              <TagListItem key={tag.optionId}>
                <TagsButton
                  type="button"
                  onClick={() => this.onClickTagButton(tag.optionId)}
                  isActive={activeTag === tag.optionId}
                >
                  {tag.displayText}
                </TagsButton>
              </TagListItem>
            ))}
          </TagsContainer>

          <TagsHeading>Tasks</TagsHeading>
          <TasksContainer>
            {filteredTasks.length === 0 ? (
              <NoTaskText>No Tasks Added Yet</NoTaskText>
            ) : (
              filteredTasks.map(task => (
                <TagListItem key={task.id}>
                  <NoTaskText>Task: {task.taskName}</NoTaskText>
                  <NoTaskText>Tag: {task.taskCategory}</NoTaskText>
                </TagListItem>
              ))
            )}
          </TasksContainer>
        </TaskDisplayContainer>
      </MainContainer>
    )
  }
}

export default App
