import React from "react";

import styles from "./app.module.css";
import { GridInspector } from "./components/grid-inspector";
import { GridItemInspector } from "./components/grid-item-inspector";

function App() {
  return (
    <div className={styles.root}>
      <GridInspector />
      <div className={styles.grid}></div>
      <GridItemInspector />
    </div>
  );
}

export default App;
