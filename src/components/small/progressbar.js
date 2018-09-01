import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBar = () => (
  <div>
    A
    <Progress progress='percent' active percent={70} color='teal' />
    B
    <Progress progress='percent' active percent={20} color='teal' />
    C
    <Progress progress='percent' active percent={90} color='teal' />

  </div>
)

export default ProgressBar
