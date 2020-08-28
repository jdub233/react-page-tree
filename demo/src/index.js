import React, {Component} from 'react'
import {render} from 'react-dom'

import PageTree from '../../src'

const demoPages = [
  { title: 'Home' },
  { title: 'Admissions', children: [
    { title: 'Undergraduate' },
    { title: 'Graduate' }
  ] },
  { title: 'Academics', children: [
    { title: 'Schools' },
    { title: 'Programs' }
  ] },
  { title: 'Research' },
  { title: 'Campus' },
];

class Demo extends Component {
  render() {
    return <div>
      <h1>react-page-tree Demo</h1>
      <PageTree pages={demoPages} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
