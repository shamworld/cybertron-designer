import React from 'react';

import style from './index.less';

export default class ContainerWidget extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className={style.main}>Container Works!</div>;
  }
}
