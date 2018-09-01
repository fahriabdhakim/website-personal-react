import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../../App.css';


export default class Header extends Component {
  state = { activeItem: '1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted borderless color='teal' >
        <Menu.Menu>
        <Menu.Item className='Menu-left-header' as='h3' name='FAHRI' />
      </Menu.Menu>
      <Menu.Menu >
        <Menu.Item className='Menu-right-header' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item name='Skill' active={activeItem === 'Skill'} onClick={this.handleItemClick} />
        <Menu.Item name='Education' active={activeItem === 'Education'} onClick={this.handleItemClick} />
        <Menu.Item name='Portofolio' active={activeItem === 'Portofolio'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
      </Menu.Menu>
    </Menu>
    )
  }
}
