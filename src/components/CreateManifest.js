import React, { Component } from 'react'
import { Button, TextInput } from 'react-desktop/windows'
const { dialog, systemPreferences } = window.require('electron').remote

export default class extends Component {
  static defaultProps = {
    color: systemPreferences.getAccentColor(),
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
          label="Content Name"
          placeholder="The name of the content"
        />
        <Button
          push
          color={this.props.color}
          onClick={() =>
            dialog.showOpenDialog(
              {
                properties: ['openFile'],
              },
              function(files) {
                if (files !== undefined) {
                  const fs = window.require('fs')
                  fs.readFile(files[0], function(err, data) {
                    if (err) throw err
                    const JSZip = window.require('jszip')
                    JSZip.loadAsync(data).then(function(zip) {
                      console.log(zip)
                    })
                  })
                }
              }
            )
          }
        >
          Select Archive
        </Button>
      </div>
    )
  }
}
