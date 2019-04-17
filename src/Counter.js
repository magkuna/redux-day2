import React from 'react'

import { connect } from 'react-redux'
import { incActionCreator, decActionCreator } from './state/counter'

const Counter = (props) => (
  <div>
    <h1>
      {props._number}
    </h1>
    <button
      onClick={props._inc}
    >
      +
    </button>
    <button
      onClick={props._dec}
    >
      -
    </button>
  </div>
)

const mapStateToProps = state => ({
  // propName: part of state
  _number: state.counter.number,
})

const mapDispatchToProps = dispatch => ({
  // propName: function that dispatches action 
  _inc: () => dispatch(incActionCreator()),
  _dec:() => dispatch(decActionCreator())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)