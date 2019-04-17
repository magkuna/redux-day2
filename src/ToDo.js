import React from 'react'

import { connect } from 'react-redux'
import { addActionCreator, deleteActionCreator, newTaskChangedActionCreator } from './state/toDo'

const ToDo = (props) => (

    <div>
        <input
            value={props._text}
            onChange={event => props._taskTextChanged(event.target.value)}
        />
        <button
            onClick={props._add}
        >
            Dodaj
                </button>
        <ul>
            <ul>
                {props._tasks.map(
                    (task, i) => (
                        <li
                            key={task.key}
                        >
                            {task.text}
                            <button
                                onClick={() => props._deleteTask(task.key)}
                            >
                                Usuń
                                    </button>
                        </li>
                    )
                )}
            </ul>
        </ul>
    </div>
)

const mapStateToProps = state => ({
    _tasks: state.toDo.tasks,
    _text: state.toDo.text
})

const mapDispatchToProps = dispatch => ({
    _add: () => dispatch(addActionCreator()),
    _deleteTask: (taskKey) => dispatch(deleteActionCreator(taskKey)),
    _taskTextChanged: (text) => dispatch(newTaskChangedActionCreator(text))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToDo)