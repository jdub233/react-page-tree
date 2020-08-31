import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import MinimalTheme from 'react-sortable-tree-theme-minimal';

export default class PageTree extends Component {  

  render() {
    return (
      <div style={{ height: 800 }}>
        <SortableTree
          treeData={this.props.treeData}
          onChange={this.props.changeTree}
          theme={MinimalTheme}
        />
      </div>
    );
  }
}
