import React from 'react'
import {TestContext} from './context/testContext'

class ChildComp3Two extends React.Component {
  static contextType = TestContext
  render() {
    console.log(this.context)
    return <div>this is consumer2: {this.context.students}</div>
  }
}

export default ChildComp3Two
