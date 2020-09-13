import React from "react";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.gridInspector}></div>
      <div className={styles.grid}></div>
      <div className={styles.gridItemInspector}></div>
    </div>
  );
}

export default App;
