import React, { useMemo, useReducer } from 'react'
import { Progress, Button } from 'antd'
import Icon from '@ant-design/icons';
import TodoList from '../TodoList'
import ListInfo from '../ListInfo'
import todoReducer, {
    INITIAL_STATE,
    ADD_ITEM,
    EDIT_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    SET_TITLE,
    SET_DESCRIPTION
} from '../../hooks/useTodoReducer'
import { getProgress } from '../../utils';
import '../../assets/styles/styles.css';


const TodoView = () => {
    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE)
    const memoizedProgress = useMemo(() => getProgress(state.todos), [state.todos])
    const progressClass =
        memoizedProgress === 100 ? 'completed-progress' : 'incomplete-progress'

    const completeIcon =
        memoizedProgress === 100 ? (
            <Icon
                className='check-mark'
                type='check-circle'
                theme='twoTone'
                twoToneColor='#52c41a'
            />
        ) : (
            <span />
        )

    const handleTodoEdit = (taskId, task) => dispatch({type: EDIT_TODO, payload: {taskId, task}})
    const handleTodoToggle = (taskId) => dispatch({type: TOGGLE_TODO, payload: {taskId}})
    const handleTodoDelete = (taskId) => dispatch({type: DELETE_TODO, payload: {taskId}})
    const handleSetTitle = (title) => dispatch({type: SET_TITLE, payload: {title}}) 
    const handleSetDescription = (description) => dispatch({type: SET_DESCRIPTION, payload: {description}})

    return (
        <div>
            <h1>
                List Creator <span className='glyphicon glyphicon-th-list' />
            </h1>
            <section className='app'>
                <ListInfo 
                    handleSetTitle={handleSetTitle}
                    handleSetDescription={handleSetDescription}
                />
                <div className='todo-wrapper'>
                    <Progress 
                        className={progressClass}
                        percent={memoizedProgress}
                        showInfo={false}
                        strokeWidth='10px'
                        strokeLinecap='square'
                    />
                {completeIcon}
                <TodoList 
                    todos={state.todos}
                    handleTodoEdit={handleTodoEdit}
                    handleTodoToggle={handleTodoToggle}
                    handleTodoDelete={handleTodoDelete}
                />
                </div>
                <hr />
                <div className='todo-add-item'>
                    <Button onClick={() => dispatch({ type: ADD_ITEM})}>
                        <Icon type='plus' theme='outlined' />
                        Add Item
                    </Button>
                </div>
            </section>
        </div>
    )
    
}

export default TodoView