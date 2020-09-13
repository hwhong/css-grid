import React from "react";
import styles from "./grid-inspector.module.css";
import { Panel } from "./panel";
import { Field } from "./field";

interface GridInspectorProps {}

export function GridInspector(props: GridInspectorProps) {
  return (
    <Panel>
      <>
        <Field fieldName="grid-template-columns" />
        <Field fieldName="grid-template-rows" />

        <Field fieldName="column-gap" />
        <Field fieldName="row-gap" />

        <Field fieldName="justify-items" />
        <Field fieldName="align-items" />
        <Field fieldName="justify-content" />
      </>
    </Panel>
  );
}
