import React, { Component } from 'react'
import { Button, ProgressCircle } from 'react-desktop/windows'
var JSZip = window.require('jszip')
var fs = window.require('fs')
const { dialog, systemPreferences } = window.require('electron').remote

export default class extends Component {
  static defaultProps = {
    color: systemPreferences.getAccentColor(),
  }

  render() {
    return (
      <div>
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
                  // var zip = new JSZip()
                  fs.readFile(files[0], function(err, data) {
                    if (err) throw err
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

        <ul id="archive" />
      </div>
    )
  }
}
