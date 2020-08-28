import React, {Component} from 'react'
import {render} from 'react-dom'

import PageTree from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-page-tree Demo</h1>
      <PageTree/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
