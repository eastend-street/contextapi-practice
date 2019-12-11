import React from 'react'
import ReactDOM from 'react-dom'
import {TestContext} from './context/testContext'
import ChildComp from './ChildComp'

const App = () => {
  return (
    <TestContext.Provider
      value={{
        students: ['Marie', 'Taishi', 'Shota'],
        onSubmit: data => console.log(data),
      }}
    >
      <div>Hello</div>
      <ChildComp />
    </TestContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
