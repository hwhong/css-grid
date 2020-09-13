import React from "react";
import styles from "./panel.module.css";

interface PanelProps {
  children: React.ReactNode;
}

export function Panel(props: PanelProps) {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
}
