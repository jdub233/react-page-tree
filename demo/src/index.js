import React, { useState } from 'react'
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

function Demo() {

  const [treeData, setTreeData] = useState(demoPages);

  return (
    <div>
      <h1>react-page-tree Demo</h1>
      <button onClick={() => console.log(treeData) } >Show tree in console</button>
      <PageTree 
        treeData={treeData}
        setTreeData={setTreeData}
      />
    </div>
  )
}

render(<Demo/>, document.querySelector('#demo'))
