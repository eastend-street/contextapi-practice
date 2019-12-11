import React from 'react'
import ChildComp3 from './ChildComp3'
import ChildComp3Two from './ChildComp3Two'

const ChildComp2 = () => {
  return (
    <div>
      <div>This is a child comp 2</div>
      <ChildComp3 />
      <ChildComp3Two />
    </div>
  )
}

export default ChildComp2
