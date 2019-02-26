import React, { Component } from 'react'
import { TextInput, TextArea, Text, Label } from 'react-desktop/windows'

const { dialog, systemPreferences } = window.require('electron').remote

export default class extends Component {
  static defaultProps = {
    color: systemPreferences.getAccentColor(),
    theme: 'light',
  }

  handleChange = e => console.log(e.target.value)

  render() {
    return (
      <div>
        <Text background={'white'} theme={this.props.theme} width={'75%'}>
          All of the following fields are optional. These will add context to
          your DAZ content if you wish.
        </Text>
        <br />
        <div>
          <Label>Audience</Label>
          <select>
            <option>Children</option>
            <option>Teens</option>
            <option>Adult</option>
          </select>

          <TextInput
            ref="input"
            theme={this.props.theme}
            color={this.props.color}
            width={300}
            background={'white'}
            label="Artist(s)"
            placeholder="Artists, seperated by comma"
            onChange={this.handleChange}
          />
          <TextArea
            theme={this.props.theme}
            color={this.props.color}
            background={'white'}
            label="Description"
            placeholder="Brief description of the product"
            rows={5}
            cols={80}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}
