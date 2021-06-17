import WidgetSchema from '@/interface/schema/widget/widget.schema';
import React from 'react';

import style from './index.less';

export interface EditorAreaProps {
  // TODO type issue
  schema: WidgetSchema | null;
}

export default class EditorArea extends React.Component<EditorAreaProps, {}> {
  constructor(props: EditorAreaProps) {
    super(props);
  }

  render() {
    const { props } = this;
    return <div className={style.main}>Editor Area works!</div>;
  }
}
