import React from 'react'
import {List} from 'antd'
import Todo from '../Todo'
import PropTypes from 'prop-types'

/**
 * @description Renders the entire list of todos
 */
const TodoList = ({ todos, ...rest}) => {
    return (
      <div className='todo-list'>
        <List
          style={{
            paddingLeft: '0px',
            textAlign: 'left',
            fontSize: '25px'
          }}
          itemLayout='horizontal'
          dataSource={todos}
          locale={{ emptyText: 'Click below to add todos' }}
          renderItem={(todo, index) => (
            <List.Item>
                <List.Item.Meta
                title={`Task ${index + 1}`}
                description={
                    <Todo 
                        key={todo.id}
                        todo={todo} 
                        {...rest}
                     />
                }
                />
            </List.Item>
          )}
        />
      </div>
    )
  }

  TodoList.propTypes = {
    todos: PropTypes.array.isRequired
  }

  export default TodoList