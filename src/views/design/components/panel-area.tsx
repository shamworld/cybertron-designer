import React from "react";
import Tabs from 'antd/es/tabs';

export interface PanelAreaState {
  tabPosition: 'left' | 'right' | 'top' | 'bottom';
}
const TabPane = Tabs.TabPane

export default class PanelArea extends React.Component<{}, PanelAreaState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tabPosition: 'right',
    };
  }

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition={tabPosition}>
        <TabPane tab="组件库" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="组件树" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </>
    );
  }
}