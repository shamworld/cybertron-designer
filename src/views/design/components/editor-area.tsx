import WidgetSchema from "@/interface/schema/widget/widget.schema";
import React from "react";

export interface EditorAreaProps {
  // TODO type issue
  schema: WidgetSchema | null;
} 

export default class EditorArea extends React.Component<EditorAreaProps, {}> {
  constructor(props: EditorAreaProps) {
    super(props);
    this.props = {
      schema: null
    };
  }

  props: EditorAreaProps;

  render() {
    return <div>Editor Area works!</div>
  }
}