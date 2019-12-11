import React from 'react'
import ChildComp2 from './ChildComp2'

const ChildComp = () => {
  return (
    <div>
      <div>This is a child comp</div>
      <ChildComp2 />
    </div>
  )
}

export default ChildComp
