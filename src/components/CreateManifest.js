import React, { Component } from 'react'
import { Button } from 'react-desktop/windows'
var AdmZip = window.require('adm-zip')

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
                  var zip = new AdmZip(files[0])
                  var zipEntries = zip.getEntries()

                  zipEntries.forEach(function(zipEntry) {
                    var node = document.createElement('li')
                    var textnode = document.createTextNode(zipEntry.name)
                    node.appendChild(textnode)
                    document.getElementById('archive').appendChild(node)
                    console.log(zipEntry.name)
                  })
                }
              }
            )
          }
        >
          Press me!
        </Button>
        <ul id="archive" />
      </div>
    )
  }
}
