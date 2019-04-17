import uuidv1 from 'uuid/v1'

const ADD = 'toDo/ADD'
const DELETE = 'todo/DELETE'
const NEW_TASK_CHANGED = 'todo/NEW_TASK_CHANGED'

export const addActionCreator = () => ({
    type: ADD,

})

export const deleteActionCreator = (taskKey) => ({
    type: DELETE,
    taskKey
})

export const newTaskChangedActionCreator = (text) => ({
    type: NEW_TASK_CHANGED,
    text
})
const initialState = {
    tasks: [],
    text: ' ',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                tasks: state.tasks.concat({
                    text: state.text,
                    key: uuidv1(),
                })
            }
            case DELETE:
            return{
                ...state,
                tasks:state.tasks.filter((task) => task.key !==action.taskKey)
            }
            case NEW_TASK_CHANGED:
            return{
                ...state,
                text:action.text
            }
        default:
            return state
    }
}
