import React, { Component, ReactElement } from "react";
import EditorArea from "./components/editor-area";
import PanelArea from "./components/panel-area";
import SettingArea from "./components/setting-area";
import { v4 as uuid } from 'uuid';
import StyleValueUnit from "@/enum/style-value-unit";
import WidgetType from "@/enum/schema/widget-type.enum";
import PageSchema from "@/interface/schema/page.schema";

export interface DesignState {
  schema: PageSchema | null;
}

export default class Design extends Component<{}, DesignState> {
  constructor(props: any) {
    super(props);
    this.state = {
      schema: {
        id: uuid(),
        name: '页面',
        desc: '页面',
        type: WidgetType.page,
        props: {
          style: {
            width: {
              name: 'width',
              value: 375,
              unit: StyleValueUnit.px
            },
            height: {
              name: 'height',
              value: 812,
              unit: StyleValueUnit.px
            }
          },
          route: '',
          // 运行期间读取和写入的
          localStorage: {
            read: {},
            write: {}
          },
          query: {
            read: {},
            write: {}
          },
          // 页面用到的接口
          httpApi: [],
          // 发送事件给 native
          nativeEvent: {},
          // 接收 native 事件
          nativeMessage: {},
          // 页面的运行时状态 ( 包括远端数据 )
          state: {},
          // 页面内的交互事件
          events: {},
        },
        children: [],
      }
    };
  }

  render(): ReactElement {
    const { schema } = this.state;
    console.log('schema: ', schema);
    return <div className="flex flex-col h-screen w-screen">
      <section className="flex-shrink-0 h-60 border-b border-border"></section>
      <section className="flex-shrink-0 body flex flex-grow">
        <div className="flex-shrink-0 component-panel border-border">
          <PanelArea></PanelArea>
        </div>
        <div className="flex-shrink-0 designer-canvas flex-grow">
          <EditorArea schema={schema} />
        </div>
        <div className="flex-shrink-0 form-panel border-l border-border">
          <SettingArea></SettingArea>
        </div>
      </section>
    </div>
  }
}