import React, { Component } from 'react'
import { TextInput, Button } from 'react-desktop/windows'
const { systemPreferences } = window.require('electron').remote

export default class extends Component {
  static defaultProps = {
    color: systemPreferences.getAccentColor(),
    theme: 'light',
  }

  render() {
    return (
      <div>
        <TextInput
          ref="input"
          theme={this.props.theme}
          color={this.props.color}
          width={300}
          background={'white'}
          label="Output Folder"
          value={''}
          placeholder="C:\Path\To\Desired\Location"
          onChange={''}
        />
        <TextInput
          ref="input"
          theme={this.props.theme}
          color={this.props.color}
          width={300}
          background={'white'}
          label="DIM Downloads Folder"
          placeholder="C:\Path\To\DAZ\Downloads"
          onChange={''}
        />
        <Button push color={this.props.color} onClick={''}>
          Save Settings
        </Button>
      </div>
    )
  }
}
