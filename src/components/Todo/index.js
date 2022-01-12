import React, { useState } from 'react'
import { Checkbox, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const { TextArea } = Input

/**
 * @description Renders single todo element which includes the string value of task,
 * a checkbox to mark todo as complete and a button to remove todo.
 */
const Todo = ({ todo, handleTodoEdit, handleTodoToggle, handleTodoDelete }) => {
    const [task, setTask] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    if (isEditing) {
        return (
          <div className='edit-input'>
            <TextArea
              type='text'
              onChange={(e) => setTask(e.currentTarget.value)}
              onBlur={() => {
                handleTodoEdit(todo.id, task)
                setIsEditing(false)
              }}
              value={task}
              placeholder={'Enter Task'}
              style={{ fontSize: '18px' }}
              rows={1}
              autosize={{ minRows: 1, maxRows: 3 }}
              autoFocus
            />
          </div>
        )
      } else {
        return (
          <div className='todo-row'>
            <Checkbox
              checked={todo.completed}
              onChange={() => handleTodoToggle(todo.id)}
              style={{ marginRight: '5px', height: '25px' }}
            />
  
            <div className='todo-input'>
              <TextArea
                value={todo.task}
                onClick={() => setIsEditing(!isEditing)}
                rows={1}
                placeholder='Enter Task'
                style={{ fontSize: '18px', width: '100%' }}
                autosize={{ minRows: 1, maxRows: 3 }}
              />
            </div>
            <button
              className='delete-btn'
              onClick={() => handleTodoDelete(todo.id)}
            >
              <DeleteOutlined style={{ fontSize: '17px' }} />
            </button>
          </div>
        )
      }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  handleTodoEdit: PropTypes.func.isRequired,
  handleTodoToggle: PropTypes.func.isRequired,
  handleTodoDelete: PropTypes.func.isRequired,
}

export default Todo

