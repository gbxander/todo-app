export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_TITLE = 'SET_TITLE'
export const SET_DESCRIPTION = 'SET_DESCRIPTION'
export const INITIAL_STATE = { listTitle: "", listDescription: "", todos: [] }

const todoReducer = (state, action) => {
    const { type, payload } = action || {}
    if (!type) throw new Error('Action types must be defined')

    switch (type) {
        case ADD_ITEM:
            {
                let generateId = Date.now() + Math.random()
                return {
                    ...state,
                    todos: [...state.todos, {id: generateId, task: "", completed: false}]
                }
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload.taskId)
            }
        case EDIT_TODO:
            {
                const updatedTodos = state.todos.map((todo) => {
                    if (todo.id === payload.taskId) {
                        return {...todo, task: payload.task}
                    }
                    return todo
                })
                return {
                    ...state,
                    todos: updatedTodos,
                }

            }
        case TOGGLE_TODO:
            {
                const updatedTodos = state.todos.map((todo) => {
                    if (todo.id === payload.taskId) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo
                })
                return {
                    ...state,
                    todos: updatedTodos
                }
            }
        case SET_TITLE:
            {
                return {
                    ...state,
                    listTitle: payload.title
                }
            }
        case SET_DESCRIPTION:
            {
                return {
                    ...state,
                    listDescription: payload.description
                }
            }
        default:
            throw new Error('Not a valid action type')
    }
}

export default todoReducer