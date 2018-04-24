import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import ResumeButton from '../small/resumebutton';
import SocialButton from '../small/socialbutton';
import ProfileBox from '../medium/profilebox';
import SkillBox from '../medium/skillbox';
const HomePage = () => (<div>
  <Grid>
    <Grid.Column mobile={16} tablet={8} computer={5}>
      <Image size="medium" centered src='/images/myphoto.jpg'/>
    </Grid.Column>

    <Grid.Column mobile={16} tablet={8} computer={10}>
      <ProfileBox/>
    </Grid.Column>

    <Grid.Column mobile={16} tablet={8} computer={5}>
      <ResumeButton/>
    </Grid.Column>

    <Grid.Column mobile={16} tablet={8} computer={10}>
      <SocialButton/>
    </Grid.Column>
  </Grid>
  <br/>
  <SkillBox/>
</div>)

export default HomePage
