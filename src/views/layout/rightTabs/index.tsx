import React from 'react'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane

// TODO 
// 后期待配置 根据属性映射关系自动遍历绑定 不需要一个个去手👋码
const Index: React.FC = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="组件属性" key="formProps">
                Content of Tab Pane 1
              </TabPane>
            <TabPane tab="数据源" key="dataSource">
                Content of Tab Pane 2
            </TabPane>
        </Tabs>
    )
}

export default Index