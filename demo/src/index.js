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

  constructor(props) {
    super(props);

    this.state = { treeData: demoPages };
  }

  changeTree = (treeData) => { this.setState({treeData}) }

  render() {
    return <div>
      <h1>react-page-tree Demo</h1>
      <button onClick={() => console.log(this.state.treeData) } >Show tree in console</button>
      <PageTree 
        treeData={this.state.treeData}
        changeTree={this.changeTree}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
