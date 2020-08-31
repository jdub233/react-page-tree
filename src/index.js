import React from 'react';
import SortableTree from 'react-sortable-tree';
import MinimalTheme from 'react-sortable-tree-theme-minimal';

export default function ({ treeData, setTreeData }) {  

  return (
    <div style={{ height: 800 }}>
      <SortableTree
        treeData={treeData}
        onChange={setTreeData}
        theme={MinimalTheme}
      />
    </div>
  );
}
