import React from 'react'
import {TestContext} from './context/testContext'

const ChildComp3 = () => {
  return (
    <TestContext.Consumer>
      {value => {
        return (
          <>
            <div>This is a child comp 3: {value.students}</div>
            <button onClick={() => value.onSubmit(value.students)}>
              submit
            </button>
          </>
        )
      }}
    </TestContext.Consumer>
  )
}

export default ChildComp3
