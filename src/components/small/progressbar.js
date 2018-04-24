import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBar = () => (
  <div>
    A
    <Progress progress='percent' active percent={70} color='yellow' />
    B
    <Progress progress='percent' active percent={20} color='yellow' />
    C
    <Progress progress='percent' active percent={90} color='yellow' />

  </div>
)

export default ProgressBar
