import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import ProgressBar from '../small/progressbar'

const SkillBox = () => (<div>
  <Segment secondary>
    <Grid stackable centered columns={2}>
      <Grid.Column textAlign="center">
        MY SKILL
      </Grid.Column>

      <Grid.Row centered columns={2}>
        <Grid.Column>
          <ProgressBar/>
        </Grid.Column>
        <Grid.Column>
          <ProgressBar/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
</div>)

export default SkillBox
