import React from "react";
import styles from "./field.module.css";
import { Input } from "semantic-ui-react";

interface FieldProps {
  fieldName: string;
}

export function Field(props: FieldProps) {
  const { fieldName } = props;
  return (
    <div className={styles.root}>
      <a className={styles.title}>{fieldName}</a>
      <Input onChange={(value) => console.log(value)} />
    </div>
  );
}
