import React from 'react'
import { Grid, Button } from 'semantic-ui-react'

const SocialButton = () => (
  <Grid stackable centered>
    <Grid.Column>
    <a href="https://id.linkedin.com/in/m-fahri-abdul-hakim-591830158" rel="noopener noreferrer" target='_blank'><Button basic color='blue' icon='linkedin' /></a>
    </Grid.Column>

    <Grid.Column>
    <a href="https://plus.google.com/106126697024381154530" rel="noopener noreferrer" target='_blank'><Button basic color='red' icon='google plus' /></a>
    </Grid.Column>

    <Grid.Column>
    <Button basic color='teal' icon='twitter' />
    </Grid.Column>

    <Grid.Column>
    <a href="https://www.facebook.com/fahriabdulhakim" rel="noopener noreferrer" target='_blank'><Button basic color='blue' icon='facebook' /></a>
    </Grid.Column>

    <Grid.Column>
    <Button basic color='purple' icon='yahoo' />
    </Grid.Column>

    <Grid.Column>
    <a href="https://www.instagram.com/fahrihakim_/" rel="noopener noreferrer" target='_blank'><Button basic color='pink' icon='instagram' /></a>
    </Grid.Column>

    <Grid.Column>
    <a href="https://www.github.com/fahriabdhakim/" rel="noopener noreferrer" target='_blank'><Button basic color='black' icon='github' /></a>
    </Grid.Column>
  </Grid>
)

export default SocialButton
