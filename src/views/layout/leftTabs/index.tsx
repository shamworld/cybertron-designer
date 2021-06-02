import React from 'react'
import { Tabs } from 'antd';
import mockComponentList, { } from '@/mock/component-list'
import { IComponentList } from '@/types/templateProps'
import ComponentList from './componentList'
import Tree from './treeList'
const TabPane = Tabs.TabPane

const Index: React.FC = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="组件" key="components">
                <Tabs tabPosition="left">
                    {mockComponentList.map((item: IComponentList) => {
                        return (
                            <TabPane tab={item.typeName} key={item.type}>
                                <ComponentList list={item.list} />
                            </TabPane>
                        )
                    })}
                </Tabs>
            </TabPane>
            <TabPane tab="组件组合🌲" key="tree">
                <Tree />
            </TabPane>
        </Tabs >
    )
}

export default Index