import React from "react";
import styles from "./app.module.css";
import { GridInspector, GridStyle } from "./components/grid-inspector";
import { GridItemInspector } from "./components/grid-item-inspector";

export type StyleMap = { [style in Partial<GridStyle>]?: string };

function App() {
  const [numOfItems, setNumOfItems] = React.useState(10);
  const [style, setStyle] = React.useState<StyleMap>({});

  return (
    <div className={styles.root}>
      <GridInspector setStyle={setStyle} />
      <div className={styles.grid} style={{ gridGap: "10px" }}>
        {Array.from(Array(numOfItems).keys()).map((idx) => (
          <div key={idx} className={styles.box}>
            {idx}
          </div>
        ))}
      </div>
      <GridItemInspector />
    </div>
  );
}

export default App;
