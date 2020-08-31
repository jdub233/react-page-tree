import React from 'react';
import SortableTree from 'react-sortable-tree';
import MinimalTheme from 'react-sortable-tree-theme-minimal';

export default function ({ treeData, changeTree }) {  

  return (
    <div style={{ height: 800 }}>
      <SortableTree
        treeData={treeData}
        onChange={changeTree}
        theme={MinimalTheme}
      />
    </div>
  );
}
