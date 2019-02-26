import React, { Component } from 'react'
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows'
import CreateManifest from './CreateManifest'
import Settings from './Settings'
import ProductDetails from './ProductDetails'

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light',
  }

  constructor() {
    super()
    this.state = {
      selected: 'Create Manifest',
    }
  }

  render() {
    return (
      <NavPane
        openLength={200}
        push
        color={this.props.color}
        theme={this.props.theme}
      >
        {this.renderItem('Create Manifest', <CreateManifest />)}
        {this.renderItem('Product Details', <ProductDetails />)}
        {this.renderItem('Smart Content Metadata', 'Content 2')}
        {this.renderItem('Settings', <Settings />)}
      </NavPane>
    )
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={title}
        theme="light"
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <Text>{content}</Text>
      </NavPaneItem>
    )
  }
}
