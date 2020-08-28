import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app

export default class PageTree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
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
      ],
    };
  }

  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
        />
      </div>
    );
  }
}
